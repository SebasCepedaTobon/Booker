import React from 'react'
import { NavLink } from 'react-router-dom'
import { Imagenes } from '../../UI/Imagenes/Imagenes'

import libro from '../../../assets/Imagenes/iconos/libro.svg'
import student from '../../../assets/Imagenes/iconos/user.svg'
import multas from '../../../assets/Imagenes/iconos/multas.svg'
import { RiHealthBookLine } from 'react-icons/ri';

import { AdminHeader } from '../../UI/NavegadorAdmin/AdminHeader'
import { AdminNavegador } from '../../UI/NavegadorAdmin/AdminNavegador'



export const MainAdmin = () => {
  return (
    <div className='MainAdministrativo'>
      <div className="box-AdminNavegador">
        <AdminNavegador/>
      </div>
      <div className='box-Header-Admin' >
        <AdminHeader/>
        <div className='box-carsd-Admin' >
          <NavLink className='card-Admin' to='/TLibros' >
            <button className='contenido'>
              <Imagenes clase='icono' url={libro}/>
              <h1>Libros</h1>
              <span></span>
            </button>
          </NavLink>
          <NavLink className='card-Admin' to='/TEstudiantes' >
            <button className='contenido'>
              <Imagenes clase='icono' url={student}/>
              <h1>Estudiantes</h1>
              <span></span>
            </button>
          </NavLink>
          <NavLink className='card-Admin' to='/Multas'>
            <button className='contenido'>
              <Imagenes clase='icono' url={multas}/>
              <h1>Multas</h1>
              <span></span>
            </button>
          </NavLink>
          <NavLink className='card-Admin' to='/Prestamo'>
            <button className='contenido'>
              <RiHealthBookLine/>
              <h1>Prestamo</h1>
              <span></span>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
