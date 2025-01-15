import { Button } from "@/modules/shared/presentation/view/components/ui/button";
import { DollarSign, HandCoins } from "lucide-react";

export const Navigator = () => {
  return (
    <div className="w-full flex md:hidden flex-col gap-2 items-center">
      <Button variant="outline" className="w-full">
        Depositar
        <DollarSign className="w-6 h-6" />
      </Button>
      <Button variant="outline" className="w-full">
        Sacar
        <HandCoins className="w-6 h-6" />
      </Button>
      <Button variant="outline" className="w-full">
        Transferir
        <HandCoins className="w-6 h-6" />
      </Button>
    </div>
  );
};
