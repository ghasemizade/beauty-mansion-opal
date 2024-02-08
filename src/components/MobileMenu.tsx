import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'



const navData = [
    {id: 1, name: "Services", url: "/services"},
    {id: 2, name: "Gallary", url: "/gallary"},
    {id: 3, name: "About Us", url: "/about"},
    {id: 4, name: "Contact Us", url: "/contact"},
]

interface MenuProps {
    showCatMenu: boolean
    setShowCatMenu: (show: boolean) => void
    setMobileMenu: (show: boolean) => void
}

export default function MobileMenu({showCatMenu, setShowCatMenu, setMobileMenu}: MenuProps) {
  return (
    <ul className={clsx(
        "flex flex-col",
        "md:hidden",
        "font-bold",
        "absolute left-0",
        "top-[50px]",
        "w-full",
        "h-[calc(100vh-50px)]",
        "bg-white",
        "border-t",
        "text-black",
    )}>
        {navData.map(item => (
            <React.Fragment key={item.id}>
                {

                }
            </React.Fragment>
        ))}
    </ul>
  )
}