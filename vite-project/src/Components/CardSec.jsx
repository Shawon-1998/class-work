import React from 'react'
import logo1 from '../assets/Background.png'
import logo2 from '../assets/Background(1).png'
import logo3 from '../assets/Background(2).png'
import logo4 from '../assets/Background(3).png'
import logo5 from '../assets/Background(4).png'
import logo6 from '../assets/Background(5).png'
import logo7 from '../assets/Background(6).png'
import logo8 from '../assets/Background(7).png'
import logo9 from '../assets/Background(8).png'
import Container from './Container'
import Button from './Button'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'
import Card from './Card'


const CardSec = () => {
    return (
        <>
                <p className='text-white text-center pb-15'><span className='text-secondary'>100+</span> Trusted Clients Over the world</p>
                <div className='gap-5 justify-between flex'>
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo3} alt="" />
                    <img src={logo4} alt="" />
                    <img src={logo5} alt="" />
                    <img src={logo6} alt="" />
                    <img src={logo7} alt="" />
                    <img src={logo8} alt="" />
                    <img src={logo9} alt="" />
                </div>
            <Container>
                <section className='py-30 '>
                    <div className='flex justify-between'>
                        <div >
                            <p className='text-secondary'>My Recent Work</p>
                            <h2 className='text-[45px] uppercase text-white w-127.25 font-semibold'>MY Mastering Video
                                Editing Skills</h2>
                        </div>
                        <div className='self-end'>
                            <Button>Learn more</Button>
                        </div>
                    </div>
                    <div className='flex gap-6 mt-15 mb-30'>

                        <Card
                            imgSrc={card1}
                            title="Adobe After Effect"
                            Description="Adobe After Effects is apowerful software application
                            used motion graphics."
                            className="w-57"
                            rating="92"
                        />
                        <Card
                            imgSrc={card2}
                            title="Adobe After Effect"
                            Description="Adobe After Effects is apowerful software application
                            used motion graphics."
                            className="w-51"
                             rating="88"
                        />
                        <Card
                            imgSrc={card3}
                            title="Adobe After Effect"
                            Description="Adobe After Effects is apowerful software application
                            used motion graphics."
                            className="w-54"
                             rating="85"
                        />
                        <Card
                            imgSrc={card4}
                            title="Adobe After Effect"
                            Description="Adobe After Effects is apowerful software application
                            used motion graphics."
                            className="w-52"
                             rating="82"
                        />

                    </div>
                </section>
            </Container>

        </>
    )
}

export default CardSec