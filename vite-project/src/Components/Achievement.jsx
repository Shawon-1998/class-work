import React from 'react'
import Container from './Container'
import img1 from '../assets/h4-work-1.png.png'
import img2 from '../assets/h4-work-2.png.png'
import img3 from '../assets/h4-work-3.png.png'
import icon from '../assets/icon.png'

const Achievement = () => {
  return (
    <>
      <Container>
        <div className='my-30'>
          <h4 className='text-center'>Behind the Pixels</h4>
          <h1 className='text-[47px] uppercase text-white text-center font-semibold mt-6.5 mb-14.75'>MY Background and <span className='block'>Achievements</span></h1>
        </div>
        <div className='flex justify-center'>
          <div className='bg-secondary py-6 px-7.5 text-[15px] font-bold  rounded-full  inline '>
            <span className='text-primary py-3 px-6  bg-white hover:text-white hover:bg-primary rounded-full'>experience</span>
            <span className='text-primary py-3 px-6 mx-5 bg-white hover:text-white hover:bg-primary rounded-full'>Education</span>
            <span className='text-primary py-3 px-6 bg-white hover:text-white hover:bg-primary rounded-full'>Awards</span>
          </div>
        </div>
     <section className='p-15.5 border rounded-[15px] mt-10 
     mb-30 border-[#ffffff52]'>
         <div>
          <div className='text-[#ffffff8a] flex justify-between '>
          <div className='flex gap-10'>
            <div>
              <img src={img1} alt="" />
            </div>
            <div className=''>
              <h2 className='text-lg text-white'>Senior User Interface Designer</h2>
              <h3 className='text-[#DDDDDD] mt-3.75 mb-6.25'>Semiflat Studio</h3>
              <p className='w-155.75 '>I'm winner of the world's most prestigious web designthat has more-or-less normal awards in the fields.</p> 
            </div>
          </div>
          <div className='flex gap-3 '><span><img src={icon} alt="" /></span>  <span>2022-2023</span></div>
        </div>
        <hr className='mt-12.5  text-[#ffffff3b]'/>
      </div>
      <div className='my-10'>
          <div className='text-[#ffffff8a] flex justify-between '>
          <div className='flex gap-10'>
            <div>
              <img src={img2} alt="" />
            </div>
            <div className=''>
              <h2 className='text-lg text-white'>Senior User Interface Designer</h2>
              <h3 className='text-[#DDDDDD] mt-3.75 mb-6.25'>Autentika</h3>
              <p className='w-155.75 '>I'm winner of the world's most prestigious web designthat has more-or-less normal awards in the fields.</p> 
            </div>
          </div>
          <div className='flex gap-3 '><span><img src={icon} alt="" /></span>  <span>2022-2023</span></div>
        </div>
        <hr className='mt-12.5  text-[#ffffff3b]'/>
      </div>
      <div>
          <div className='text-[#ffffff8a] flex justify-between '>
          <div className='flex gap-10'>
            <div>
              <img src={img3} alt="" />
            </div>
            <div className=''>
              <h2 className='text-lg text-white'>Senior Product Designer</h2>
              <h3 className='text-[#DDDDDD] mt-3.75 mb-6.25'>VirtusLab</h3>
              <p className='w-155.75 '>I'm winner of the world's most prestigious web designthat has more-or-less normal awards in the fields.</p> 
            </div>
          </div>
          <div className='flex gap-3 '><span><img src={icon} alt="" /></span>  <span>2022-2023</span></div>
        </div>
      </div>
     </section>
    

      </Container>
    </>
  )
}

export default Achievement
