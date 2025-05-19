import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Component/Nav'
import VideoBackground from './Component/VideoBackground'

import Cards from './Component/Cards'
import WatchRS from './Component/WatchRS'
import Footer from './Component/Footer'
import Parteners from './Component/Parteners'
import About from './Component/About'
function App() {
 


  return (
   
<div>

  <VideoBackground/>

  <h1 style={{textAlign: 'start', color: 'white', padding: '0px 1rem'}}> 14 Zones to Explore </h1>
   <Cards/>
  
<WatchRS/>

<About/>
  
<Parteners/>

   <hr />
<Footer/>
</div>
  )
}

export default App
