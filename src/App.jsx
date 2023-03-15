import React from 'react'
import Navbar from './components/Navbar'
import FirstSection from './components/FirstSection'
import UmbrellaSection from './components/UmbrellaSection'
import PuffSection from './components/PuffSection'
import CartSection from './components/CartSection'
import NapSection from './components/NapSection'
import InstagramSection from './components/InstagramSection'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import './App.scss'


const App = () => {
    
  return (
    <>
      <div className='firstSectionDiv'>
        <Navbar/>
        <FirstSection/>
      </div>

        <UmbrellaSection/>
        <PuffSection/>
        <CartSection/>
        <NapSection/>
        <InstagramSection/>
        <Newsletter/>
        <Footer/>
    </>
  )
}

export default App