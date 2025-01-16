import { WalletUser } from "@/modules/shared/types/walletStore";
import { IGetHistory } from "./getHistory";

export interface PutTransaction {
  transactionId: string;
  updateBalance: (user: WalletUser, balance: string) => void;
  user: WalletUser;
  setData: (arg: IGetHistory[]) => void;
  setTotalPages: (arg: number) => void;
  setLoading: (arg: boolean) => void;
}
