import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/modules/shared/presentation/view/components/ui/sidebar";
import { ChartNoAxesColumn, DollarSign, HandCoins, Handshake, WalletMinimal } from "lucide-react";
import Link from "next/link";

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
    title: "Extrato",
    url: "/app/history",
    icon: ChartNoAxesColumn,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <div className="w-full flex items-center justify-center">
            <SidebarGroupLabel>SisFinancial</SidebarGroupLabel>
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
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
    </Sidebar>
  );
}
