import React from 'react'
import { Footer } from '../../Layouts/Footer/Footer'
import { Header } from '../../Layouts/Header/Header'
import { MainAdmin } from '../../Layouts/MainAdmin/MainAdmin'


export const sitioAdmin = () => {
  return (
    <div>
        <Header/>
        <MainAdmin/>
        <Footer/>
    </div>
  )
}
