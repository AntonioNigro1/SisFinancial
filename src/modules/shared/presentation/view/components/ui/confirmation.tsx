import { ConfirmationProps } from "@/modules/shared/types/confirmationProps";
import { CheckCircle } from "lucide-react";
import { Button } from "./button";

export const Confirmation = ({ ...rest }: ConfirmationProps) => {
  return (
    <Button {...rest}>
      Confirmar
      <CheckCircle className="w-5 h-5" />
    </Button>
  );
};
