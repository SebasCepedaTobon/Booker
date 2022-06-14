import React from 'react'
import { Imagenes } from '../Imagenes/Imagenes'
import evento1 from '../../../assets/Imagenes/Eventos/evento1.jpg'
import evento2 from '../../../assets/Imagenes/Eventos/evento2.jpg'
import evento3 from '../../../assets/Imagenes/Eventos/evento3.png'
import evento4 from '../../../assets/Imagenes/Eventos/evento4.jpeg'
import { NavLink } from 'react-router-dom'


export const Eventos = () => {
  return (
    <>
    <div id='titlulo-eventos'>Eventos</div>
      <div className='container-eventos'>
        
          <div className="evento1">
          <NavLink to={"/Eventos"}>
            <Imagenes url={evento1}/>
          </NavLink>
          </div>
        
        <div className="evento2">
          <Imagenes url={evento2}/>
        </div>
        <div className="evento3">
        <Imagenes url={evento4}/>
        </div>
        <div className="evento4">
        <Imagenes url={evento3}/>
          
        </div>
    </div></>

  )
}
