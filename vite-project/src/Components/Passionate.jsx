import React from 'react'
import imgSrc from '../assets/images.png'
import Container from './Container'
import Button from './Button'

const Passionate = () => {
    return (
        <>
            <div className='bg-primary'>
        <Container>
        <div className=' flex gap-36.25 py-30'>
            <img src={imgSrc} alt="" />
            <div>
                <p className='text-secondary'>Behind the Pixels</p>
                <h2 className='text-[45px] w-141.75 mt-6.5 mb-7.5 font-semibold text-white'>Passionate On Digital
                    Marketer Focused on
                    Driving Results.</h2>
                <p className='text-white w-120.25'>This encompasses a variety of strategies, including search
                    engine optimization (SEO), content marketing, social media
                    marketing, email marketing,.</p>
         <div className='flex p-8 pb-8.5'>
                <div className='bg-[#140C1C] pt-6 pb-7 pe-7 ps-8.5 border-r border-[#ffffff70]'>
                 <h3 className='text-5xl text-secondary font-bold'> 30+ </h3>
                 <p className='text-[#ffffffa8]'>Years of
                <span className='block'>  Experience</span></p>
            </div>
             <div className='bg-[#140C1C] pt-6 pb-7 pe-7 ps-8.5 border-r border-[#ffffff70]'>
                 <h3 className='text-5xl text-secondary font-bold'> 100+ </h3>
                 <p className='text-[#ffffffa8]'>Project
                <span className='block'> Completed</span></p>
            </div>
             <div className='bg-[#140C1C] pt-6 pb-7 pe-7 ps-8.5 '>
                 <h3 className='text-5xl text-secondary font-bold'> 300+ </h3>
                 <p className='text-[#ffffffa8]'>Successfull
                <span className='block'> Project</span></p>
            </div>
         </div>
            <Button>Learn more</Button>
            </div>
        </div>
        </Container>
            </div>
        </>
    )
}

export default Passionate
