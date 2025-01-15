"use client";
import { OperationTypeEnum } from "@/modules/core/wallet/base/domain/types/historyProps";
import { Button } from "@/modules/shared/presentation/view/components/ui/button";
import { Skeleton } from "@/modules/shared/presentation/view/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/modules/shared/presentation/view/components/ui/table";
import { useURLStates } from "@/modules/shared/presentation/view/hooks/useURLStates";
import { formatCurrency, formatDateTime } from "@/modules/shared/utils/formatters";
import { RefreshCcw } from "lucide-react";
import { historyTableDataHeader } from "../../../../data/const/historyTableDataHeader";
import { HistoryTableData } from "../../../../domain/types/historyTable";
import Paginator from "../paginator";

const mockData: HistoryTableData[] = [
  { amount: 100, date: "2023-01-01", id: 1, finalBalance: 1000, receiver: "Antonio Fontão Nigro", type: OperationTypeEnum.DEPOSIT },
  { amount: -50, date: "2023-01-02", id: 2, finalBalance: 950, receiver: "Joaquim Borges II", type: OperationTypeEnum.TRANSFER },
  { amount: 200, date: "2023-01-03", id: 3, finalBalance: 1150, receiver: "Antonio Fontão Nigro", type: OperationTypeEnum.DEPOSIT },
  { amount: -100, date: "2023-01-04", id: 4, finalBalance: 1050, receiver: "Joaquim Borges II", type: OperationTypeEnum.TRANSFER },
  { amount: 150, date: "2023-01-05", id: 5, finalBalance: 1200, receiver: "Antonio Fontão Nigro", type: OperationTypeEnum.DEPOSIT },
];

export const HistoryTable = () => {
  const { handleSetUrlState } = useURLStates();

  const showData = true;
  const actionComponent = (id: number, type: OperationTypeEnum) => {
    return (
      <Button
        size="icon"
        variant="outline"
        onClick={() => {
          console.log("to entrando");
          handleSetUrlState("transaction", id.toString());
        }}
        disabled={type !== OperationTypeEnum.TRANSFER}
        title={"Reverter"}
      >
        <RefreshCcw className="w-5 h-5" />
      </Button>
    );
  };
  return (
    <div className="flex flex-col gap-2 mt-2">
      <Table>
        <TableHeader>
          <TableRow className="">
            {historyTableDataHeader.map((item) => (
              <TableHead key={item.header} className={item.className}>
                {item.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {showData &&
            mockData.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell>{actionComponent(entry.id, entry.type)}</TableCell>
                <TableCell>{formatDateTime(entry.date)}</TableCell>
                <TableCell>{entry.receiver}</TableCell>
                <TableCell>{entry.type}</TableCell>
                <TableCell>{formatCurrency(entry.amount)}</TableCell>
                <TableCell className="text-right">{formatCurrency(entry.finalBalance)}</TableCell>
              </TableRow>
            ))}
          {!showData &&
            mockData.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell>
                  <Skeleton className="h-6 w-full" key={entry.id} />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-6 w-full" key={entry.id} />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-6 w-full" key={entry.id} />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-6 w-full" key={entry.id} />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-6 w-full" key={entry.id} />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <Paginator currentPage={1} totalPages={1} onPageChange={() => console.log("first")} />
    </div>
  );
};
