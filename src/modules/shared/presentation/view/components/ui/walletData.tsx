"use client";
import { WalletDataProps } from "@/modules/shared/types/walletData";
import { defaultPrevented } from "@/modules/shared/utils/defaultPrevented";
import { formatCurrency } from "@/modules/shared/utils/formatters";
import { getFirstName, getLastNames } from "@/modules/shared/utils/name";
import { Eye, EyeClosed } from "lucide-react";
import { useWallet } from "../../hooks/useWallet";
import { Button } from "./button";

export const WalletData = ({ showName = false }: WalletDataProps) => {
  const { balance, showData, updateShowData, name } = useWallet();

  const firstName = getFirstName(name);
  const lastName = getLastNames(name);

  const dataShown = (e: React.MouseEvent) => {
    defaultPrevented(e);
    updateShowData(true);
  };
  const dataHidden = (e: React.MouseEvent) => {
    defaultPrevented(e);
    updateShowData(false);
  };
  return (
    <div className="flex w-full flex-col gap-2">
      {showName && (
        <p>
          {firstName} {showData ? lastName : "***"}
        </p>
      )}
      <div className="w-full flex items-center justify-between">
        <p>Saldo atual: {showData ? `${formatCurrency(balance ?? 0)} R$` : "**"}</p>
        <Button variant="ghost" size="icon" title="Mostrar dados" className={showData ? "hidden" : ""} onClick={dataShown}>
          <EyeClosed className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" title="Esconder dados" className={showData ? "" : "hidden"} onClick={dataHidden}>
          <Eye className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};
