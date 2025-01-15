"use client";
import { Confirmation } from "@/modules/shared/presentation/view/components/ui/confirmation";
import { GoBack } from "@/modules/shared/presentation/view/components/ui/goBack";
import { TextInput } from "@/modules/shared/presentation/view/components/ui/textInput";
import { WalletData } from "@/modules/shared/presentation/view/components/ui/walletData";
import { formatCurrencyOnInput } from "@/modules/shared/utils/formatters";
import { Controller } from "react-hook-form";
import { useWithdraw } from "../hooks/useWithdraw";

export const WithdrawForm = () => {
  const { control, handleWithdraw, handleSubmit, isValid } = useWithdraw();

  return (
    <div className="w-4/5 md:1/2 xl:w-1/3 flex flex-col justify-center rounded-md bg-card p-4 border">
      <h1 className="text-2xl text-center">Sacar</h1>
      <form onSubmit={handleSubmit(handleWithdraw)} className="flex flex-col gap-2 mt-4">
        <WalletData />
        <label className="flex flex-col gap-1">
          <Controller
            control={control}
            name="amount"
            render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
              <TextInput
                onChange={(e) => onChange(formatCurrencyOnInput(e.target.value))}
                label="Valor"
                placeholder="0,00"
                {...rest}
                errorMessage={error?.message}
              />
            )}
          />
        </label>
        <div className="flex flex-col md:flex-row gap-2 justify-between">
          <Confirmation type="submit" disabled={!isValid} />
          <GoBack hasLink href="/app" />
        </div>
      </form>
    </div>
  );
};
