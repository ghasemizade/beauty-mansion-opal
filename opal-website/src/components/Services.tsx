import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import Nail from "../../public/nail.jpg"
import Facial from "../../public/facial.jpg"
import FaceCare from "../../public/face-care.jpg"
import Hair from "../../public/hair.jpg"
import Microblading from "../../public/Microblading.jpg"

export default function Services() {
  return (
    <div className={clsx(
        "mt-60",
        "flex justify-center items-center flex-col"
    )}>
        <h2 className={clsx(
            "text-4xl font-bold",
            "bg-[#A1A687] text-white p-4 ",
            "rounded-tl-3xl rounded-br-3xl",
            "hover:rounded-tr-3xl hover:rounded-bl-3xl hover:rounded-tl-none hover:rounded-br-none",
            "transition-all duration-200",
            "cursor-pointer",
            "w-60 text-center"
        )}>
            Services
        </h2>
        <ul className={clsx(
          "flex justify-center items-center",
          "gap-5 mt-10"
        )}>
          <li className={clsx(
            "w-72 h-[500px]",
            
          )}>
            <Image src={Nail} alt='' className="rounded-full"/>
          </li>
          <li className={clsx(
            "w-72 h-[500px]"
          )}>
            <Image src={Facial} alt='' className="rounded-full"/>
          </li>
          <li className={clsx(
            "w-72 h-[500px]"
          )}>
            <Image src={Microblading} alt='' className="rounded-full"/>
          </li>
          <li className={clsx(
            "w-72 h-[500px]"
          )}>
            <Image src={FaceCare} alt='' className="rounded-full"/>
          </li>
          <li className={clsx(
            "w-72 h-[500px]"
          )}>
            <Image src={Hair} alt='' className="rounded-full"/>
          </li>
        </ul>
    </div>
  )
}
