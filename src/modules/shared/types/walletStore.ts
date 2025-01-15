export interface IWalletStore {
  balance: number | null;
  showData: boolean;
  updateShowData: (showData: boolean) => void;
}
