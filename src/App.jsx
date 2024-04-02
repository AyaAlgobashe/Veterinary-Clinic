import React from 'react'

import AppBarComponent from './componnents/naveBar'
import HeaderSlider from './componnents/HeaderSlider'
import About from './componnents/About'

import ServiceList from './componnents/ServiceList'
import ServiceSpecial from './componnents/ServiceList'
import MoreInfo from './componnents/sectionPrice'
import Home from './pages/homePage'
import servicesPage from './pages/servicePage'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router/router'
import Footer from './componnents/footer'




const App = () => {
  return (
    <>
    
    <BrowserRouter>  
    <Router/>
    <Footer/>
    </BrowserRouter>
    {/* <HeaderSlider/>
    <About/>
    <ServiceList/>
    <ServiceSpecial/>
    <MoreInfo/> */}
    
    
    </>
  )
}

export default App
