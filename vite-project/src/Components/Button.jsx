import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

const Button = ({className,children}) => {
  return (
    <>
       <button className={`${className} bg-secondary px-8.75 py-3.75 rounded-full flex gap-2 font-bold items-center text-white`}>
        {children} <MdOutlineArrowOutward />
       </button>
    </>
  )
}

export default Button