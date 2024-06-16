'use client'
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from 'swiper/modules';
import instance1 from '../../public/face-care.jpg'
// Import Swiper styles
import "swiper/css";

import "../app/globals.css";
import Image from "next/image";
import clsx from "clsx";

export default function App() {
  return (
    <main className={clsx(
        "mx-10"
    )}>
      <Swiper className="mySwiper"
       effect={'coverflow'}
       grabCursor={true}
       centeredSlides={true}
       slidesPerView={3}
       coverflowEffect={{
         rotate: 50,
         stretch: 0,
         depth: 100,
         modifier: 1,
         slideShadows: true,
       }}
       pagination={true}
       modules={[EffectCoverflow, Pagination]}>
            <SwiperSlide>
                <Image src={instance1} alt='frist instance' width={200} height={200}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={instance1} alt='frist instance' width={200} height={200}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={instance1} alt='frist instance' width={200} height={200}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={instance1} alt='frist instance' width={200} height={200}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={instance1} alt='frist instance' width={200} height={200}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={instance1} alt='frist instance' width={200} height={200}/>
            </SwiperSlide>
      </Swiper>
    </main>
  );
}

                