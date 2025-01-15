import { TextInput } from "@/modules/shared/presentation/view/components/ui/textInput";
import { formatCNPJ } from "@/modules/shared/utils/formatters";
import { Fragment } from "react";
import { Controller } from "react-hook-form";
import { AccountProps } from "../../../../domain/types/AccountProps";

export const CompanyAccount = ({ control }: AccountProps) => {
  return (
    <Fragment>
      <Controller
        control={control}
        name="companyName"
        render={({ field, fieldState: { error } }) => <TextInput label="Razão social" {...field} errorMessage={error?.message} />}
      />
      <Controller
        control={control}
        name="cnpj"
        render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
          <TextInput
            label="CNPJ"
            maxLength={18}
            onChange={(e) => onChange(formatCNPJ(e.target.value))}
            placeholder="00.000.000/0000-00"
            errorMessage={error?.message}
            {...rest}
          />
        )}
      />
    </Fragment>
  );
};
