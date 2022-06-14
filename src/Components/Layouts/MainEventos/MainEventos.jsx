import React from 'react'
import evento1 from '../../../assets/Imagenes/Eventos/evento1.jpg'
import { Imagenes } from '../../UI/Imagenes/Imagenes'

export const MainEventos = () => {
  return (
    <div className='container-event'>
        <h2 className='titulo-event'>Concuerso de relatos</h2>
        <div className="fechas">
            <i class="fa fa-calendar" aria-hidden="true"></i>
            <p>Junio 1, 2022 | 12:00 a. m. - Julio 1, 2022 | 12:00 a. m.</p>
        </div>
        <div className="container-img-event">
            <Imagenes url={evento1}/>
        </div>




    </div>
  )
}
