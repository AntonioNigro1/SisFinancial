import { SigninForm } from "@/modules/core/auth/signin/presentation/view/ui";

export default function Signin() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-4/5 md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col justify-center rounded-md bg-card p-4  border">
        <SigninForm />
      </div>
    </div>
  );
}
