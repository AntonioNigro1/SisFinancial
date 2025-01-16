import { WalletUser } from "@/modules/shared/types/walletStore";
import { withdrawData } from "../../application/schema/withdrawSchema";

export interface IMakeWithdraw {
  data: withdrawData;
  updateBalance: (user: WalletUser, balance: string) => void;
  user: WalletUser;
  setLoading: (loading: boolean) => void;
}
