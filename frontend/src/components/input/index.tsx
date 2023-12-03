import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react"
import { FieldError } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    type: "text" | "email" | "password" | "textarea";
    placeholder: string;
    error?: FieldError | undefined;    
  }

  const Input = forwardRef(({
    label, 
    type, 
    placeholder, 
    error, 
    ...rest
}: InputProps, ref: ForwardedRef<HTMLInputElement>)=> {
    return (
        <>  
            {label ? (
                <fieldset>
                    <label htmlFor={label}>{label}</label> 
                    <input type={type} placeholder={placeholder} id={label} ref={ref} {...rest}/>
                    {error ? <p>{error.message}</p> : null}            
                </fieldset>
            ) : (
                <fieldset>
                    <input type={type}  placeholder={placeholder} ref={ref} {...rest}/>
                    {error ? <p>{error.message}</p> : null}
                </fieldset>
            )}
        </>
    )
})

export default Input