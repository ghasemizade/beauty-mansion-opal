'use client'
import clsx from "clsx"
import Wrapper from "../components/Wrapper"
import Link from "next/link"
import Image from "next/image";
import Menu from "../components/Menu";
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
            "w-full h-[80px]",
            "md:h-[80px]",
            "bg-white",
            "flex justify-center items-center",
            "z-20",
            "sticky top-0",
            `${show}`
        )}>
            <Wrapper className={clsx(
                "h-[60px]",
            )}>
                <Link
                href={"/"}>
                    <Image 
                        className={clsx(
                            "rounded-lg"
                        )}
                        width={100}
                        height={100}
                        src='/logo.png'
                        alt="logo"
                    />
                </Link>
                <Menu 
                    showCatMenu={showCatMenu} 
                    setShowCatMenu={setShowCatMenu}/>

                <Link href={"https://www.instagram.com/opal_beauty_mansion/"} target="_blank" className={clsx(
                    "p-2",
                    "rounded-full",
                    "flex justify-around items-center",
                    "transition-all duration-200",
                    "border-2",
                    "hover:border-[#A1A687]"
                )}>
                    <FaInstagram size={25} color="black"/>
                </Link>
            </Wrapper>

        </header>
    )
}