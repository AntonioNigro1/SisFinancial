import { create } from "zustand";
import { IWalletStore } from "../../types/walletStore";

const walletStore = create<IWalletStore>((set) => ({
  balance: 1200,
  name: "Antonio Fontão Nigro",
  showData: false,
  updateShowData: (showData: boolean) => {
    set({ showData });
  },
}));

export { walletStore };
