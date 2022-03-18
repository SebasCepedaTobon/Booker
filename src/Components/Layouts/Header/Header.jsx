import React from 'react'
import { Navegacion } from '../../UI/Navegacion/Navegacion'
import search from '../../../assets/Imagenes/search.png'
import { Imagenes } from '../../UI/Imagenes/Imagenes'




export const Header = () => {
  return (
    <div>
      <Navegacion/>
      <div className="banner">
        <div className="banner-contenido">
          <h1 className="poema">¡BUSCA LOS MEJORES LIBROS!</h1>
          <div className="barra-busqueda">
            <input type="text" placeholder='BUSCAR' id='buscar' />
            <a href=""><Imagenes url={search} id="search"/></a>
          </div>
        </div>
      </div>
      <div className="banner-degrade"></div>
    </div>
  )
}
