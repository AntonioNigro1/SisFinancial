import { AxiosHttpClient } from "@/modules/shared/infra/http/axios-http-client";
import { HttpMethod } from "@/modules/shared/infra/http/http-client";
import { throwErrors } from "@/modules/shared/utils/throwErrors";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { SignupData } from "../application/schema/signup-schema";
import { toast } from "@/modules/shared/presentation/view/hooks/use-toast";

const httpClient = new AxiosHttpClient("/api");

export default function requestRegisterUser(data: SignupData, router: AppRouterInstance) {
  const postRegisterUser = async () => {
    try {
      await httpClient.request({
        url: "/auth/signup",
        method: HttpMethod.POST,
        body: data,
      });
      toast({ description: "Conta criada com sucesso!" });
      router.push("/login");
    } catch (error) {
      throwErrors("Erro ao efetuar cadastro.", error);
    }
  };
  return postRegisterUser();
}
