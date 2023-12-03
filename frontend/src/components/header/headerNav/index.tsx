import Link from "next/link"
import { iHeader } from ".."

const HeaderNav = ({location}: iHeader) => {
    const headerLocation = () => {
        if (location === 'login') {
            return (
                <Link href={'/register'}>Cadastre-se</Link>
            )       
        } else if (location === 'register') {
            return (
                <Link href={'/'}>Login</Link>
            )
        } else {
            return (
                <Link href={'/'}>Logout</Link>
            )
        }
    }    
    
    return(
        <nav>
            {headerLocation()}
        </nav>
    )
}

export default HeaderNav