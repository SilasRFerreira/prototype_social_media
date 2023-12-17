'use client'

import HeaderNav from "./headerNav"

export interface iHeader {
    location?: string | null
}

const Header = ({location}: iHeader) => {
    
    return(
        <header className="bg-black text-white h-16 w-full flex items-center justify-center">
            <div className="flex justify-between w-11/12 p-1">
                <h1 className="font-bold text-xl">Logo</h1>   
                <nav className="">
                    <HeaderNav location={location}/>
                </nav>             
            </div>
        </header>
    )
}

export default Header