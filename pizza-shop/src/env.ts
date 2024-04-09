import { z } from "zod";

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
  // toda variavel de ambiente so le como sting por isso precisa fazer um transform nela caso seja boolean
  VITE_ENABLE_API_DELAY: z.string().transform((value) => value === "true"),
});

/* process.env é algo especifico do node */
export const env = envSchema.parse(import.meta.env);
/* parse vai validar que esse envSchema tenha as mesmas propriedades que foi passada no zod */
