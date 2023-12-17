'use client'

import Input from "@/components/input"
import { SubmitHandler, useForm } from "react-hook-form"
import { LoginForm, loginSchema } from "@/app/home/homeForm/LoginSchema"
import { zodResolver } from '@hookform/resolvers/zod'
import Link from "next/link"

const HomeForm = () => {
  const { register, handleSubmit, formState: {errors}, reset } = useForm<LoginForm>({ resolver: zodResolver(loginSchema) }) 
  
  const submit: SubmitHandler<LoginForm> = (formData: LoginForm) =>{
    console.log(formData)    
    reset()
  }   
  
  return(
      <form onSubmit={handleSubmit(submit)} className="flex flex-col space-y-8 my-20 box-border w-96 max-sm:w-72 p-8 border-solid border-gray-3 border-2 rounded shadow-lg shadow-gray-3">  
        <div className="flex flex-col space-y-6">      
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
        <div className="flex flex-col space-y-6 text-center items-center">          
          <Link href={'/dashboard'} className="mt-12 text-white bg-brand-1 hover:bg-brand-2 py-1 w-4/5 rounded rounded border-solid border-2 border-brand-1 hover:border-brand-2">Login</Link>
          <p className="text-sm">Ainda não possui cadastro ?</p>
          <Link href={'/register'} className="mt-12 hover:text-gray-5 hover:bg-gray-2 bg-gray-4 text-gray-2 py-1 w-4/5 rounded border-solid border-2 border-gray-2 hover:border-gray-5">Cadastrar-se</Link>
        </div>
      </form>
  )
}

export default HomeForm