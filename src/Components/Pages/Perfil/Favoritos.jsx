import React from 'react'
import { Footer } from '../../Layouts/Footer/Footer'
import { MainFavoritos } from '../../Layouts/MainPerfil/MainFavoritos'
import { Navegacion2 } from '../../UI/Navegacion/Navegacion2'
import { FondoPerfil } from '../../UI/FondoPerfil/FondoPerfil'
import { Navegacion3 } from '../../UI/Navegacion/Navegacion3'




export const Favoritos = () => {
  return (
    <div>
        <Navegacion3/>
        <Navegacion2/>
        <FondoPerfil/>
        <MainFavoritos/>
        <Footer/>
    </div>
  )
}