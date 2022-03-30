import React from 'react'
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import libro1 from '../../../assets/Imagenes/libro1.jpg'

export const MainLibros = () => {
  return (
    <div className='mainlibros'>
        <div className="imglibros">
            <Imagenes url={libro1} id="libro"/>
        </div>
        <div className="libros2">
            <div className="info-libro">
                <h2 className='titulo'>Luis Miguel</h2>
                <p className='autor'>Mario Mendoza</p>
                <p className='estado'>Estado:</p>
            </div>
            <div className="detalles-libro">
                <h3 className='detalles'>Detalles del Libro:</h3>
                <hr />
                <p className='año'>Año:</p>
                <p className='Editor'>Editor:</p>
                <p className='Paginas'>Paginas:</p>
                <p className='Idioma'>Idioma:</p>
                <p className='Fecha'>Fecha:</p>
                <p className='Tamaño'>Tamaño:</p>
                <p className='Licencia'>Licencia:</p>
                <p className='ISBN'>ISBN::</p>
            </div>
            <button className='libros-reservar'>Reservar</button>
        </div>
    </div>
  )
}
