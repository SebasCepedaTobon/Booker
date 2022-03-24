import React from 'react'
import { Footer } from '../../Layouts/Footer/Footer'
import { MainPerfil } from '../../Layouts/MainPerfil/MainPerfil'
import { Navegacion } from '../../UI/Navegacion/Navegacion'



export const Perfil = () => {
  return (
    <div>
        <Navegacion/>
        <MainPerfil/>
        <Footer/>
    </div>
  )
}
