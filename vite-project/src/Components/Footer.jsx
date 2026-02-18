import React from 'react'
import logo from '../assets/navLogo.png'
import Container from './Container'
import { MdOutlineArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    <>
   <img src="/assets/FooterBackground.png" alt="" />   
  
<footer className="bg-[url(assets/FooterBackground.png)] bg-no-repeat bg-cover bg-center rounded-t-[120px]  text-white ">
<Container>
  <div className="mx-auto p-4 py-6 lg:py-8">
    <div className="flex justify-between pt-30">
      <div className="mb-6 md:mb-0">
        <a href="#" className="">
        <img src={logo} className='h-7 ' alt=""  />
        <p className=' mt-4 mb-7.5 w-85'>I break down complex user the experience problems the create integrity focused to solutions that’s connect.</p>
      
        </a>
      </div>
    <ul className='leading-10 text-paragraph'>
        <h2 className='text-heading text-lg font-semibold'>Legal Details</h2>
        <li>Landingpage</li>
        <li>Features</li>
        <li>Documentation</li>
        <li>Referral Program</li>
     
      </ul>
      <ul className='leading-10 text-paragraph'>
       <h2  className='text-heading text-lg font-semibold'>Contact</h2>
         <li>hello-designer@gerold.com</li>
         <li>+01 123 654 8096</li>
        <li>+01 123 654 8096</li>
      </ul>
    <ul className='leading-10 text-paragraph'>
       <h2  className='text-heading text-lg font-semibold m-5.25 '>Subscribe to My Newsletter!</h2>
      <div className='flex gap-3 items-center '>
<form className="flex items-center max-w-sm mx-auto bg-white rounded-full  ">   
  <label htmlFor="simple-search" className="sr-only">Search</label>
  <div className=" ">
    <input type="text" id="simple-search" className="px-5 py-3 bg-neutral-secondary-medium  rounded-base ps-9 text-heading text-sm focus:ring-brand focus:border-brand block w-full placeholder:text-body" placeholder="Search branch name..." required />
  </div>
</form>
       <button className='p-3.5 cursor-pointer bg-primary rounded-full'>
         <MdOutlineArrowOutward />
       </button>
        </div>  
      </ul>
    </div>
    <div className='mt-32.75 uppercase flex justify-between pt-7.75 border-t border-[#ffffff41]'>
     <p>AVAILABLE FOR FREELANCE</p>
      <ul className='flex gap-8.75'>
        <li>Work</li>
        <li>Services</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <p >©All rights reserved by ThemeJunction</p>
    </div>
  </div>
</Container>
</footer>
    </>
  )
}

export default Footer
