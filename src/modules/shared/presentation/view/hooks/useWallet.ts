import { walletStore } from "../../../application/store/walletStore";
import { IWalletStore } from "../../../types/walletStore";

export const useWallet = (): IWalletStore => {
  const balance = walletStore((state) => state.balance);
  const showData = walletStore((state) => state.showData);
  const updateShowData = walletStore((state) => state.updateShowData);
  const name = walletStore((state) => state.name);

  return {
    balance,
    showData,
    updateShowData,
    name,
  };
};
