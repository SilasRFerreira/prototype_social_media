import { z } from 'zod'

export const postSchema = z.object({
    post_title: z
        .string()
        .nonempty('O título do post não pode estar vazio'),
    post_content: z
        .string()
        .nonempty('A descrição do post não pode ser enviada em branco')
        .max(300, {message: 'O texto pode conter um máximo de 30 caracteres'})
})

export type postForm = z.infer<typeof postSchema>