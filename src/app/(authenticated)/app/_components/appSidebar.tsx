"use client";
import { cn } from "@/lib/utils";
import requestLogout from "@/modules/core/auth/login/services/request-user-logout.service";
import { buttonVariants } from "@/modules/shared/presentation/view/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/modules/shared/presentation/view/components/ui/sidebar";
import { ChartNoAxesColumn, DollarSign, DoorClosed, HandCoins, Handshake, WalletMinimal } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const items = [
  {
    title: "Carteira",
    url: "/app",
    icon: WalletMinimal,
  },
  {
    title: "Saque",
    url: "/app/withdraw",
    icon: HandCoins,
  },
  {
    title: "Deposito",
    url: "/app/deposit",
    icon: DollarSign,
  },
  {
    title: "Transferência",
    url: "/app/transference",
    icon: Handshake,
  },
  {
    title: "Histórico",
    url: "/app/history",
    icon: ChartNoAxesColumn,
  },
];

export function AppSidebar() {
  const [navigating, setNavigating] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="w-full flex items-center justify-center">SisFinancial</div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <div className="w-full flex items-center justify-center">
            <SidebarGroupLabel>Operações</SidebarGroupLabel>
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      buttonVariants({
                        variant: pathname === item.url ? "default" : "ghost",
                      }),
                      "justify-start"
                    )}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="w-full">
        <SidebarMenuButton onClick={() => requestLogout(router, setNavigating)} disabled={navigating}>
          <div className="w-full flex items-center gap-2 justify-end">
            <p>Sair</p>
            <DoorClosed />
          </div>
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
}
