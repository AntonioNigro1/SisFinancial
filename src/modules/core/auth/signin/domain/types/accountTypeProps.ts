import { IAccountTypeStore } from "./accountTypeStore";

export type IAccountTypeProps = Omit<IAccountTypeStore, "clearAccountType">;
