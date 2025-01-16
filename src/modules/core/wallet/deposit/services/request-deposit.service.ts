import { AxiosHttpClient } from "@/modules/shared/infra/http/axios-http-client";
import { HttpMethod } from "@/modules/shared/infra/http/http-client";
import { toast } from "@/modules/shared/presentation/view/hooks/use-toast";
import { throwErrors } from "@/modules/shared/utils/throwErrors";
import { IMakeDeposit } from "../domain/types/makeDeposit";

const httpClient = new AxiosHttpClient("/api");

export default function requestDeposit({ data, setLoading, updateBalance, user }: IMakeDeposit) {
  const postDeposit = async () => {
    try {
      setLoading(true);
      const { data: axiosData } = await httpClient.request<{ balance: string }>({
        url: `/deposit/${data.userId}`,
        method: HttpMethod.POST,
        body: data,
      });

      updateBalance({ ...user }, axiosData.balance);
      toast({ title: "Depósito realizado com sucesso", description: `Depositado ${data.amount}` });
    } catch (error) {
      throwErrors("Erro ao efetuar depósito", error);
    } finally {
      setLoading(false);
    }
  };
  return postDeposit();
}
