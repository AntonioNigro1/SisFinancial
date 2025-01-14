import { walletStore } from "../../../application/store/walletStore";
import { IWalletStore } from "../../../domain/types/walletStore";

export const useWallet = (): IWalletStore => {
  const balance = walletStore((state) => state.balance);
  const showData = walletStore((state) => state.showData);
  const updateShowData = walletStore((state) => state.updateShowData);

  return {
    balance,
    showData,
    updateShowData,
  };
};
