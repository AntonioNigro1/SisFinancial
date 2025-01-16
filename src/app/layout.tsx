import "@/app/globals.css";
import Mode from "@/modules/core/mode/presentation/view/ui";
import AppTheme from "@/modules/shared/app-theme";
import { Toaster } from "@/modules/shared/presentation/view/components/ui/toaster";
import { GlobalStyle } from "@/styles/globalStyles";
import { defaultTheme } from "@/styles/themes/default";
import type { Metadata } from "next";
import { Geist } from "next/font/google";

const openSans = Geist({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SisFinancial",
  description: "Sistema para operações bancarias.",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="pt">
      <body className={openSans.className}>
        <AppTheme theme={defaultTheme}>
          <GlobalStyle />
          {children}
          <Mode />
          <Toaster />
        </AppTheme>
      </body>
    </html>
  );
}
