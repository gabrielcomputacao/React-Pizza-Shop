import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const signInForm = z.object({
  email: z.string().email(),
});

// todo => o infer transforma a tipagem do zod em tipagem que se enquadra no typescript
type SignInForm = z.infer<typeof signInForm>;

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>();

  async function handleSignIn(data: SignInForm) {
    // magic link = quando é enviado um link no email da pessoa e quando ela clica ela está autenticada
    toast.success("Enviamos um link de autenticação para seu e-mail", {
      action: {
        label: "Reenviar",
        onClick: () => handleSignIn(data),
      },
    });
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8 ">
        {/* funciona como uma ancora mas sem fazer o reload total da pagina */}
        <Button variant={"ghost"} className="absolute right-8 top-8">
          <Link to="/sign-up" className="">
            Novo Estabelecimento
          </Link>
        </Button>
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar Painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>

          {/* uma função recendo a outra é até um pattern que se chama HOF, uma função de maior valor recebe outra,
            handle submit chama a função que foi criada
          
          */}
          <form
            action=""
            className="space-y-4"
            onSubmit={handleSubmit(handleSignIn)}
          >
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Acessar Painel
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
