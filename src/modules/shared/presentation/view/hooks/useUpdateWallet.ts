import { AxiosHttpClient } from "@/modules/shared/infra/http/axios-http-client";
import { HttpMethod } from "@/modules/shared/infra/http/http-client";
import { throwErrors } from "@/modules/shared/utils/throwErrors";
import { useEffect } from "react";
import { useCurrentUser } from "./useCurrentUser";
import { useWallet } from "./useWallet";

const httpClient = new AxiosHttpClient("/api");

export const useUpdateWallet = () => {
  const { updateUser, setLoading } = useWallet();
  const user = useCurrentUser();

  useEffect(() => {
    const fetchBalance = async () => {
      if (user && user.id) {
        try {
          const { data } = await httpClient.request<{ balance: string }>({
            url: `/balance/${user.id}`,
            method: HttpMethod.GET,
          });
          updateUser({ userId: user.id, name: user.name, balance: data.balance });
        } catch (error) {
          throwErrors("Falha ao buscar saldo", error);
        } finally {
          setLoading(false);
        }
      }
    };
    setLoading(true);
    fetchBalance();
  }, [user, updateUser, setLoading]);
};
