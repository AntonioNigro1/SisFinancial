import { AccountTypeEnum } from "@/modules/core/auth/signup/domain/enum/accountTypeEnum";
import { AxiosHttpClient } from "@/modules/shared/infra/http/axios-http-client";
import { HttpMethod } from "@/modules/shared/infra/http/http-client";
import { toast } from "@/modules/shared/presentation/view/hooks/use-toast";
import { throwErrors } from "@/modules/shared/utils/throwErrors";
import { AccountBalance } from "@prisma/client";
import { IRequestTransference } from "../domain/types/requestTransference";

const httpClient = new AxiosHttpClient("/api");

export default function requestTransference({ data, setLoading, updateBalance, user }: IRequestTransference) {
  const postTransference = async () => {
    try {
      setLoading(true);
      let receiver;
      if (data.accountType === AccountTypeEnum.FISICA) {
        const { data: AxiosData } = await httpClient.request<{ account: AccountBalance }>({
          url: `/person/${data.cpf}`,
          method: HttpMethod.GET,
        });

        receiver = AxiosData;
      }
      if (data.accountType === AccountTypeEnum.JURIDICA) {
        const { data: AxiosData } = await httpClient.request<{ account: AccountBalance }>({
          url: `/company/${data.cnpj}`,
          method: HttpMethod.GET,
        });
        receiver = AxiosData;
      }
      const { data: AxiosData } = await httpClient.request<{ balance: string }>({
        url: `/transference/${data.userId}/${receiver?.account?.userId}`,
        method: HttpMethod.POST,
        body: data,
      });

      updateBalance({ ...user }, AxiosData.balance);
      toast({ title: "Transferência realizada com sucesso", description: `Transferido ${data.amount}` });
    } catch (error) {
      throwErrors("Erro ao realizar transferência", error);
    } finally {
      setLoading(false);
    }
  };
  return postTransference();
}
