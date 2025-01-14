import { cn } from "@/lib/utils";
import { TextInputProps } from "@/modules/shared/types/textInput";
import { Input } from "./input";

export const TextInput = ({ label, className, errorMessage, ...rest }: TextInputProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <p>{label}</p>
      <div className="w-full flex flex-col gap-1">
        <Input {...rest} className={cn(className, errorMessage ? "border-destructive" : "")} />
        {errorMessage && <p className="text-destructive">{errorMessage}</p>}
      </div>
    </div>
  );
};
