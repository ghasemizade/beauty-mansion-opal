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
        "bg-[#A1A687] h-[450px] w-3/4 rounded-[50px]",
        "mt-20",
    )}>
        <div className={clsx(
            "ml-20 mt-20"
        )}>
            <h1 className={clsx(
                "text-white text-5xl font-bold",
                "leading-relaxed",
                "w-[400px]"
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
            
        )}>
            <Image 
                src={BannerImg} 
                width={350} 
                alt='banner-img'
                className={clsx(
                    "absolute right-20 bottom-[192px]",
                    // "overflow-hidden"
                )}/>
                <span className={clsx(
                    "w-80 h-80",
                    "bg-[#ffffff]",
                    "rounded-full",
                    "absolute right-28 bottom-[66px]"
                )}></span>
        </div>
    </div>
  )
}
