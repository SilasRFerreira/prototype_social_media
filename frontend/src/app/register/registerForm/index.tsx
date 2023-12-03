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
    <form onSubmit={handleSubmit(submit)}>
      <div>
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
      <div>
        <button>Cadastrar</button>
        <p>ou</p>
        <Link href={'/'}>Faça login</Link>
      </div>
    </form> 
    </> 
  )
}

export default RegisterForm