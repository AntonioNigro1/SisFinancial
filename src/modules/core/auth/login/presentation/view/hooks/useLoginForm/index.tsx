import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginData, LoginSchema } from "../../../../application/schema/login-schema";

export const useLoginForm = () => {
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

  const handleLogin = (data: LoginData) => {
    //make login request
    console.log(data);
  };

  return {
    control,
    isValid,
    handleLogin,
    handleSubmit,
  };
};
