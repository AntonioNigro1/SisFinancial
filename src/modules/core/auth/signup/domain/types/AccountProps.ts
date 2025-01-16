import { Control } from "react-hook-form";
import { SignupData } from "../../application/schema/signup-schema";

export interface AccountProps {
  control: Control<SignupData>;
}
