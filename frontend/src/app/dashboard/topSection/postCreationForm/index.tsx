'use client'

import Input from "@/components/input"
import { SubmitHandler, useForm } from "react-hook-form"
import { postForm, postSchema } from "./postSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import TextArea from "@/components/textarea"

const PostCreationForm = () => {
    const { register, handleSubmit, formState: {errors}, reset } = useForm<postForm>({ resolver: zodResolver(postSchema) })
    
    const submit: SubmitHandler<any> = (formData: any) =>{
        console.log(formData)    
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input 
                type="text" 
                placeholder="Digite Titulo do post"
                {...register('post_title')} 
                error={errors.post_title}
            />
            <TextArea 
                placeholder="Digite a descrição do post"
                {...register('post_content')} 
                error={errors.post_content}
            />
            <button>Postar</button>
        </form>
    )
}

export default PostCreationForm