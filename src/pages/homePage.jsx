import React from 'react'
import HeaderSlider from '../componnents/HeaderSlider'
import About from '../componnents/About'
import ServiceList from '../componnents/ServiceList'
import ServiceSpecial from '../componnents/specialServices'
import MoreInfo from '../componnents/sectionPrice'
import AppBarComponent from '../componnents/naveBar'
import OpeningHours from '../componnents/timeComponent'

export default function Home() {
  return (
    <>
    <AppBarComponent/>
    <HeaderSlider/>
    <About/>
    <MoreInfo/> 
    <OpeningHours/>
    <ServiceList/>
   
    {/* <ServiceSpecial/> */}
    
    </>
  )
}

