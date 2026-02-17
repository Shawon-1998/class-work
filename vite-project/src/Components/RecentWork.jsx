
import React from 'react'
import Container from './Container'
import link1 from '../assets/link1.png'
import link2 from '../assets/link2.png'
import link3 from '../assets/link3.png'
import barricades from '../assets/barricade.png'
import CardWork from './CardWork'
const RecentWork = () => {
    return (
        <>
          <div>
            <Container>
                <h4>My Recent Work</h4>
                <h1 className='text-[45px]  text-white font-semibold'>Recent work for <span className='block'> MY clients!</span></h1>
            </Container>

                <div className='flex gap-7.5 mt-15 mb-[181.89px]'>
                    <CardWork 
                    imgSrc={link1}
                     title="Deloitte"
                     description='Project was about precision and information...'
                    />
                    <CardWork 
                    imgSrc={link2}
                     title="New Age"
                     description='Project was about precision and information...'
                    />
                    <CardWork 
                    imgSrc={link3}
                     title="Sebastian"
                     description='Project was about precision and information...'
                    />
                </div>
          </div>
            <div>
                <img src={barricades} alt="" />
            </div>
        </>
    )
}

export default RecentWork
