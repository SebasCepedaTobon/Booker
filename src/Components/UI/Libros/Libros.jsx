import React from 'react'
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import libro1 from '../../../assets/Imagenes/libro1.jpg'
import { NavLink } from 'react-router-dom'
import { Botonmas2 } from '../Botones/Botonmas2'
import { BotonReservar } from '../Botones/BotonReservar'

export const Libros = () => {

    return (
        <div className="libros-categorias">
            <div className="cardss">
          <div className="contenedor-libro">
              <div className="libro">
                <Imagenes url={libro1} id="libro"/>
              </div>
              <div className="btn-card">
                <div className="container_vacio">
                </div>
                <div className="container_botones">
                  <NavLink to='/Libro'><Botonmas2/></NavLink>
                  <NavLink to='#'><BotonReservar/></NavLink>
                </div>
              </div>
          </div>
          <div className="blanco">
          </div>
        </div>
        <div className="cardss">
          <div className="contenedor-libro">
              <div className="libro">
                <Imagenes url={libro1} id="libro"/>
              </div>
              <div className="btn-card">
                <div className="container_vacio">

                </div>
                <div className="container_botones">
                  <NavLink to='/Libro'><Botonmas2/></NavLink>
                  <NavLink to='#'><BotonReservar/></NavLink>
                </div>
              </div>
          </div>
          <div className="blanco">
          </div>
        </div>
        <div className="cardss">
          <div className="contenedor-libro">
              <div className="libro">
                <Imagenes url={libro1} id="libro"/>
              </div>
              <div className="btn-card">
                <div className="container_vacio">

                </div>
                <div className="container_botones">
                  <NavLink to='/Libro'><Botonmas2/></NavLink>
                  <NavLink to='#'><BotonReservar/></NavLink>
                </div>
              </div>
          </div>
          <div className="blanco">
          </div>
        </div>
            
        </div>
    )
}
