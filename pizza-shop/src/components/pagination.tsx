import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "./ui/button";

export interface PaginationProps {
  pageIndex: number;
  totalCount: number;
  perPage: number;
}

/* 
    pageIndex => pagina que esta no momento começando do 1
    totalCOunt => numero total de registro
    perPage => numero de registro por pagina
*/

export function Pagination({
  pageIndex,
  totalCount,
  perPage,
}: PaginationProps) {
  // metodo ceil arredonda para cima , e caso de erro ele retorna 1

  const pages = Math.ceil(totalCount / perPage) || 1;

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount} item(s)
      </span>

      <div className="flex items-center gap-4 lg:gap-8">
        <div className="flex text-sm font-medium">
          Página {pageIndex + 1} de {pages}
        </div>
        <div className="flex items-center gap-2">
          <Button variant={"outline"} className="h-8 w-8 p-8">
            <ChevronsLeft className="w-4 h-4" />
            <span className="sr-only">Primeira Página</span>
          </Button>
          <Button variant={"outline"} className="h-8 w-8 p-8">
            <ChevronLeft className="w-4 h-4" />
            <span className="sr-only">Página Anterior</span>
          </Button>
          <Button variant={"outline"} className="h-8 w-8 p-8">
            <ChevronRight className="w-4 h-4" />
            <span className="sr-only">Próxima Página</span>
          </Button>
          <Button variant={"outline"} className="h-8 w-8 p-8">
            <ChevronsRight className="w-4 h-4" />
            <span className="sr-only">Última Página</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
