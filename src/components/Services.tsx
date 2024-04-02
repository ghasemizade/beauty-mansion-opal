'use client'
import clsx from 'clsx'
import React from 'react'
import Nail from "../../public/nail.jpg"
import Facial from "../../public/facial.jpg"
import FaceCare from "../../public/face-care.jpg"
import Hair from "../../public/hair-care.jpg"
import Microblading from "../../public/Microblading.jpg"
import ServiceImg from './ServicImg'
import { Fade, Slide, Zoom } from "react-awesome-reveal";

export default function Services() {
  const serviceTitle = ["Nail", "Facial", "Microblading", "FaceCare", "Hair"]

  return (
    <div className={clsx(
        "w-full",
        "my-10",
        "flex justify-center items-center flex-col",
    )} id="services">
      <h2 className={clsx(
        "text-4xl"
      )}>SERVICES</h2>
        <div className={clsx(
          "my-10",
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:gap-2 gap-20 md:gap-8",
          "mx-10"
        )}>
          <Fade triggerOnce>
            <ServiceImg imgSrc={Nail} imgAlt='Nail' imgTitle={serviceTitle[0]}/>
          </Fade>
          <Slide cascade>
            <ServiceImg imgSrc={Facial} imgAlt='Facial' imgTitle={serviceTitle[1]}/>
          </Slide>
          <Zoom>
            <ServiceImg imgSrc={Microblading} imgAlt='Microblading' imgTitle={serviceTitle[2]}/>
          </Zoom>
          <Slide>
            <ServiceImg imgSrc={FaceCare} imgAlt='FaceCare' imgTitle={serviceTitle[3]}/>
          </Slide>
          <Zoom>
            <ServiceImg imgSrc={Hair} imgAlt='Hair' imgTitle={serviceTitle[4]}/>
          </Zoom>
        </div>
    </div>
  )
}
