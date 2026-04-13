"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavlinkProps {
    href:string,
    children: React.ReactNode
}


export default function NavLink({ href, children } : NavlinkProps ){

    const pathName = usePathname();
    const isActive = pathName === href;

    return(
        <Link 
            href={href}
            className={`text-base font-mono ${isActive ? "text-secondary" : "text-white"}`}
        >
            {children}
        </Link>
    )
}