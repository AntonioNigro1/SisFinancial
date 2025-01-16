import { WalletData } from "@/modules/shared/presentation/view/components/ui/walletData";

export const Header = async () => {
  return (
    <div className="w-full flex-col md:flex-row gap-y-2 flex items-center justify-between">
      <div className="flex items-center justify-between w-full md:w-fit">
        <h1 className="text-2xl md:hidden">SisFinancial</h1>
        <h1 className="text-xl md:text-2xl">Carteira digital</h1>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col rounded-lg bg-card p-4 border">
        <WalletData showName />
      </div>
    </div>
  );
};
