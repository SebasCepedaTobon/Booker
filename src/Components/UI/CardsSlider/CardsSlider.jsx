import React from 'react'
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import { BotonMas } from '../../UI/Botones/BotonMas';
import { NavLink } from 'react-router-dom'

export const CardsSlider = ({libro}) => {

    const {name , id, image } = libro;

  return (
      <div className='carta'>
          <Imagenes url={image} id="libro" />
          <div className="card">
              <div className='info2'>
                  <h2 id='titulo'>{name}</h2>
                  <NavLink to={"/Libro/" + libro.id}><BotonMas /></NavLink>
              </div>
          </div>
      </div>
  )
}
