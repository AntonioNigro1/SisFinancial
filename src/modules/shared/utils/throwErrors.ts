import { toast } from "../presentation/view/hooks/use-toast";
import { isCustomAxiosError, isCustomSimpleError } from "./typeguard";

export const throwErrors = (title: string, error: unknown) => {
  if (isCustomAxiosError(error)) toast({ title, description: error.details.error });
  if (isCustomSimpleError(error)) toast({ title, description: error.error });
};
