import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/modules/shared/presentation/view/components/ui/pagination";
import { PaginatorProps } from "../../../../domain/types/paginator";
import { generatePaginationLinks } from "./generatePages";

export default function Paginator({ currentPage, totalPages, onPageChange }: Readonly<PaginatorProps>) {
  return (
    <Pagination className="z-10">
      <PaginationContent>
        {currentPage !== 1 && totalPages > 1 && (
          <PaginationItem>
            <PaginationPrevious onClick={() => onPageChange(currentPage - 1)} />
          </PaginationItem>
        )}
        {generatePaginationLinks(currentPage, totalPages, onPageChange)}
        {currentPage !== totalPages && totalPages > 1 && (
          <PaginationItem>
            <PaginationNext onClick={() => onPageChange(currentPage + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
