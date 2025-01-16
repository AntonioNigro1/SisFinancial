import { AxiosHttpClient } from "@/modules/shared/infra/http/axios-http-client";
import { HttpMethod } from "@/modules/shared/infra/http/http-client";
import { throwErrors } from "@/modules/shared/utils/throwErrors";
import { IGetHistory, IRequestHistory } from "../domain/types/getHistory";

const httpClient = new AxiosHttpClient("/api");

export default function requestHistory({ userId, page, pageSize, setLoading }: IRequestHistory) {
  const getHistory = async () => {
    try {
      const { data } = await httpClient.request<{ paginatedHistory: { totalPages: number; data: IGetHistory[] } }>({
        url: `/history/${userId}?page=${page}&pageSize=${pageSize}`,
        method: HttpMethod.GET,
      });
      return data.paginatedHistory;
    } catch (error) {
      throwErrors("Erro ao buscar histórico.", error);
    } finally {
      setLoading(false);
    }
  };
  setLoading(true);
  return getHistory();
}
