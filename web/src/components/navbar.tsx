'use client'

import dynamic from "next/dynamic"
import NavLink from "./navlink"

const LazyLogo = dynamic( () => import('../components/logo'),
    {
        loading: () => <div></div>,
        ssr: false
    }
)

export default function NavBar(){
    return(
        <nav className="w-full h-22 bg-none fixed top-0">
            <div className="w-[90%] h-full m-auto flex justify-between items-center">
                <LazyLogo />
                <div className="w-2/4 flex flex-row justify-between items-center">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/donate">Donate</NavLink>
                    <NavLink href="/merchandise">Merchandise</NavLink>
                    <NavLink href="/howitworks">How It Works</NavLink>
                </div>
                <div className="w-fit font-mono flex justify-between items-center gap-2">
                    <button className="py-2 px-6 bg-primary text-white rounded-lg">Sign Up</button>
                    <button className="py-2 px-8 bg-none border-2 text-white rounded-lg">Log In</button>
                </div>
            </div>
        </nav>
    )
}