import React from 'react'
import Navbar from '../components/Navbar'
import FrontPage from './FrontPage'
import About from './About'
import Features from './Features'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div style={{overflow:"hidden"}}><FrontPage/>
 </div>
      <div style={{overflow:"hidden"}}><About/></div>
      <Features/>
    </div>
  )
}

export default Home
