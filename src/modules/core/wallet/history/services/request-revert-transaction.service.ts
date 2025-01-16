import { AxiosHttpClient } from "@/modules/shared/infra/http/axios-http-client";
import { HttpMethod } from "@/modules/shared/infra/http/http-client";
import { toast } from "@/modules/shared/presentation/view/hooks/use-toast";
import { PutTransaction } from "../domain/types/putTransaction";
import requestHistory from "./request-history.service";
import { throwErrors } from "@/modules/shared/utils/throwErrors";
const httpClient = new AxiosHttpClient("/api");

export default function requestRevertTransaction({ transactionId, updateBalance, user, setData, setTotalPages, setLoading }: PutTransaction) {
  const putRevertTransaction = async () => {
    try {
      const { data } = await httpClient.request<{ balance: string }>({
        url: `/history/reversal/${user.userId}/${transactionId}`,
        method: HttpMethod.PUT,
      });

      updateBalance({ ...user }, data.balance);
      toast({ title: "Transação revertida com sucesso!" });
      const historyData = await requestHistory({ userId: user.userId, page: "1", pageSize: "10", setLoading });
      setData(historyData?.data ?? []);
      setTotalPages(historyData?.totalPages ?? 1);
    } catch (error) {
      throwErrors("Erro ao reverter transação.", error);
    }
  };
  return putRevertTransaction();
}
