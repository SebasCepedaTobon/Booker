import React from 'react'
import { Footer } from '../../Layouts/Footer/Footer'
import { MainPerfil } from '../../Layouts/MainPerfil/MainPerfil'
import { FondoPerfil } from '../../UI/FondoPerfil/FondoPerfil'
import { Navegacion2 } from '../../UI/Navegacion/Navegacion2'
import { Navegacion3 } from '../../UI/Navegacion/Navegacion3'




export const Perfil = () => {
  return (
    <div>
        <Navegacion3/>
        <Navegacion2/>
        <FondoPerfil/>
        <MainPerfil/>
        <Footer/>
    </div>
  )
}
