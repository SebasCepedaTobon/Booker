import React from 'react'
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import comics from '../../../assets/Imagenes/GIF/commics.gif'
import comedia from '../../../assets/Imagenes/GIF/comedia.gif'
import terror from '../../../assets/Imagenes/GIF/terror.gif'
import novelas from '../../../assets/Imagenes/GIF/novelas.gif'
import infantil from '../../../assets/Imagenes/GIF/infantil.gif'
import aventura from '../../../assets/Imagenes/GIF/aventura.gif'
import academico from '../../../assets/Imagenes/GIF/academicos.gif'
import { NavLink } from 'react-router-dom'


export const Categorias = () => {
  return (
    <div className="contenedor-categorias">
    <div className="comics">
      <NavLink to='/Academicos'><Imagenes url={comics} id="Academicos"/></NavLink>
      <p>Comics</p>
    </div>
    <div className="comedia">
      <Imagenes url={comedia} id="categorias"/>
      <p>Comedia</p>
    </div>
    <div className="terror">
      <Imagenes url={terror} id="categorias"/>
      <p>Terror</p>
    </div>
    <div className="novelas">
      <Imagenes url={novelas} id="categorias"/>
      <p>Novelas</p>
    </div>
    <div className="infantil">
      <Imagenes url={infantil} id="categorias"/>
      <p>Infantil</p>
    </div>
    <div className="aventura">
      <Imagenes url={aventura} id="categorias"/>
      <p>Aventura</p>
    </div>
    <div className="academico">
      <Imagenes url={academico} id="categorias"/>
      <p>Academicos</p>
    </div>
  </div>
  )
}
