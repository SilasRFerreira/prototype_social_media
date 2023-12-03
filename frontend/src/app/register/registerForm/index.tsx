'use client'

import Input from "@/components/input"
import { SubmitHandler, useForm } from "react-hook-form"


const RegisterForm = () => {
  const { register, handleSubmit, formState: {errors}, reset } = useForm() 
  
  const submit: SubmitHandler<any> = (formData: any) =>{
    console.log(formData)    
    reset()
  } 
  
  return(
      <form onSubmit={handleSubmit(submit)}>    
        <Input label='Nome' type='text' placeholder="digite seu email" {...register('first_name')}/>
        <Input label='Sobrenome' type='text' placeholder="digite seu sobrenome" {...register('last_name')}/>    
        <Input label='Email' type='email' placeholder="digite seu email" {...register('email')}/>
        <Input label='Senha' type='password' placeholder="digite seu senha" {...register('password')}/>
        <Input label='Confirme a senha' type='password' placeholder="confirme a senha" {...register('password_confirmation')}/>
        <Input label='Descrição' type='text' placeholder="digite sua descrição" {...register('description')}/>
        <Input label='Imagem' type='text' placeholder="url da imagem" {...register('img_url')}/>
        <button>Cadastrar</button>
      </form>
  )
}

export default RegisterForm