"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/modules/shared/presentation/view/components/ui/button";
import { GoBack } from "@/modules/shared/presentation/view/components/ui/goBack";
import { useAccountType } from "@/modules/shared/presentation/view/hooks/useAccountType";
import { Building2, User } from "lucide-react";

export const AccountTypeSelector = () => {
  const { setAccountFisica, setAccountJuridica, accountType } = useAccountType();

  return (
    <div className={cn("w-full flex gap-2 flex-col transition-transform duration-300 ease-in-out", accountType ? "-translate-x-full " : "translate-x-0")}>
      <p>Transferir para:</p>
      <Button onClick={setAccountFisica}>
        Para pessoa física
        <User className="w-6 h-6" />
      </Button>
      <Button onClick={setAccountJuridica}>
        Para pessoa jurídica
        <Building2 className="w-6 h-6" />
      </Button>
      <div className="w-full flex items-center justify-end">
        <GoBack hasLink href="/app" />
      </div>
    </div>
  );
};
