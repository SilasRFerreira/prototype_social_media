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
                    <div className="flex flex-col w-full border-box items-center space-y-2">
                        <div className="flex w-full items-center space-x-1">
                            <input className="box-border p-2 w-full border-solid border-2 border-gray-4 rounded" type={passwordInputType} placeholder={placeholder} id={label} ref={ref} {...rest}/>
                            {showbutton ? <FontAwesomeIcon icon={faEye} onClick={() => hide()}/> : null}    
                        </div>
                        {error ? <p className="text-red-300 text-xs font-sm self-end">{error.message}</p> : null}  
                    </div>
                </fieldset>
            ) : (
                <fieldset>
                    <div className="flex flex-col w-full border-box items-center space-y-2">
                        <div className="flex w-full items-center space-x-1">
                            <input className="box-border p-2 w-full border-solid border-2 border-gray-4 rounded" type={passwordInputType} placeholder={placeholder} id={label} ref={ref} {...rest}/>
                            {showbutton ? <FontAwesomeIcon icon={faEye} onClick={() => hide()}/> : null}    
                        </div>
                        {error ? <p className="text-red-300 text-xs font-sm self-end">{error.message}</p> : null}  
                    </div>
                </fieldset>
            )}
        </>
    )
})

export default Input