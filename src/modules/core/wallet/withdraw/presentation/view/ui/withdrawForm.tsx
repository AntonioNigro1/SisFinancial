"use client";
import { Button } from "@/modules/shared/presentation/view/components/ui/button";
import { TextInput } from "@/modules/shared/presentation/view/components/ui/textInput";
import { useWallet } from "@/modules/shared/presentation/view/hooks/useWallet";
import { defaultPrevented } from "@/modules/shared/utils/defaultPrevented";
import { formatCurrency, formatCurrencyOnInput } from "@/modules/shared/utils/formatters";
import { CheckCircle, Eye, EyeClosed, Undo2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Controller } from "react-hook-form";
import { useWithdraw } from "../hooks/useWithdraw";

export const WithdrawForm = () => {
  const { balance, showData, updateShowData } = useWallet();
  const { control, handleWithdraw, handleSubmit, isValid } = useWithdraw();

  const dataShown = (e: React.MouseEvent) => {
    defaultPrevented(e);
    updateShowData(true);
  };
  const dataHidden = (e: React.MouseEvent) => {
    defaultPrevented(e);
    updateShowData(false);
  };

  return (
    <div className="w-4/5 md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col justify-center rounded-md bg-card p-4 border">
      <h1 className="text-2xl text-center">Sacar</h1>
      <form onSubmit={handleSubmit(handleWithdraw)} className="flex flex-col gap-2 mt-4">
        <div className="flex justify-between items-center">
          <p>Saldo atual: {showData ? `${formatCurrency(balance ?? 0)} R$` : "**"}</p>
          <Button variant="ghost" size="icon" title="Mostrar dados" className={showData ? "hidden" : ""} onClick={dataShown}>
            <EyeClosed className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" title="Esconder dados" className={showData ? "" : "hidden"} onClick={dataHidden}>
            <Eye className="w-5 h-5" />
          </Button>
        </div>
        <label className="flex flex-col gap-1">
          <Controller
            control={control}
            name="amount"
            render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
              <TextInput onChange={(e) => onChange(formatCurrencyOnInput(e.target.value))} label="Valor" {...rest} errorMessage={error?.message} />
            )}
          />
        </label>
        <div className="flex flex-col md:flex-row gap-2 justify-between">
          <Button type="submit" disabled={!isValid}>
            Confirmar <CheckCircle className="w-5 h-5" />
          </Button>
          <Button variant="outline">
            <Link href="/app" className="w-full flex items-center gap-1">
              <Undo2 className="w-5 h-5" />
              Voltar
            </Link>
          </Button>
        </div>
      </form>
    </div>
  );
};
