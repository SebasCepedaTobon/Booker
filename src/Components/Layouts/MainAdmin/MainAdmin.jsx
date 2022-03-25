import React from 'react'
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import libro from '../../../assets/Imagenes/iconos/libro.svg'
import student from '../../../assets/Imagenes/iconos/user.svg'
import multas from '../../../assets/Imagenes/iconos/multas.svg'
import reserva from '../../../assets/Imagenes/iconos/reserva.svg'


export const MainAdmin = () => {
  return (
    <div className='mainAdmin'>
        <div className='barra-arriba'>
          <div className='barra1'></div>
          <div className='barra2'></div>
        </div>
        <div className='contenedor-contenedores' >
          <div className='barra2_2'>

          </div>
          <div className='barra2_3'>
            <div className='barra2_33' >

            </div>
            <div className='barra2_34' >
              <div className='CardAdmin'>
                <Imagenes clase='libro' url={libro} />
                <h1>Libros</h1>
              </div>
              <div className='CardAdmin'>
                <Imagenes clase='student' url={student} />
                <h1>Estudiantes</h1>
              </div>
              <div className='CardAdmin'>
                <Imagenes clase='multas' url={multas} />
                <h1>Multas</h1>
              </div>
              <div className='CardAdmin'>
                <Imagenes clase='reserva' url={reserva} />
                <h1>Reservas</h1>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
