import React from 'react'
import { Footer } from '../../Layouts/Footer/Footer'
import { MainFavoritos } from '../../Layouts/MainPerfil/MainFavoritos'
import { Navegacion2 } from '../../UI/Navegacion/Navegacion2'



export const Favoritos = () => {
  return (
    <div>
        <Navegacion2/>
        <MainFavoritos/>
        <Footer/>
    </div>
  )
}