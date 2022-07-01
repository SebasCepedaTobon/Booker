import React from 'react'
import { Footer } from '../../Layouts/Footer/Footer'
import { MainEventos } from '../../Layouts/MainEventos/MainEventos'
import { Navegacion2 } from '../../UI/Navegacion/Navegacion2'
import { Navegacion3 } from '../../UI/Navegacion/Navegacion3'

export const Eventos = () => {
  return (
    <div>
        <Navegacion3/>
        <Navegacion2/>
        <MainEventos/>
        <Footer/>

    </div>
  )
}
