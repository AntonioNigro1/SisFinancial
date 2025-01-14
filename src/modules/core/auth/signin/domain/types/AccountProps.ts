import { Control } from "react-hook-form";
import { SigninData } from "../../application/schema/signin-schema";

export interface AccountProps {
  control: Control<SigninData>;
}
