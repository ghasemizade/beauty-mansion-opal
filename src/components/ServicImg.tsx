import clsx from 'clsx'
import React from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface LiComp {
    imgSrc?: StaticImport
    imgAlt?: string
    imgTitle?: string
    animate?: string
}

export default function LiComp({imgSrc, imgAlt, imgTitle}:LiComp) {

  return (
      <div className={clsx(
        "group",
        "w-full h-[500px]",
        "flex justify-center items-center flex-col"
      )}>
        <Image
          src={imgSrc ? imgSrc : "not found"} 
          alt={imgAlt ? imgAlt : "not found"}
          className={clsx(
            "flex justify-center items-center",
            "w-full h-[500px]",
            "rounded-3xl bg-cover bg-center",
            "group-hover:blur-sm transition-all duration-100 group-hover:brightness-50",
          )}
        />
        <h2 className={clsx(
          "group-hover:opacity-100 opacity-0",
          "text-3xl text-[#fff] font-bold",
          "justify-center items-center flex",
          "mt-2 absolute"
        )}>{imgTitle}</h2>
      </div>
  )
}
