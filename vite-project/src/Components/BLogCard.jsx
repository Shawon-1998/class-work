import React from 'react'

const BLogCard = ({description,title,imgSrc}) => {
  return (
    <>
      <div className='pt-6.25 px-6.25 pb-7 rounded-[15px] bg-primary'>
          <img src={imgSrc} alt="" />
          <h3 className='text-[#ffffff85] pt-8.25  pb-2'>{title}</h3>
          <h1 className='text-2xl w-87.75 uppercase text-white'>{description}</h1>
      </div>
      </>
  )
}

export default BLogCard
