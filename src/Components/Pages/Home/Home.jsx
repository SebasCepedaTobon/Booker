import React from 'react'
import { Header } from '../../Layouts/Header/Header'
import { MainHome } from '../../Layouts/MainHome/MainHome'
import { Footer } from '../../Layouts/Footer/Footer'


export const Home = () => {
  return (
    <div className='home' >
      <Header/>
      <MainHome/>
      <Footer/>
    </div>
  )
}
