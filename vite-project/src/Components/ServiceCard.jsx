import React from 'react'
import Button from './Button'

const ServiceCard = ({title,imgSrc}) => {
    return (
        <>
            <div className='bg-primary  w-102.5 ps-7 pe-8.25 py-10 rounded-[25px]'>
                <div className='flex gap-3 items-center'>
                    <img src={imgSrc} alt="" />
                    <h3 className='w-74 text-white'>{title}</h3>
                </div>
                <p className='w-82.75 pt-4 pb-19.25 text-[#ffffff67]'>Conducting qualitative and quantitative
                    research to understand user needs,
                    behaviors, and pain points. Utilizing
                    methods such as surveys, interviews, and
                    usability testing to actionable insights.</p>
                <ul className='text-white list-disc'>
                    <li>Ux designer</li>
                    <li>Research</li>
                    <li>Mobile & web development</li>
                </ul>
               
            </div>
        </>
    )
}

export default ServiceCard
