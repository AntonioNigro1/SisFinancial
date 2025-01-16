import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { HeaderNormalizer } from "./header-normalizer";
import { HttpClient, HttpError, HttpRequest, HttpResponse } from "./http-client";

export class AxiosHttpClient implements HttpClient {
  private readonly axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({ baseURL, withCredentials: true });

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => {
        if (error.response?.status === 401) {
          // Adicione aqui a lógica para redirecionar ao login, se necessário
        }
        return Promise.reject(error);
      }
    );
  }

  async request<T>(request: HttpRequest): Promise<HttpResponse<T>> {
    const axiosConfig: AxiosRequestConfig = {
      url: request.url,
      method: request.method,
      data: request.body,
      headers: request.headers,
      params: request.query,
    };

    try {
      const axiosResponse: AxiosResponse<T> = await this.axiosInstance(axiosConfig);

      return {
        status: axiosResponse.status,
        data: axiosResponse.data,
        headers: HeaderNormalizer.normalize(axiosResponse.headers as Record<string, string | number | boolean | string[] | number[] | boolean[]>),
      };
    } catch (error) {
      const axiosError = error as AxiosError;

      const httpError: HttpError = {
        status: axiosError.response?.status || 500,
        message: axiosError.message,
        code: axiosError.code,
        details: axiosError.response?.data as Record<string, unknown> | undefined,
      };

      throw httpError;
    }
  }
}
