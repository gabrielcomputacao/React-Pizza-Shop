import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div>
      <h1>Cabeçalho</h1>

      <div>
        {/* Outlet mostra onde o componente de fora vai ficar dentro do layout */}
        <Outlet />
      </div>
    </div>
  );
}
