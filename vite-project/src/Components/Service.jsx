import React from 'react'
import Container from './Container'
import Card from './Card'
import ServiceCard from './ServiceCard'
import service1 from '../assets/service1.png'
import service2 from '../assets/service2.png'
import service3 from '../assets/service3.png'

import { MdOutlineArrowOutward } from "react-icons/md";
import Button from './Button'
const Service = () => {
  return (
    <>
      <Container>
      <section className='my-30'>
            <h4 className='text-white text-center'>my services</h4>
        <h2 className='text-[45px] mt-7 mb-15 text-center text-white'>Here's how I can help!</h2>

        <div className='flex gap-7.5'>
            <ServiceCard
            imgSrc={service1} 
             title="Web Development"
            />
            <ServiceCard
            imgSrc={service2} 
             title="UI/UX Design"
            />
            <ServiceCard
            imgSrc={service3} 
             title="Content Writing"
            />
        </div>
       

       {/* <div className='mt-5 bg-secondary px-8.75 py-3.75 rounded-full  gap-2 font-bold text-white w-full block text-center'>
          <button className='flex items-center text-centerr gap-2'>Let’s Contact with Me  <MdOutlineArrowOutward className='float' /></button>
       </div> */}
       <div className='mx-auto block mt-7.5 mb-30'>
          <Button className='w-full justify-center'>Let’s Contact with Me</Button>
       </div>
       
      </section>
      </Container>
    </>
  )
}

export default Service
