'use client'
import clsx from "clsx"
import Wrapper from "./Wrapper"
import Link from "next/link"
import Image from "next/image";
import Logo from "../../public/logo.png"
import Menu from "./Menu";
import { FaInstagram } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Header() {
    const [showCatMenu, setShowCatMenu] = useState(false)
    const [show, setShow] = useState("translate-y-0")
    const [lastScrollY, setLastScrollY] = useState(0)

    const controlNavbar = () =>{
        if (window.scrollY > 150) {
            if (window.scrollY > lastScrollY) {
                setShow("-translate-y-[80px]")
            } else {
                setShow("shadow-sm")
            }
            
        } else {
            setShow("translate-y-0")
        }
        setLastScrollY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar)
        return () => {
            window.removeEventListener("scroll", controlNavbar)
        }
    }, [lastScrollY])   

    return (
        <header className={clsx(
            "w-full h-[50px]",
            "md:h-[80px]",
            "bg-white",
            "flex justify-center items-center",
            "sticky top-0",
            "rounded-b-3xl",
            `${show}`
        )}>
            <Wrapper className={clsx(
                "h-[60px]",
            )}>
                <Image 
                    className={clsx(
                        "rounded-lg"
                    )}
                    width={80}
                    height={80}
                    src={Logo}
                    alt="logo"
                />
                <Menu 
                    showCatMenu={showCatMenu} 
                    setShowCatMenu={setShowCatMenu}/>
                <Link href={"https://www.instagram.com/opal_beauty_mansion/"} target="_blank" className={clsx(
                    "p-2",
                    "rounded-full",
                    "flex justify-around items-center",
                    "transition-all duration-200",
                    "border-2",
                    "hover:border-black"
                )}>
                    <FaInstagram size={25} color="black"/>
                </Link>
            </Wrapper>

        </header>
    )
}