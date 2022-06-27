import React from 'react'
import { Footer } from '../../Layouts/Footer/Footer'
import { MainReservados } from '../../Layouts/MainPerfil/MainReservados'
import { Navegacion2 } from '../../UI/Navegacion/Navegacion2'
import { FondoPerfil } from '../../UI/FondoPerfil/FondoPerfil'



export const Reservados = () => {
  return (
    <div>
        <Navegacion2/>
        <FondoPerfil/>
        <MainReservados/>
        <Footer/>
    </div>
  )
}