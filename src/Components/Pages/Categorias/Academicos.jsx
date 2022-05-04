import React from 'react'
import { Footer } from '../../Layouts/Footer/Footer'
import { Header } from '../../Layouts/Header/Header'
import { Categorias } from '../../UI/Categorias/Categorias'




export const Academicos = () => {
  return (
    <div>
        <Header/>
        <Categorias/>
        <div className="container-titulo">
          <h2 id='titulo-catego'>Academicos</h2>
          <hr id='hr-catego'/>
        </div>
        <Footer/>
    </div>
  )
}
