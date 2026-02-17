import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
const CardWork = ({description,title,imgSrc}) => {
  return (
    <>
      <div className='pt-6.25 px-6.25 pb-7 rounded-[15px] bg-primary'>
          <img src={imgSrc} alt="" />
          <h3 className='text-white pt-8.25 pb-2'>{title}</h3>
         <div className=' flex justify-between items-center'>
             <p className='text-[#ffffff54] '>{description}</p>
             <MdOutlineArrowOutward className=' bg-primary text-white outline-white'/>
         </div>
      </div>
    </>
  )
}

export default CardWork
