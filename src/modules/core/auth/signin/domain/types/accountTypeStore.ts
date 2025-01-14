export type IAccountType = "física" | "jurídica" | undefined;

export interface IAccountTypeStore {
  accountType: IAccountType;
  updateAccountType: (accountType: IAccountType) => void;
}
