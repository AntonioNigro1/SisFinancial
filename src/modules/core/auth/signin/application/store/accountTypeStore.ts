import { create } from "zustand";
import { IAccountType, IAccountTypeStore } from "../../domain/types/accountTypeStore";

const accountTypeStore = create<IAccountTypeStore>((set) => ({
  accountType: undefined,
  updateAccountType: (accountType: IAccountType) => {
    set({ accountType });
  },
}));

export { accountTypeStore };
