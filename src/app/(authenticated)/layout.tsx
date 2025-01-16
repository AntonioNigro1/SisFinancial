import { SidebarProvider } from "@/modules/shared/presentation/view/components/ui/sidebar";
import { SessionProvider } from "next-auth/react";
import { AppSidebar } from "./app/_components/appSidebar";

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <SidebarProvider defaultOpen={true}>
        <AppSidebar />
        <main className="w-full p-8">{children}</main>
      </SidebarProvider>
    </SessionProvider>
  );
}
