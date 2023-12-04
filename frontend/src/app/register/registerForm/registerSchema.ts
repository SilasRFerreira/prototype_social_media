import { z } from 'zod';  

export const RegisterSchame = z.object({
    first_name: z
        .string()
        .nonempty('campo obrigatório'),
    last_name: z
        .string()
        .nonempty('campo obrigatório'),
    email: z
        .string()
        .nonempty('campo obrigatório')
        .email('O e-mail fornecido é inválido.'),
    password: z
        .string()
        .nonempty('campo obrigatório')
        .min(6, "É necessário pelo menos seis caracteres.")
        .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
        .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
        .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número."),
    password_confirmation: z
        .string()
        .nonempty('campo obrigatório'),
    description: z
        .string(),
    img_url: z
        .string()             
}).refine(({password, password_confirmation}) => password === password_confirmation, {
    message: 'Deve corresponder a senha',
    path: ['password_confirmation'], 
})

export type iRegisterForm = z.infer<typeof RegisterSchame>