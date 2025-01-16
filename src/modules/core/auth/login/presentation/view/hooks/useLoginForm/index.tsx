import { useToast } from "@/modules/shared/presentation/view/hooks/use-toast";
import { throwErrors } from "@/modules/shared/utils/throwErrors";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginData, LoginSchema } from "../../../../application/schema/login-schema";
import login from "../../../../services/signin-user-service";

export const useLoginForm = () => {
  const { toast } = useToast();
  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = useForm<LoginData>({
    resolver: zodResolver(LoginSchema),
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (data: LoginData) => {
    try {
      await login(data);
      toast({ description: "Login efetuado com sucesso! redirecionando ..." });
    } catch (error) {
      throwErrors("Falha ao fazer login.", error);
    }
  };

  return {
    control,
    isValid,
    handleLogin,
    handleSubmit,
  };
};
