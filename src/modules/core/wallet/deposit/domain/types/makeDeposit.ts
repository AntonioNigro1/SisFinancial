import { WalletUser } from "@/modules/shared/types/walletStore";
import { DepositData } from "../../application/schema/depositSchema";

export interface IMakeDeposit {
  data: DepositData;
  updateBalance: (user: WalletUser, balance: string) => void;
  user: WalletUser;
  setLoading: (loading: boolean) => void;
}
