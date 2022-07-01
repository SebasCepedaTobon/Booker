import React from 'react'
import { Footer } from '../../Layouts/Footer/Footer'
import { MainInfracciones } from '../../Layouts/MainPerfil/MainInfracciones'
import { Navegacion2 } from '../../UI/Navegacion/Navegacion2'
import { FondoPerfil } from '../../UI/FondoPerfil/FondoPerfil'
import { Navegacion3 } from '../../UI/Navegacion/Navegacion3'




export const Infracciones = () => {
  return (
    <div>
        <Navegacion3/>
        <Navegacion2/>
        <FondoPerfil/>
        <MainInfracciones/>
        <Footer/>
    </div>
  )
}