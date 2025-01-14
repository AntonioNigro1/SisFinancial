import { SidebarProvider } from "@/modules/shared/presentation/view/components/ui/sidebar";
import { AppSidebar } from "./app/_components/appSidebar";

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <main className="w-full p-8">{children}</main>
    </SidebarProvider>
  );
}
