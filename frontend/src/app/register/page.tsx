import RegisterForm from "@/app/register/registerForm"
import Header from "@/components/header"


const Register = () => {
    return(
        <>       
            <Header location="register"/>     
            <main className="w-full flex justify-center">
                <div className="my-16 flex items-center justify-center w-4/5 max-md: 11/12">
                    <RegisterForm/>
                </div>
        </main>
        </>
    )
}

export default Register