"use client";
import { Button } from "@/modules/shared/presentation/view/components/ui/button";
import { IfRender } from "@/modules/shared/presentation/view/components/ui/ifRender";
import { formatCurrency } from "@/modules/shared/utils/formatters";
import { getFirstName, getLastNames } from "@/modules/shared/utils/name";
import { Eye, EyeClosed } from "lucide-react";
import { HeaderProps } from "../../../../domain/types/headerProps";

export const Header = ({ balance, name, showData, updateShowData }: HeaderProps) => {
  const firstName = getFirstName(name);
  const lastName = getLastNames(name);

  const dataHidden = () => updateShowData(false);
  const dataShown = () => updateShowData(true);

  return (
    <div className="w-full flex-col md:flex-row gap-y-2 flex items-center justify-between">
      <div className="flex items-center justify-between w-full md:w-fit">
        <h1 className="text-2xl md:hidden">SisFinancial</h1>
        <h1 className="text-xl md:text-2xl">Carteira digital</h1>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col rounded-lg bg-card p-4 border">
        <div className="w-full flex items-center justify-between">
          <p>
            {firstName} {showData ? lastName : "***"}
          </p>
          <Button variant="ghost" size="icon" title="Mostrar dados" className={showData ? "hidden" : ""} onClick={dataShown}>
            <EyeClosed className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" title="Esconder dados" className={showData ? "" : "hidden"} onClick={dataHidden}>
            <Eye className="w-5 h-5" />
          </Button>
        </div>
        <div>
          <p>
            Saldo: <IfRender condition={showData}>{balance ? formatCurrency(balance) : "0,00"} R$</IfRender>
            <IfRender condition={!showData}>**</IfRender>
          </p>
        </div>
      </div>
    </div>
  );
};
