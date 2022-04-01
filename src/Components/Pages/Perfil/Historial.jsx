import React from 'react'
import { Footer } from '../../Layouts/Footer/Footer'
import { MainHistorial } from '../../Layouts/MainPerfil/MainHistorial'
import { Navegacion2 } from '../../UI/Navegacion/Navegacion2'



export const Historial = () => {
  return (
    <div>
        <Navegacion2/>
        <MainHistorial/>
        <Footer/>
    </div>
  )
}