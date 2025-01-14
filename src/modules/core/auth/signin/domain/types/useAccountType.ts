import { IAccountTypeStore } from "./accountTypeStore";

export interface IUseAccountType extends IAccountTypeStore {
  clearAccountType: () => void;
}
