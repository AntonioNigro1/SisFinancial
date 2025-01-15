import { AccountTypeEnum } from "@/modules/core/auth/signin/domain/enum/accountTypeEnum";
import { Confirmation } from "@/modules/shared/presentation/view/components/ui/confirmation";
import { GoBack } from "@/modules/shared/presentation/view/components/ui/goBack";
import { IfRender } from "@/modules/shared/presentation/view/components/ui/ifRender";
import { TextInput } from "@/modules/shared/presentation/view/components/ui/textInput";
import { useAccountType } from "@/modules/shared/presentation/view/hooks/useAccountType";
import { formatCNPJ, formatCPF, formatCurrencyOnInput } from "@/modules/shared/utils/formatters";
import { Controller } from "react-hook-form";
import { useTransference } from "../../hooks/useTransference";

export const Form = () => {
  const { control, handleSubmit, handleTransference, isValid } = useTransference();
  const { clearAccountType, accountType } = useAccountType();
  return (
    <form onSubmit={handleSubmit(handleTransference)} className="flex flex-col w-full gap-2">
      <IfRender condition={accountType === AccountTypeEnum.FISICA}>
        <Controller
          name="cpf"
          control={control}
          render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
            <TextInput label="CPF" onChange={(e) => onChange(formatCPF(e.target.value))} placeholder="000.000.000-00" errorMessage={error?.message} {...rest} />
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
        <Confirmation type="submit" disabled={!isValid} />
        <GoBack onGoBack={clearAccountType} />
      </div>
    </form>
  );
};
