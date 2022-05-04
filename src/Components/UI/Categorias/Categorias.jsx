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
    <div className='container-cate-tilulo'>
      <h2>Filtra tu busqueda</h2>
      <div className="contenedor-categorias">
        <div className="comics">
          <NavLink to='/Comics'><Imagenes url={comics} id="Academicos"/></NavLink>
          <p>Comics</p>
        </div>
        <div className="comedia">
          <NavLink to='/Comedia'><Imagenes url={comedia} id="categorias"/></NavLink>
          <p>Comedia</p>
        </div>
        <div className="terror">
          <NavLink to='/Terror'><Imagenes url={terror} id="categorias"/></NavLink>
          <p>Terror</p>
        </div>
        <div className="novelas">
          <NavLink to='/Novelas'><Imagenes url={novelas} id="categorias"/></NavLink>
          <p>Novelas</p>
        </div>
        <div className="infantil">
          <NavLink to='/Infantil'><Imagenes url={infantil} id="categorias"/></NavLink>
          <p>Infantil</p>
        </div>
        <div className="aventura">
          <NavLink to='/Aventura'><Imagenes url={aventura} id="categorias"/></NavLink>
          <p>Aventura</p>
        </div>
        <div className="academico">
          <NavLink to='/Academicos'><Imagenes url={academico} id="categorias"/></NavLink>
          <p>Academicos</p>
        </div>
      </div>
      
    </div>
    

  )
}
