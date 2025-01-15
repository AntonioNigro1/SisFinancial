import { ButtonProps } from "../presentation/view/components/ui/button";

export interface ConfirmationProps {
  disabled?: boolean;
  onClick?: ButtonProps["onClick"];
  type?: ButtonProps["type"];
}
