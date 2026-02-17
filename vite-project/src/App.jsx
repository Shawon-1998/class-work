import { useState } from 'react'
import Nav from '../src/Components/Nav'
import Banner from '../src/Components/Banner'
import CardSec from '../src/Components/CardSec'
import Passionate from './Components/Passionate'
import Service from './Components/Service'
import RecentWork from './Components/RecentWork'

function App() {
 

  return (
    <>
     <Nav />
     <Banner />
     <CardSec/>
     <Passionate/>
     <Service/>
     <RecentWork />
    </>
  )
}

export default App
