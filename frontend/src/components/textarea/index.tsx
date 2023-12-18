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
                <fieldset className="flex flex-col w-full border-box items-center space-y-2">
                    <label htmlFor={label}>{label}</label> 
                    <textarea id={label} placeholder={placeholder} ref={ref} {...rest} className="w-full h-24 resize-none p-2 border-2 border-gray-4 rounded"></textarea>
                    {error ? <p className="text-red-300 text-xs font-sm self-end">{error.message}</p> : null}                               
                </fieldset>
            ) : (
                <fieldset className="flex flex-col w-full border-box items-center space-y-2">                    
                    <textarea id={label} placeholder={placeholder} ref={ref} {...rest} className="w-full h-24 resize-none p-2 border-2 border-gray-4 rounded"></textarea>
                    {error ? <p className="text-red-300 text-xs font-sm self-end">{error.message}</p> : null}
                </fieldset>
            )}
        </>
    )
})

export default TextArea