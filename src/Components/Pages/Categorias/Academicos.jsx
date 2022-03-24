import React from 'react'
import { Footer } from '../../Layouts/Footer/Footer'
import { Header } from '../../Layouts/Header/Header'
import { Libros } from '../../UI/Libros/Libros'



export const Academicos = () => {
  return (
    <div>
        <Header/>
        <h2>Academicos</h2>
        <Libros/>
        <Footer/>
    </div>
  )
}
