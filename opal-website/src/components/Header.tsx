'use client'
import clsx from "clsx"
import Wrapper from "./Wrapper"
import Link from "next/link"
import Image from "next/image";
import Logo from "../../public/logo.png"
import Menu from "./Menu";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
    const [show, setShow] = useState("translate-y-0")
    return (
        <header className={clsx(
            "w-3/4 h-[50px]",
            "md:h-[80px]",
            "",
            "flex justify-center items-center",
            "z-20",
            "sticky top-0",
        )}>
            <Wrapper className={clsx(
                "h-[60px]",
                // "flex justify-center items-center",
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
                <Menu />
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