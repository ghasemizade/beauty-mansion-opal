import React from 'react'
import Wrapper from './Wrapper'
import clsx from 'clsx'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={clsx(
        "w-full h-[80px]",
        "md:h-[80px]",
        "bg-[#A1A687]",
        "flex justify-center items-center",
        "z-20",
        "sticky top-0",
    )}>
        <Wrapper className={clsx(
            "h-[60px]",
        )}>
            
        </Wrapper>

    </footer>
  )
}
