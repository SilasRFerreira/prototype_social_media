'use client'

import Input from "@/components/input"
import { SubmitHandler, useForm } from "react-hook-form"
import { LoginForm, loginSchema } from "@/app/homeForm/LoginSchema"
import { zodResolver } from '@hookform/resolvers/zod'
import Link from "next/link"


const HomeForm = () => {
  const { register, handleSubmit, formState: {errors}, reset } = useForm<LoginForm>({ resolver: zodResolver(loginSchema) }) 
  
  const submit: SubmitHandler<LoginForm> = (formData: LoginForm) =>{
    console.log(formData)    
    reset()
  } 
  
  return(
      <form onSubmit={handleSubmit(submit)}>  
        <div>      
          <Input 
            label='Email' 
            type='email' 
            placeholder="digite seu email" 
            {...register('email')} 
            error={errors.email}
          />
          <Input 
            label='Senha' 
            type='password' 
            placeholder="digite seu senha" 
            {...register('password')} 
            error={errors.password}
          />
        </div>
        <div>
          <button>Login</button>
          <p>Ainda não possui cadastro ?</p>
          <Link href={'/register'}>Cadastrar-se</Link>
        </div>

      </form>
  )
}

export default HomeForm