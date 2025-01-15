import { create } from "zustand";
import { IWalletStore } from "../../types/walletStore";

const walletStore = create<IWalletStore>((set) => ({
  balance: 1200,
  showData: false,
  updateShowData: (showData: boolean) => {
    set({ showData });
  },
}));

export { walletStore };
