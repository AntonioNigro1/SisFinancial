import { Control, UseFormHandleSubmit } from "react-hook-form";
import { SignupData } from "../../application/schema/signup-schema";

export interface IUseAccountForm {
  isValid: boolean;
  control: Control<SignupData>;
  handleSubmit: UseFormHandleSubmit<SignupData>;
  handleSignup: (data: SignupData) => void;
  resetForm: () => void;
}
