import clsx from 'clsx';
import React from 'react'
import { CgScrollV } from "react-icons/cg";

export default function Scroll() {
  return (
    <div className={clsx(
        "flex justify-center items-center",
    )}>
        <CgScrollV 
            size={50} 
            className={clsx(
                "animate-bounce"
        )}/>
    </div>
  )
}
