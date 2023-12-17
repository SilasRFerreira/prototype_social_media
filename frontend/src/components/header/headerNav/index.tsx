import Link from "next/link"
import { iHeader } from ".."

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"

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
                <>
                    <a href={'/'} className="h-16 w-16">
                        <FontAwesomeIcon icon={faRightFromBracket}/>
                    </a>
                </>
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