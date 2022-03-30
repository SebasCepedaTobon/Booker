import React from 'react'
import { Header } from '../../Layouts/Header/Header'
import { Footer } from '../../Layouts/Footer/Footer'
import { MainLibros } from '../../Layouts/MainLibros/MainLibros'

export const Libro = () => {
  return (
      <div>
        <Header/>
        <MainLibros/>
        <Footer/>
      </div>
  )
}
