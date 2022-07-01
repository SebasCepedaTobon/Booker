import React from 'react'
import { Footer } from '../../Layouts/Footer/Footer'
import { MainHistorial } from '../../Layouts/MainPerfil/MainHistorial'
import { Navegacion2 } from '../../UI/Navegacion/Navegacion2'
import { FondoPerfil } from '../../UI/FondoPerfil/FondoPerfil'
import { Navegacion3 } from '../../UI/Navegacion/Navegacion3'




export const Historial = () => {
  return (
    <div>
        <Navegacion3/>
        <Navegacion2/>
        <FondoPerfil/>
        <MainHistorial/>
        <Footer/>
    </div>
  )
}