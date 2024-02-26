import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div>
      <h1>Autenticação</h1>

      <div>
        {/* Outlet mostra onde o componente de fora vai ficar dentro do layout */}
        <Outlet />
      </div>
    </div>
  );
}
