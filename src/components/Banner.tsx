'use client'
import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import BannerImg from "../../public/bannerImg.png"
import Typewriter from 'typewriter-effect';



export default function Banner() {
    const h1 = "Glow Your Beauty With Our Best Services"
  
    return (
    <div className={clsx(
        "bg-[#A1A687] h-[450px] w-full rounded-[50px]",
        "my-10",
        "overflow-hidden"
    )}>
        <div className={clsx(
            "p-5"
        )}>
            <h1 className={clsx(
                "text-white text-5xl font-bold",
                "leading-relaxed",
                "w-[350px] h-20 text-"
            )}>
                <Typewriter 
                    options={{
                        strings: [h1],
                        autoStart: true,
                        loop: true
                    }}
                />
            </h1>
        </div>
        <div className={clsx(
            "relative"
        )}>
            <Image 
                src={BannerImg} 
                width={200}
                alt='banner-img'
                className={clsx(
                    "absolute right-0 bottom-[-350px] ",
                    "md:w-[350px]"
                )}/>
        </div>
    </div>
  )
}
