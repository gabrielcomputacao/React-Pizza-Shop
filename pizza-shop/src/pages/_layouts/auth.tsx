import { Pizza } from "lucide-react";
import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="grid min-h-screen  grid-cols-2">
      {/*barra 5 (/5) quer dizer apenas 5% de opacidade */}
      <div className="flex h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground  flex-col justify-between">
        <div className="flex items-center gap-3 text-lg font-medium text-foreground">
          <Pizza className="h-5 w-5" />
          <span>Pizza Shop</span>
        </div>
        <footer>
          Painel do Parceiro &copy Pizza Shop - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="flex flex-col justify-center items-center relative">
        {/* Outlet mostra onde o componente de fora vai ficar dentro do layout */}
        <Outlet />
      </div>
    </div>
  );
}
