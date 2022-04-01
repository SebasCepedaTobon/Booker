import React from 'react'
import { Footer } from '../../Layouts/Footer/Footer'
import { MainInfracciones } from '../../Layouts/MainPerfil/MainInfracciones'
import { Navegacion2 } from '../../UI/Navegacion/Navegacion2'



export const Infracciones = () => {
  return (
    <div>
        <Navegacion2/>
        <MainInfracciones/>
        <Footer/>
    </div>
  )
}