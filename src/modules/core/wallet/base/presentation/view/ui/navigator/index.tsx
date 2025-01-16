"use client";

import requestLogout from "@/modules/core/auth/login/services/request-user-logout.service";
import { Button } from "@/modules/shared/presentation/view/components/ui/button";
import { DollarSign, DoorClosed, HandCoins, Handshake } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Navigator = () => {
  const [navigating, setNavigating] = useState(false);
  const router = useRouter();
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
          <Handshake className="w-6 h-6" />
        </Link>
      </Button>
      <Button variant="outline" className="w-full" onClick={() => requestLogout(router, setNavigating)} disabled={navigating}>
        Sair
        <DoorClosed className="w-6 h-6" />
      </Button>
    </div>
  );
};
