import React from 'react'
import { Footer } from '../../Layouts/Footer/Footer'
import { Header } from '../../Layouts/Header/Header'
import { Categorias } from '../../UI/Categorias/Categorias'
import { Libros } from '../../UI/Libros/Libros'




export const Infantil = () => {
  return (
    <div>
        <Header/>
        <Categorias/>
        <div className="container-titulo">
          <h2 id='titulo-catego'>Infantil</h2>
          <hr id='hr-catego'/>
        </div>
        <Libros/>
        <Footer/>
    </div>
  )
}