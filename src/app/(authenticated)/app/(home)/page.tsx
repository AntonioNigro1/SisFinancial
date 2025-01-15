"use client";
import { HistoryData, OperationTypeEnum } from "@/modules/core/wallet/base/domain/types/historyProps";
import { Header } from "@/modules/core/wallet/base/presentation/view/ui/header";
import { History } from "@/modules/core/wallet/base/presentation/view/ui/history";
import { Navigator } from "@/modules/core/wallet/base/presentation/view/ui/navigator";
import { useWallet } from "@/modules/shared/presentation/view/hooks/useWallet";

const mockData: HistoryData[] = [
  { amount: 100, date: "2023-01-01", id: 1, finalBalance: 1000, receiver: "Antonio Fontão Nigro", type: OperationTypeEnum.DEPOSIT },
  { amount: -50, date: "2023-01-02", id: 2, finalBalance: 950, receiver: "Joaquim Borges II", type: OperationTypeEnum.TRANSFER },
  { amount: 200, date: "2023-01-03", id: 3, finalBalance: 1150, receiver: "Antonio Fontão Nigro", type: OperationTypeEnum.DEPOSIT },
  { amount: -100, date: "2023-01-04", id: 4, finalBalance: 1050, receiver: "Joaquim Borges II", type: OperationTypeEnum.TRANSFER },
  { amount: 150, date: "2023-01-05", id: 5, finalBalance: 1200, receiver: "Antonio Fontão Nigro", type: OperationTypeEnum.DEPOSIT },
];
export default function Home() {
  const { balance, showData, updateShowData } = useWallet();

  return (
    <div className="w-full flex flex-col gap-2 items-end">
      <Header balance={balance ?? 0} name="Antonio Fontão Nigro" showData={showData} updateShowData={updateShowData} />
      <Navigator />
      <History showData={showData} data={mockData} />
    </div>
  );
}
