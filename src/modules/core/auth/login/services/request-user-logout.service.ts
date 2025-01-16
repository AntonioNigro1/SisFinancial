import { AxiosHttpClient } from "@/modules/shared/infra/http/axios-http-client";
import { HttpMethod } from "@/modules/shared/infra/http/http-client";
import { toast } from "@/modules/shared/presentation/view/hooks/use-toast";
import { isCustomAxiosError } from "@/modules/shared/utils/typeguard";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const httpClient = new AxiosHttpClient("/api");

export default function requestLogout(router: AppRouterInstance, setNavigating: (arg: boolean) => void) {
  const makeLogout = async () => {
    try {
      await httpClient.request({
        url: "/auth/logout",
        method: HttpMethod.GET,
      });
      setNavigating(true);
      router.push("/login");
    } catch (error) {
      if (isCustomAxiosError(error)) toast({ title: "Erro ao efetuar logout", description: error.details.error });
      else toast({ title: "Erro ao efetuar logout" });
    }
  };

  return makeLogout();
}
