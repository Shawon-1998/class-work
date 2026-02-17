import React from 'react'
import logo from '../assets/Link.png'
import logo1 from '../assets/Group1.png'
import logo2 from '../assets/Container1.png'
import Container from './Container'


const Banner = () => {
    return (
        <>
                <section>
                    <div className='flex items-center gap-5 justify-center font-semibold mt-18'>
                        <h1>HELLO</h1>
                        <img src={logo} className='' alt="" />
                        <h1>MOTION</h1>
                    </div>
            <Container>
                    <div className='justify-center flex items-center gap-20'>
                        <img src={logo1} alt="" />
                        <img src={logo2} alt="" />
                    </div>

            </Container>
                </section>

        </>
    )
}

export default Banner