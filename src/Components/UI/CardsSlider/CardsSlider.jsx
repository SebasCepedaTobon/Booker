import React from 'react'
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import { NavLink } from 'react-router-dom'


export const CardsSlider = ({ libro }) => {

  

    const { nombre, id_libro, imagen_libro, descripcion } = libro;

    return (
     
        <div className='conatiner-img-card'>
          <div className='carta'>
            <div className="card">
              <div className='info2'>
                <h2 id='titulo'>{nombre}</h2>
        
                  <div className='descripcion'>{descripcion}</div>
            
                <NavLink to={"/Libro/" + libro.id_libro}>
                <button className="learn-more">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Ver mas...</span>
                </button>
                </NavLink>
              </div>
            </div>
          </div>
          <Imagenes url={imagen_libro} className="libro" />
        </div>

 


      
    )
}
