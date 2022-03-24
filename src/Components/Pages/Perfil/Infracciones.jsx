import React from 'react'
import { Footer } from '../../Layouts/Footer/Footer'
import { MainInfracciones } from '../../Layouts/MainPerfil/MainInfracciones'
import { Navegacion } from '../../UI/Navegacion/Navegacion'



export const Infracciones = () => {
  return (
    <div>
        <Navegacion/>
        <MainInfracciones/>
        <Footer/>
    </div>
  )
}