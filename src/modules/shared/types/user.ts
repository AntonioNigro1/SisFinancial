import { AccountTypeEnum } from "@/modules/core/auth/signup/domain/enum/accountTypeEnum";

export interface IUser {
  id: string;
  name: string;
  accountType: AccountTypeEnum;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
