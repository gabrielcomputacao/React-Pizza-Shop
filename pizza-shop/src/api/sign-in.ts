import { api } from "@/lib/axios";

export interface SignInBody {
  email: string;
}

export async function signIn({ email }: SignInBody) {
  /* a rota de autenticação nao tem retorno, por isso nessa nao estamos tipando o retorno */
  await api.post("/authenticate", { email });
}
