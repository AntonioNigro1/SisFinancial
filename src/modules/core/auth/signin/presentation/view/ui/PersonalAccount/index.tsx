import { TextInput } from "@/modules/shared/presentation/view/components/ui/textInput";
import { formatCPF } from "@/modules/shared/utils/formatters";
import { Fragment } from "react";
import { Controller } from "react-hook-form";
import { AccountProps } from "../../../../domain/types/AccountProps";

export const PersonalAccount = ({ control }: AccountProps) => {
  return (
    <Fragment>
      <Controller
        control={control}
        name="name"
        render={({ field, fieldState: { error } }) => <TextInput label="Nome" {...field} placeholder="Nome completo" errorMessage={error?.message} />}
      />
      <Controller
        control={control}
        name="cpf"
        render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
          <TextInput
            label="CPF"
            maxLength={14}
            onChange={(e) => onChange(formatCPF(e.target.value))}
            placeholder="000.000.000/00"
            errorMessage={error?.message}
            {...rest}
          />
        )}
      />
    </Fragment>
  );
};
