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
        "w-full",
        "my-10",
        "flex justify-center items-center flex-col"
    )}>
        <h2 className={clsx(
            "text-4xl font-bold",
            "bg-[#A1A687] text-white px-10 py-5",
            "rounded-[50px]",
            
        )}>
            Services
        </h2>
        <ul className={clsx(
          "flex justify-center items-center",
          "gap-1 my-10"
        )}>
          <li className={clsx(
            "w-full h-[500px]",
            
          )}>
            <Image src={Nail} alt='' className="rounded-full"/>
          </li>
          <li className={clsx(
            "w-full h-[500px]"
          )}>
            <Image src={Facial} alt='' className="rounded-full"/>
          </li>
          <li className={clsx(
            "w-full h-[500px]"
          )}>
            <Image src={Microblading} alt='' className="rounded-full"/>
          </li>
          <li className={clsx(
            "w-full h-[500px]"
          )}>
            <Image src={FaceCare} alt='' className="rounded-full"/>
          </li>
          <li className={clsx(
            "w-full h-[500px]"
          )}>
            <Image src={Hair} alt='' className="rounded-full"/>
          </li>
        </ul>
    </div>
  )
}
