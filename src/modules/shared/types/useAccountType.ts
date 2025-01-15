import { IAccountTypeStore } from "./accountTypeStore";

export interface IUseAccountType extends IAccountTypeStore {
  clearAccountType: VoidFunction;
  setAccountFisica: VoidFunction;
  setAccountJuridica: VoidFunction;
}
