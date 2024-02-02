import clsx from 'clsx'
import React from 'react'

export default function Services() {
  return (
    <div className={clsx(
        "mt-60",
    )}>
        <h2 className={clsx(
            "text-4xl font-bold",
            "bg-[#A1A687] text-white p-4 ",
            "rounded-tl-3xl rounded-br-3xl",
            "hover:rounded-tr-3xl hover:rounded-bl-3xl hover:rounded-tl-none hover:rounded-br-none",
            "transition-all duration-200",
            "cursor-pointer"
        )}>
            Services
        </h2>
    </div>
  )
}
