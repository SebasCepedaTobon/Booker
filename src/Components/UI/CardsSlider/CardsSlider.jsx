import React from 'react'
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import { NavLink } from 'react-router-dom'


export const CardsSlider = ({ libro }) => {

  

    const { name, id, image } = libro;

    return (
     
        <div className='conatiner-img-card'>
          <div className='carta'>
            <div className="card">
              <div className='info2'>
                <h2 id='titulo'>{name}</h2>
                <p>Consectetur cum consequatur similique. Vero, sint iste ex ipsa modi hic quaerat, quibusdam autem, totam ea consequuntur dolore odit corrupti. Est, asperiores.</p>
                <NavLink to={"/Libro/" + libro.id}>
                <button class="learn-more">
                  <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                  </span>
                  <span class="button-text">Ver mas...</span>
                </button>
                </NavLink>
              </div>
            </div>
          </div>
          <Imagenes url={image} className="libro" />
        </div>

 


      
    )
}
