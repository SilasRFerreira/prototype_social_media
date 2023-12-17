import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                <fieldset className="flex flex-col space-y-2 w-full">
                    <label htmlFor={label} className="font-bold">{label}</label> 
                    <div className="flex w-full border-box items-center space-x-1">
                        <div className="flex flex-col space-y-2 w-full">
                            <input className="box-border p-2 border-solid border-2 border-gray-4 rounded" type={passwordInputType} placeholder={placeholder} id={label} ref={ref} {...rest}/>
                            {error ? <p className="text-red-300 text-xs font-sm">{error.message}</p> : null}  
                        </div>
                        {showbutton ? <FontAwesomeIcon icon={faEye} onClick={() => hide()}/> : null}    
                    </div>
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