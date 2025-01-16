export type WalletUser = { name: string; balance: string; userId: string };

export interface IWalletStore {
  showData: boolean;
  user: WalletUser;
  updateShowData: (showData: boolean) => void;
  updateBalance: (user: WalletUser, balance: string) => void;
  updateUser: (user: WalletUser) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}
