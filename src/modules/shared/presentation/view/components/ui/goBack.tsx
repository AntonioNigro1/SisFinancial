import { GoBackProps } from "@/modules/shared/types/goBackProps";
import { defaultPrevented } from "@/modules/shared/utils/defaultPrevented";
import { Undo2 } from "lucide-react";
import Link from "next/link";
import { Button } from "./button";

export const GoBack = ({ onGoBack, isDefaultPrevented, hasLink, href }: GoBackProps) => {
  const handleGoBack = (e: React.MouseEvent) => {
    if (isDefaultPrevented) defaultPrevented(e);
    if (onGoBack) onGoBack();
  };

  if (hasLink && href)
    return (
      <Button variant="outline" onClick={defaultPrevented} formNoValidate>
        <Link href={href} className="flex flex-row-reverse md:flex-row gap-1 items-center justify-center w-full">
          <Undo2 />
          Voltar
        </Link>
      </Button>
    );

  return (
    <Button variant="outline" className="flex flex-row-reverse md:flex-row gap-1 items-center justify-center" onClick={handleGoBack} formNoValidate>
      <Undo2 />
      Voltar
    </Button>
  );
};
