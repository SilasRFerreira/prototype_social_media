'use client'

import HeaderNav from "./headerNav"

export interface iHeader {
    location?: string | null
}

const Header = ({location}: iHeader) => {
    return(
        <header>
            <div>
                <h1>Logo</h1>
                <HeaderNav location={location}/>
            </div>
        </header>
    )
}

export default Header