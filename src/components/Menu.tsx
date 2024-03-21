import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'



const navData = [
    {id: 1, name: "Services", url: "#services"},
    {id: 2, name: "Gallary", url: "#gallary"},
    {id: 3, name: "About Us", url: "#about"},
    {id: 4, name: "Contact Us", url: "#contact"},
]

interface MenuProps {
  showCatMenu?: boolean,
  setShowCatMenu?: (show: boolean) => void
}

export default function Menu({showCatMenu, setShowCatMenu}: MenuProps) {

    return (
      <ul className={clsx(
        "items-center justify-center flex",
        "hidden",
        "md:flex",
        "gap-8",
        "font-medium",
        "text-bold"
    )}>
        {navData.map(item => (
            <React.Fragment key={item.id}>
              {
                (
                  <li className={clsx(
                    "cursor-pointer",
                    )}>
                      <Link href={`${item?.url}`} className={clsx(
                      "flex justify-center items-center",
                        "transition-all duration-200",
                        "border-2 rounded-full hover:border-[#A1A687]",
                        "px-2 pt-1",
                      )} scroll={true}>
                          {item.name}
                      </Link>
                  </li>
                )
              }
            </React.Fragment>
        ))}
    </ul>
    )
  }