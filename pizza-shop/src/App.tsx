import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";
import "./global.css";

export function App() {
  return (
    <HelmetProvider>
      {/* com esse titleTemplate colocando %s vai receeber um variavel que vai vir dentro das paginas e depois colocar o resto do titulo no template title */}
      <Helmet titleTemplate="%s | Pizza Shop" />
      <Toaster richColors closeButton />
      <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
  );
}
