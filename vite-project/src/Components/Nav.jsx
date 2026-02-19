import React from 'react'
import logo from '../assets/navLogo.png'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiTorbrowser } from "react-icons/si";
import Button from './Button';



const Nav = () => {
  return (
    <>
      <nav className='bg-primary  '>    
        <div className=' flex justify-between px-16.25 items-center '>
       <img src={logo} alt="" />
          <ul className='flex gap-8.5 text-white '>
                    <li>Services</li>
                    <li>Works</li>
                    <li>Resume</li>
                    <li>Skills</li>
                    <li>Testimonials</li>
                    <li>Contact</li>
                 </ul>
                  <div className='text-white flex gap-3 my-3 items-center'>
                    <FaFacebookF />
                    <FaLinkedinIn />
                    <FaGithub />
                    <SiTorbrowser />
                    <Button >Lets talk</Button>
                 </div>
        </div>
      </nav>
        
    </>
  )
}

export default Nav




 
     