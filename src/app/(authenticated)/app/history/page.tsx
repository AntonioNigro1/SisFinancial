import { HistoryTable } from "@/modules/core/wallet/history/presentation/view/ui/historyTable";
import { RevertModal } from "@/modules/core/wallet/history/presentation/view/ui/revertModal";
import { ChartNoAxesColumn } from "lucide-react";
import { Suspense } from "react";

export default function History() {
  return (
    <Suspense>
      <div className="w-full h-full flex flex-col items-center">
        <div className="w-full flex flex-col rounded-md bg-card p-4 border">
          <div className="w-full flex items-center justify-center gap-2">
            <ChartNoAxesColumn className="w-6 h-6" />
            <h1 className="text-2xl text-center">Histórico de operações</h1>
          </div>
          <HistoryTable />
          <RevertModal />
        </div>
      </div>
    </Suspense>
  );
}
