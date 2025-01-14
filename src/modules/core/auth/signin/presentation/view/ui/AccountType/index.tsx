import { cn } from "@/lib/utils";
import { Button } from "@/modules/shared/presentation/view/components/ui/button";
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
      <h4>Primeiro nos conte sobre voce</h4>
      <Button className="w-full" onClick={() => handleUpdateAccount("física")}>
        Sou pessoa física
      </Button>
      <Button className="w-full" onClick={() => handleUpdateAccount("jurídica")}>
        Sou pessoa jurídica
      </Button>
    </div>
  );
};
