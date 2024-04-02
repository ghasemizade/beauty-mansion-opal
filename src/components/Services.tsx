import clsx from 'clsx'
import React from 'react'
import Nail from "../../public/nail.jpg"
import Facial from "../../public/facial.jpg"
import FaceCare from "../../public/face-care.jpg"
import Hair from "../../public/hair-care.jpg"
import Microblading from "../../public/Microblading.jpg"
import ServiceImg from './ServicImg'
import 'animate.css';

export default function Services() {
  const serviceTitle = ["Nail", "Facial", "Microblading", "FaceCare", "Hair"]

  return (
    <div className={clsx(
        "w-full",
        "my-10",
        "flex justify-center items-center flex-col",
    )} id="services">
        <div className={clsx(
          "my-10",
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:gap-2 gap-20 md:gap-8",
          "mx-10"
        )}>
          <ServiceImg imgSrc={Nail} imgAlt='Nail' imgTitle={serviceTitle[0]}/>
          <ServiceImg imgSrc={Facial} imgAlt='Facial' imgTitle={serviceTitle[1]}/>
          <ServiceImg imgSrc={Microblading} imgAlt='Microblading' imgTitle={serviceTitle[2]}/>
          <ServiceImg imgSrc={FaceCare} imgAlt='FaceCare' imgTitle={serviceTitle[3]}/>
          <ServiceImg imgSrc={Hair} imgAlt='Hair' imgTitle={serviceTitle[4]}/>
        </div>
    </div>
  )
}
