import { ForwardedRef, InputHTMLAttributes, forwardRef, useState } from "react"
import { FieldError } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    type: string;
    placeholder: string;
    error?: FieldError | undefined;  
    showbutton?: boolean  
  }

  const Input = forwardRef(({
    label, 
    type, 
    placeholder, 
    error, 
    showbutton,
    ...rest
}: InputProps, ref: ForwardedRef<HTMLInputElement>)=> {
    
    const [passwordInputType, setPasswordInputType] = useState(type)

    const hide = () => {
        if (passwordInputType === 'password') {
        setPasswordInputType('text')
        } else if (passwordInputType === 'text') {
        setPasswordInputType('password')
        }
    }   
    
    return (
        <>  
            {label ? (
                <fieldset>
                    <label htmlFor={label}>{label}</label> 
                    <input type={passwordInputType} placeholder={placeholder} id={label} ref={ref} {...rest}/>
                    {error ? <p>{error.message}</p> : null}  
                    {showbutton ? <span onClick={() => hide()}>show</span> : null}          
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