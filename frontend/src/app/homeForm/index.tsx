'use client'

import Input from "@/components/input"
import { SubmitHandler, useForm } from "react-hook-form"


const HomeForm = () => {
  const { register, handleSubmit, formState: {errors}, reset } = useForm() 
  
  const submit: SubmitHandler<any> = (formData: any) =>{
    console.log(formData)    
    reset()
  } 
  
  return(
      <form onSubmit={handleSubmit(submit)}>        
        <Input label='Email' type='email' placeholder="digite seu email" {...register('email')}/>
        <Input label='Senha' type='password' placeholder="digite seu senha" {...register('password')}/>
        <button>test</button>
      </form>
  )
}

export default HomeForm