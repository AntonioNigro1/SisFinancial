import { AccountTypeEnum } from "@/modules/core/auth/signin/domain/enum/accountTypeEnum";
import { useCallback } from "react";
import { accountTypeStore } from "../../../application/store/accountTypeStore";
import { IUseAccountType } from "../../../types/useAccountType";

export const useAccountType = (): IUseAccountType => {
  const accountType = accountTypeStore((state) => state.accountType);
  const updateAccountType = accountTypeStore((state) => state.updateAccountType);

  const setAccountFisica = () => updateAccountType(AccountTypeEnum.FISICA);
  const setAccountJuridica = () => updateAccountType(AccountTypeEnum.JURIDICA);

  const clearAccountType = useCallback(() => {
    updateAccountType(undefined);
  }, [updateAccountType]);

  return {
    accountType,
    updateAccountType,
    clearAccountType,
    setAccountFisica,
    setAccountJuridica,
  };
};
