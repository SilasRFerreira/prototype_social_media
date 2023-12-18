'use client'


import { SubmitHandler, useForm } from "react-hook-form"
import { postForm, postSchema } from "./postSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import TextArea from "@/components/textarea"
import Input from "@/components/input"

const PostCreationForm = () => {
    const { register, handleSubmit, formState: {errors}, reset } = useForm<postForm>({ resolver: zodResolver(postSchema) })
    
    const submit: SubmitHandler<any> = (formData: any) =>{
        console.log(formData)    
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-6">            
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
            <button className="self-end text-white bg-brand-1 hover:bg-brand-2 py-1 w-24 rounded rounded border-solid border-2 border-brand-1 hover:border-brand-2">Postar</button>
        </form>
    )
}

export default PostCreationForm