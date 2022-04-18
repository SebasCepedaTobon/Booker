import React from 'react'
import { Footer } from '../../Layouts/Footer/Footer'
import { MainLibros } from '../../Layouts/MainLibros/MainLibros'
import { Navegacion2 } from '../../UI/Navegacion/Navegacion2'


export const Libro = () => {
  return (
      <div>
        <Navegacion2/>
        <MainLibros/>
        <Footer/>
      </div>
  )
}
