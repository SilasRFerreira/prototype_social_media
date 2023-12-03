import { z } from 'zod';
  

export const loginSchema = z.object({
    email: z
        .string()
        .nonempty('campo obrigatório')
        .email('O e-mail fornecido é inválido.'),
    password: z
        .string()
        .nonempty('campo obrigatório')        
})

export type LoginForm = z.infer<typeof loginSchema>