import { Control, UseFormHandleSubmit } from "react-hook-form";
import { SigninData } from "../../application/schema/signin-schema";

export interface IUseAccountForm {
  isValid: boolean;
  control: Control<SigninData>;
  handleSubmit: UseFormHandleSubmit<SigninData>;
  handleSignin: (data: SigninData) => void;
  resetForm: () => void;
}
