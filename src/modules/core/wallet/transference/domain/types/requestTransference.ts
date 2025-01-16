import { WalletUser } from "@/modules/shared/types/walletStore";
import { TransferenceData } from "../../application/schema/transferenceSchema";

export interface IRequestTransference {
  data: TransferenceData;
  updateBalance: (user: WalletUser, balance: string) => void;
  user: WalletUser;
  setLoading: (loading: boolean) => void;
}
