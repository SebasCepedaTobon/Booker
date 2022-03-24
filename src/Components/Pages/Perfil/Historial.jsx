import React from 'react'
import { Footer } from '../../Layouts/Footer/Footer'
import { MainHistorial } from '../../Layouts/MainPerfil/MainHistorial'

import { Navegacion } from '../../UI/Navegacion/Navegacion'



export const Historial = () => {
  return (
    <div>
        <Navegacion/>
        <MainHistorial/>
        <Footer/>
    </div>
  )
}