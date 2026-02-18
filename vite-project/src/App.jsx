import { useState } from 'react'
import Nav from '../src/Components/Nav'
import Banner from '../src/Components/Banner'
import CardSec from '../src/Components/CardSec'
import Passionate from './Components/Passionate'
import Service from './Components/Service'
import RecentWork from './Components/RecentWork'
import Achievement from './Components/Achievement'
import BlogSec from './Components/BlogSec'
import Footer from './Components/Footer'


function App() {
 

  return (
    <>
     <Nav />
     <Banner />
     <CardSec/>
     <Passionate/>
     <Service/>
     <RecentWork />
     <Achievement />
     <BlogSec />
     <Footer />
    </>
  )
}

export default App
