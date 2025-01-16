import { create } from "zustand";
import { IWalletStore, WalletUser } from "../../types/walletStore";

const walletStore = create<IWalletStore>((set) => ({
  user: {
    name: "",
    balance: "",
    userId: "",
  },
  showData: false,
  updateShowData: (showData: boolean) => {
    set({ showData });
  },
  updateBalance: (user: WalletUser, balance: string) => {
    set({ user: { ...user, balance } });
  },
  updateUser: (user: WalletUser) => {
    set({ user });
  },
  loading: false,
  setLoading: (loading: boolean) => {
    set({ loading });
  },
}));

export { walletStore };
