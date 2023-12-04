import { ForwardedRef, TextareaHTMLAttributes, forwardRef } from "react"
import { FieldError } from "react-hook-form";

interface TextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;    
    placeholder: string;
    error?: FieldError | undefined;        
  }

  const TextArea = forwardRef(({
    label,      
    placeholder, 
    error,
    ...rest
}: TextArea, ref: ForwardedRef<HTMLTextAreaElement>)=> {
       
    
    return (
        <>  
            {label ? (
                <fieldset>
                    <label htmlFor={label}>{label}</label> 
                    <textarea id={label} placeholder={placeholder} ref={ref} {...rest}></textarea>
                    {error ? <p>{error.message}</p> : null}                               
                </fieldset>
            ) : (
                <fieldset>                    
                    <textarea id={label} placeholder={placeholder} ref={ref} {...rest}></textarea>
                    {error ? <p>{error.message}</p> : null}
                </fieldset>
            )}
        </>
    )
})

export default TextArea