import { walletStore } from "../../../application/store/walletStore";
import { IWalletStore } from "../../../types/walletStore";

export const useWallet = (): IWalletStore => {
  return {
    user: walletStore((state) => state.user),
    showData: walletStore((state) => state.showData),
    updateShowData: walletStore((state) => state.updateShowData),
    updateBalance: walletStore((state) => state.updateBalance),
    updateUser: walletStore((state) => state.updateUser),
    loading: walletStore((state) => state.loading),
    setLoading: walletStore((state) => state.setLoading),
  };
};
