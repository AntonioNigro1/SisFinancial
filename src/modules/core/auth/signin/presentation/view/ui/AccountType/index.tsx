import { cn } from "@/lib/utils";
import { Button } from "@/modules/shared/presentation/view/components/ui/button";
import { LineLabel } from "@/modules/shared/presentation/view/components/ui/lineLabel";
import { Building2, DoorOpen, User } from "lucide-react";
import Link from "next/link";
import { AccountTypeEnum } from "../../../../domain/enum/accountTypeEnum";
import { IAccountTypeProps } from "../../../../domain/types/accountTypeProps";
import { IAccountType } from "../../../../domain/types/accountTypeStore";

export const AccountType = ({ updateAccountType, accountType }: IAccountTypeProps) => {
  const handleUpdateAccount = (accountType: IAccountType) => {
    updateAccountType(accountType);
  };
  return (
    <div
      className={cn(
        "flex flex-col gap-2 w-full items-center transition-transform duration-300 ease-in-out",
        accountType ? "-translate-x-full " : "translate-x-0"
      )}
    >
      <LineLabel>
        <p className="bg-card w-fit">Primeiro nos conte sobre voce</p>
      </LineLabel>
      <Button className="w-full mt-2" onClick={() => handleUpdateAccount(AccountTypeEnum.FISICA)}>
        Sou pessoa física
        <User className="w-6 h-6" />
      </Button>
      <Button className="w-full mb-2" onClick={() => handleUpdateAccount(AccountTypeEnum.JURIDICA)}>
        Sou pessoa jurídica
        <Building2 className="w-6 h-6" />
      </Button>
      <LineLabel>
        <p className="bg-card w-fit">Ja tem uma conta ?</p>
      </LineLabel>
      <Link href="/app/login" className="w-full mt-3">
        <Button variant="outline" className="w-full">
          Fazer login
          <DoorOpen className="w-6 h-6" />
        </Button>
      </Link>
    </div>
  );
};
