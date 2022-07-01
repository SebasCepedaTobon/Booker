import React from 'react'
import { Footer } from '../../Layouts/Footer/Footer'
import { MainReservados } from '../../Layouts/MainPerfil/MainReservados'
import { Navegacion2 } from '../../UI/Navegacion/Navegacion2'
import { FondoPerfil } from '../../UI/FondoPerfil/FondoPerfil'
import { Navegacion3 } from '../../UI/Navegacion/Navegacion3'



export const Reservados = () => {
  return (
    <div>
        <Navegacion3/>
        <Navegacion2/>
        <FondoPerfil/>
        <MainReservados/>
        <Footer/>
    </div>
  )
}