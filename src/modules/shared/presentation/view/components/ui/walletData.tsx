"use client";
import { WalletDataProps } from "@/modules/shared/types/walletData";
import { defaultPrevented } from "@/modules/shared/utils/defaultPrevented";
import { formatCurrency } from "@/modules/shared/utils/formatters";
import { getFirstName, getLastNames } from "@/modules/shared/utils/name";
import { Eye, EyeClosed } from "lucide-react";
import { useUpdateWallet } from "../../hooks/useUpdateWallet";
import { useWallet } from "../../hooks/useWallet";
import { Button } from "./button";
import { Skeleton } from "./skeleton";

export const WalletData = ({ showName = false }: WalletDataProps) => {
  const { showData, user, updateShowData, loading } = useWallet();
  const firstName = getFirstName(user.name);
  const lastName = getLastNames(user.name);

  useUpdateWallet();

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
      {loading && showName && <Skeleton className="w-full h-5" />}
      {showName && !loading && (
        <p>
          {firstName} {showData ? lastName : "***"}
        </p>
      )}
      <div className="w-full flex items-center justify-between">
        {loading && <Skeleton className="w-[151px] h-6" />}
        {loading && <Skeleton className="w-6 h-6" />}
        {!loading && (
          <>
            <p>Saldo atual: {showData ? `R$ ${formatCurrency(Number(user.balance))} ` : "**"}</p>
            <Button variant="ghost" size="icon" title="Mostrar dados" className={showData ? "hidden" : ""} onClick={dataShown}>
              <EyeClosed className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" title="Esconder dados" className={showData ? "" : "hidden"} onClick={dataHidden}>
              <Eye className="w-5 h-5" />
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
