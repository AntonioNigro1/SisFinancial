"use client";
import { cn } from "@/lib/utils";
import { AccountTypeEnum } from "@/modules/core/auth/signup/domain/enum/accountTypeEnum";
import { Confirmation } from "@/modules/shared/presentation/view/components/ui/confirmation";
import { GoBack } from "@/modules/shared/presentation/view/components/ui/goBack";
import { IfRender } from "@/modules/shared/presentation/view/components/ui/ifRender";
import { TextInput } from "@/modules/shared/presentation/view/components/ui/textInput";
import { WalletData } from "@/modules/shared/presentation/view/components/ui/walletData";
import { useAccountType } from "@/modules/shared/presentation/view/hooks/useAccountType";
import { useWallet } from "@/modules/shared/presentation/view/hooks/useWallet";
import { formatCNPJ, formatCPF, formatCurrencyOnInput } from "@/modules/shared/utils/formatters";
import { Controller } from "react-hook-form";
import { useTransference } from "../../hooks/useTransference";

export const Form = () => {
  const { control, handleSubmit, handleTransference, isValid } = useTransference();
  const { clearAccountType, accountType } = useAccountType();
  const { loading } = useWallet();
  return (
    <form
      onSubmit={handleSubmit(handleTransference)}
      className={cn(
        "flex flex-col items-center w-full gap-2 transition-transform duration-300 ease-in-out",
        !accountType ? "translate-x-full" : "translate-x-0"
      )}
    >
      <WalletData />
      <p>
        {accountType === AccountTypeEnum.FISICA && "Transferindo para pessoa física."}
        {accountType === AccountTypeEnum.JURIDICA && "Transferindo para pessoa jurídica."}
      </p>
      <IfRender condition={accountType === AccountTypeEnum.FISICA}>
        <Controller
          name="cpf"
          control={control}
          render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
            <TextInput
              label="CPF"
              maxLength={14}
              onChange={(e) => onChange(formatCPF(e.target.value))}
              placeholder="000.000.000-00"
              errorMessage={error?.message}
              {...rest}
            />
          )}
        />
      </IfRender>
      <IfRender condition={accountType === AccountTypeEnum.JURIDICA}>
        <Controller
          name="cnpj"
          control={control}
          render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
            <TextInput
              label="CNPJ"
              onChange={(e) => onChange(formatCNPJ(e.target.value))}
              placeholder="00.000.000/0000-00"
              maxLength={14}
              errorMessage={error?.message}
              {...rest}
            />
          )}
        />
      </IfRender>
      <Controller
        name="amount"
        control={control}
        render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
          <TextInput
            label="Valor"
            onChange={(e) => onChange(formatCurrencyOnInput(e.target.value))}
            placeholder="0,00"
            errorMessage={error?.message}
            {...rest}
          />
        )}
      />
      <div className="w-full flex flex-col md:flex-row gap-2 justify-between">
        <Confirmation type="submit" disabled={!isValid || loading} />
        <GoBack isDefaultPrevented onGoBack={clearAccountType} />
      </div>
    </form>
  );
};
