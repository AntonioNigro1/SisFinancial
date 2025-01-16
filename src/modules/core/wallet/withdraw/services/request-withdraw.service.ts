import { AxiosHttpClient } from "@/modules/shared/infra/http/axios-http-client";
import { HttpMethod } from "@/modules/shared/infra/http/http-client";
import { toast } from "@/modules/shared/presentation/view/hooks/use-toast";
import { IMakeWithdraw } from "../domain/types/makeWithdraw";
import { throwErrors } from "@/modules/shared/utils/throwErrors";

const httpClient = new AxiosHttpClient("/api");

export default function requestWithdraw({ data, setLoading, updateBalance, user }: IMakeWithdraw) {
  const postWithdraw = async () => {
    try {
      setLoading(true);
      const { data: AxiosData } = await httpClient.request<{ balance: string }>({
        url: `/withdraw/${data.userId}`,
        method: HttpMethod.POST,
        body: data,
      });
      updateBalance({ ...user }, AxiosData.balance);
      toast({ title: "Saque realizado com sucesso", description: `Sacado ${data.amount}` });
    } catch (error) {
      throwErrors("Falha ao realizar saque.", error);
    } finally {
      setLoading(false);
    }
  };
  return postWithdraw();
}
