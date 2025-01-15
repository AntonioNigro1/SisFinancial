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

const items = [
  {
    title: "Carteira",
    url: "/app",
    icon: WalletMinimal,
  },
  {
    title: "Saque",
    url: "/app/deposit",
    icon: HandCoins,
  },
  {
    title: "Deposito",
    url: "/app/withdraw",
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
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
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
