import { Button } from "@/modules/shared/presentation/view/components/ui/button";
import { DollarSign, HandCoins } from "lucide-react";
import Link from "next/link";

export const Navigator = () => {
  return (
    <div className="w-full flex md:hidden flex-col gap-2 items-center">
      <Button variant="outline" className="w-full">
        <Link href="/app/deposit" className="w-full flex items-center justify-center gap-1">
          Depositar
          <DollarSign className="w-6 h-6" />
        </Link>
      </Button>
      <Button variant="outline" className="w-full">
        <Link href="/app/withdraw" className="w-full flex items-center justify-center gap-1">
          Sacar
          <HandCoins className="w-6 h-6" />
        </Link>
      </Button>
      <Button variant="outline" className="w-full">
        <Link href="/app/transference" className="w-full flex items-center justify-center gap-1">
          Transferir
          <HandCoins className="w-6 h-6" />
        </Link>
      </Button>
    </div>
  );
};
