import { accountTypeStore } from "../../../application/store/accountTypeStore";
import { IUseAccountType } from "../../../domain/types/useAccountType";

export const useAccountType = (): IUseAccountType => {
  const accountType = accountTypeStore((state) => state.accountType);
  const updateAccountType = accountTypeStore((state) => state.updateAccountType);

  const clearAccountType = () => {
    updateAccountType(undefined);
  };

  return {
    accountType,
    updateAccountType,
    clearAccountType,
  };
};
