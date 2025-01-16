import { AxiosHttpClient } from "@/modules/shared/infra/http/axios-http-client";
import { HttpMethod } from "@/modules/shared/infra/http/http-client";
import { toast } from "@/modules/shared/presentation/view/hooks/use-toast";
import { throwErrors } from "@/modules/shared/utils/throwErrors";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { LoginData } from "../application/schema/login-schema";

const httpClient = new AxiosHttpClient("/api");

export default function requestLogin(data: LoginData, setLoading: (arg: boolean) => void, router: AppRouterInstance) {
  const makeLogin = async () => {
    try {
      await httpClient.request({
        url: "/auth/login",
        method: HttpMethod.POST,
        body: data,
      });
      toast({ description: "Login efetuado com sucesso! redirecionando ..." });
      router.push("/app");
    } catch (error) {
      throwErrors("Erro ao efetuar login.", error);
    } finally {
      setLoading(false);
    }
  };
  setLoading(true);
  return makeLogin();
}
