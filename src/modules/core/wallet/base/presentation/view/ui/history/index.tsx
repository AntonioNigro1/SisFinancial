import { Button } from "@/modules/shared/presentation/view/components/ui/button";
import { Skeleton } from "@/modules/shared/presentation/view/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/modules/shared/presentation/view/components/ui/table";
import { formatCurrency, formatDateTime } from "@/modules/shared/utils/formatters";
import { ChartNoAxesColumn } from "lucide-react";
import Link from "next/link";
import { historyTableHeaders } from "../../../../data/const/history/tableHeaders";
import { HistoryProps } from "../../../../domain/types/historyProps";

export const History = ({ showData, data }: HistoryProps) => {
  return (
    <div className="w-full flex flex-col rounded-lg bg-card p-4 border">
      <div className="w-full flex-col gap-3 flex items-center justify-center">
        <div className="w-full flex items-center justify-center gap-2 mb-2">
          <ChartNoAxesColumn className="w-6 h-6" />
          <p className="text-lg">Historico de operações</p>
        </div>
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
          <TableBody>
            {showData &&
              data.map((entry) => (
                <TableRow key={entry.id}>
                  <TableCell>{formatDateTime(entry.date)}</TableCell>
                  <TableCell>{entry.receiver}</TableCell>
                  <TableCell>{entry.type}</TableCell>
                  <TableCell>{formatCurrency(entry.amount)}</TableCell>
                  <TableCell className="text-right">{formatCurrency(entry.finalBalance)}</TableCell>
                </TableRow>
              ))}
            {!showData &&
              data.map((entry) => (
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
        <div className="w-full flex justify-end">
          <Button variant="outline">
            <Link href="/app/history">Ver histórico completo</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
