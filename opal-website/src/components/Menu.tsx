import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'



const navData = [
    {id: 1, name: "Services", url: "/services"},
    {id: 2, name: "Gallary", url: "/gallary"},
    {id: 3, name: "About Us", url: "/about"},
    {id: 4, name: "Contact Us", url: "/contact"},
]

export default function sMenu() {
    return (
      <ul className={clsx(
        "items-center justify-center flex",
        "hidden",
        "md:flex",
        "gap-20",
        "font-medium",
        "text-bold"
    )}>
        {navData.map(item => (
            <React.Fragment key={item.id}>
              {
                (
                  <li className={clsx(
                    "cursor-pointer",
                    "w-24"
                    )}>
                      <Link href={`${item?.url}`} className={clsx(
                        "hover:tracking-widest transition-all duration-200"
                      )}>
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