import React from 'react'
import { Footer } from '../../Layouts/Footer/Footer'
import { MainTLibros } from '../../Layouts/MainTLibros/MainTLibros'
import { Navegacion2 } from '../../UI/Navegacion/Navegacion2'

export const Tlibros = () => {
  return (
    <div>
        <Navegacion2/>
        <MainTLibros/>
        <Footer/>
    </div>
  )
}
