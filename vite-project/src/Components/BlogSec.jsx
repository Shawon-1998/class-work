import React from 'react'
import BLogCard from './BLogCard'
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import blog3 from '../assets/blog3.png'
import Container from './Container'
const BlogSec = () => {
  return (
    <>
        <Container>
                <h4 className='text-center'>Behind the Pixels</h4>
                <h1 className='text-[47px] text-white text-center font-semibold mt-6.5 mb-14.75'>Read My Recent Blog</h1>
                <div className='flex gap-6 mb-30'>
                    <BLogCard
                        title="Business . Nov 01, 2025"
                        description='The Role of Technology in Modern Log'
                        imgSrc={blog1}
                    />
                    <BLogCard
                        title="Business . Nov 01, 2025"
                        description='The Role of Technology in Modern Log'
                        imgSrc={blog2}
                    />
                    <BLogCard
                        title="Business . Nov 01, 2025"
                        description='Digital Marketo to Their New Office.'
                        imgSrc={blog3}
                    />

                </div>
            </Container>
    </>
  )
}

export default BlogSec
