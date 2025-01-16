"use client";
import { useHistory } from "@/modules/core/wallet/history/presentation/view/hooks/useHistory";
import { Button } from "@/modules/shared/presentation/view/components/ui/button";
import { HistoryTableContent } from "@/modules/shared/presentation/view/components/ui/historyTableContent";
import { Table, TableHead, TableHeader, TableRow } from "@/modules/shared/presentation/view/components/ui/table";
import { useWallet } from "@/modules/shared/presentation/view/hooks/useWallet";
import { ChartNoAxesColumn } from "lucide-react";
import Link from "next/link";
import { historyTableHeaders } from "../../../../data/const/history/tableHeaders";

export const History = () => {
  const { showData } = useWallet();
  const { data } = useHistory();

  return (
    <div className="w-full flex flex-col rounded-lg bg-card p-4 border">
      <div className="w-full flex-col gap-3 flex items-center justify-center">
        <div className="w-full flex items-center justify-center gap-2 mb-2">
          <ChartNoAxesColumn className="w-6 h-6" />
          <p className="text-lg">Historico de operações</p>
        </div>
        {data?.length > 0 && (
          <Table>
            <TableHeader>
              <TableRow className="">
                {historyTableHeaders.map((item) => (
                  <TableHead key={item.header} className={item.className}>
                    {item.header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <HistoryTableContent data={data} pageSize={"10"} showData={showData} />
          </Table>
        )}
        {data?.length === 0 && (
          <div className="w-full mt-2 flex items-center justify-center">
            <p>Nenhum registro disponível.</p>
          </div>
        )}
        <div className="w-full flex justify-end">
          <Button variant="outline">
            <Link href="/app/history">Ver histórico completo</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
