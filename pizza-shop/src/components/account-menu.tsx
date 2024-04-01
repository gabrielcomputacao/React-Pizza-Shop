import { Building, ChevronDown, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";

export function AccountMenu() {
  return (
    <DropdownMenu>
      {/* asChild passa todas as funcionalidades para o filho, pois os dois sao buttons e não é permitido no html, por isso o uso do asChild */}
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          /* esse select-none impossibilita o  usuario de selecionar o nome, ou a escrita do texto */
          className="flex items-center gap-2 select-none"
        >
          Pizza Shop
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          <span>Gabriel</span>
          <span className="text-xs font-normal text-muted-foreground">
            Gabriel@email.com
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Building className="mr-2 h-4 w-4" />
          <span>Perfil da Loja</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogOut className="text-rose-500 dark:text-rose-400 mr-2 h-4 w-4" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
