import { AccountTypeEnum } from "../../core/auth/signin/domain/enum/accountTypeEnum";

export type IAccountType = AccountTypeEnum | undefined;

export interface IAccountTypeStore {
  accountType: IAccountType;
  updateAccountType: (accountType: IAccountType) => void;
}
