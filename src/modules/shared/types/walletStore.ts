export interface IWalletStore {
  balance: number | null;
  showData: boolean;
  name: string;
  updateShowData: (showData: boolean) => void;
}
