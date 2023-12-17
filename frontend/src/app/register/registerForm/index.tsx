'use client'

import Input from "@/components/input"
import { SubmitHandler, useForm } from "react-hook-form"
import { RegisterSchame, iRegisterForm } from "./registerSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<iRegisterForm>({ resolver: zodResolver(RegisterSchame) })

  const submit: SubmitHandler<iRegisterForm> = (formData: iRegisterForm) => {
    console.log(formData)
    reset()
  }  

  return (
    <>
    <form onSubmit={handleSubmit(submit)} className="py-4 flex flex-col space-y-8 my-12 box-border w-96 max-sm:w-72 border-solid border-gray-3 border-2 rounded-lg shadow-lg shadow-gray-3 bg-gray-5">
      <div className="flex flex-col space-y-6 p-4">
      <Input
        label='Nome'
        type='text'
        placeholder="digite seu email"
        {...register('first_name')}
        error={errors.first_name}
      />
      <Input 
        label='Sobrenome' 
        type='text' 
        placeholder="digite seu sobrenome" 
        {...register('last_name')} 
        error={errors.last_name}
      />
      <Input 
        label='Email' 
        type='email'
        placeholder="digite seu email" 
        {...register('email')} 
        error={errors.email} 
      />
      <Input 
        label='Senha' 
        type={'password'}
        placeholder="digite seu senha" 
        {...register('password')} 
        error={errors.password} 
        showbutton={true}
      />
      <Input 
        label='Confirme a senha' 
        type='password' 
        placeholder="confirme a senha" 
        {...register('password_confirmation')} 
        error={errors.password_confirmation} 
        showbutton={true}
      />
      <Input 
        label='Descrição' 
        type='text' 
        placeholder="digite sua descrição" 
        {...register('description')} 
        error={errors.description} 
      />
      <Input 
        label='Imagem' 
        type='text' 
        placeholder="url da imagem" 
        {...register('img_url')} 
        error={errors.img_url} 
      />
      </div>
      <div className="flex flex-col space-y-6 text-center items-center">
        <button className="mt-12 text-white bg-brand-1 hover:bg-brand-2 py-1 w-4/5 rounded rounded border-solid border-2 border-brand-1 hover:border-brand-2">Cadastrar</button>
        <p className="text-sm">ou</p>
        <Link href={'/'} className="mt-12 hover:text-gray-5 hover:bg-gray-2 bg-gray-4 text-gray-2 py-1 w-4/5 rounded border-solid border-2 border-gray-2 hover:border-gray-5">Faça login</Link>
      </div>
    </form> 
    </> 
  )
}

export default RegisterForm