import { z } from "zod";

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
});

/* process.env é algo especifico do node */
export const env = envSchema.parse(import.meta.env);
/* parse vai validar que esse envSchema tenha as mesmas propriedades que foi passada no zod */
