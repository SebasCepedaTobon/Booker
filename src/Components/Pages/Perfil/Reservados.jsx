import React from 'react'
import { Footer } from '../../Layouts/Footer/Footer'
import { MainReservados } from '../../Layouts/MainPerfil/MainReservados'
import { Navegacion2 } from '../../UI/Navegacion/Navegacion2'



export const Reservados = () => {
  return (
    <div>
        <Navegacion2/>
        <MainReservados/>
        <Footer/>
    </div>
  )
}