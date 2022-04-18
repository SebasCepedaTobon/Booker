import React from 'react'
import { NavLink } from 'react-router-dom'

import { Imagenes } from '../Imagenes/Imagenes'
import { FaUserGraduate, FaHouseUser } from 'react-icons/fa';
import { SiWebmoney } from 'react-icons/si';
import { BsCalendarCheck, BsFillJournalBookmarkFill } from 'react-icons/bs';
import { MdLocalPolice } from 'react-icons/md';
import perfil from '../../../assets/Imagenes/perfil.jpg'
import cerrarAdmin from '../../../assets/Imagenes/iconos/cerrarAdmin.svg'
import gestionAdmin from '../../../assets/Imagenes/iconos/gestionAdmin.svg'


export const AdminNavegador = () => {
  return (    
    <div className='Admin-Navegador'>
      <div className="box-Titulo">
        Sitio Administrativo
      </div>
      <div className='box-Perfil' >
        <div className='Ico-Perfil' >
          <Imagenes url={perfil} clase='icono-perfil'/>
        </div>        
      </div>

      <div className='Menu-Padre'>
        <div className='box-menu' >
          <div className='box-vinculos'>
            <FaHouseUser/>
            <NavLink to='/Admin' className='vinculo'>              
              <p>Admin</p>
            </NavLink>
          </div>
          <div className='box-vinculos'>
            <BsFillJournalBookmarkFill/>
            <NavLink to='/TLibros' className='vinculo'>              
              <p>Libros</p>
            </NavLink>
          </div>
          <div className='box-vinculos'>
            <FaUserGraduate/>
            <NavLink to='/TEstudiantes' className='vinculo'>              
              <p>Estudiantes</p>
            </NavLink>
          </div>
          <div className='box-vinculos'>
            <SiWebmoney />
            <NavLink to='/Multas' className='vinculo'>              
              <p>Multas</p>
            </NavLink>
          </div>
          <div className='box-vinculos'>
            <BsCalendarCheck/>
            <NavLink to='/Reservas' className='vinculo'>              
              <p>Reservas</p>
            </NavLink>
          </div>
          <div className='box-vinculos'>
            <MdLocalPolice />
            <NavLink to='/home' className='vinculo'>              
              <p>Infracciones</p>
            </NavLink>
          </div>
          <div className='box-vinculos' >
            <Imagenes url={gestionAdmin} />
            <NavLink to='/home' className='vinculo'>              
              <p>Gestión De Cuenta</p>
            </NavLink>
          </div>                
          <div className='box-vinculos' >
            <Imagenes url={cerrarAdmin} />
            <NavLink to='/' className='vinculo'>              
              <p>Cerar Sesión</p>
            </NavLink>
          </div>
        </div>              
      </div>
    </div>
  )
}
