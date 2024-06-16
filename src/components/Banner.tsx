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
        "w-full ",
        "my-10",
        "overflow-hidden"
        )}>
        <div className={clsx(
            "rounded-[50px] mx-10",
            "bg-[#A1A687]",
            "h-[450px]"
        )}>
            <div className={clsx(
                "p-5"
            )}>
                <h1 className={clsx(
                    "text-white text-3xl md:text-5xl font-bold tracking-wide",
                    "leading-relaxed",
                    "p-0 md:p-10",
                    "w-[250px] md:w-[400px] h-20"
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
    </div>
  )
}
