import React from 'react'

const Card = ({className,title,imgSrc,Description,rating}) => {
  return (
    <>
       <div className='bg-primary text-white w-76 ps-7 pe-8.25 py-10 rounded-[25px]'>
           <div className='flex gap-3 items-center'>
              <img src={imgSrc} alt="" />
              <h3 className='w-31.25'>{title}</h3>
           </div>
            <p className='w-60.75 pt-4 pb-19.25'>{Description}</p>
            <p className='text-end'>{rating}%</p>
             <div className={`border ${className} bg-white`}>
             </div>
       </div>
    </>
  )
}

export default Card
