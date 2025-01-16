import { AccountTypeEnum } from "../../core/auth/signup/domain/enum/accountTypeEnum";

export type IAccountType = AccountTypeEnum | undefined;

export interface IAccountTypeStore {
  accountType: IAccountType;
  updateAccountType: (accountType: IAccountType) => void;
}
