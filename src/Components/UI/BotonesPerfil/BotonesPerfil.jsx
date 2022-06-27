import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import { Logout } from '../../../Logout'





export const BotonesPerfil = () => {



    

  return (
    <>

    <div className="botones-perfil">
            <div className='conatiner-btn-perfil'>
              <NavLink to='/Perfil' >
                <div className='btn-perfil'>
                  <i class="fa-solid fa-book"></i>
                  <p>Mis Datos</p>
                  <span></span>
                </div>
              </NavLink>
              <NavLink to='/Historial'>
                <div className='btn-perfil'>
                  <i class="fa-solid fa-calendar-check"></i>
                  <p>Reservas</p>
                  <span></span>
                </div>
              </NavLink>
              <NavLink to='/Reservados'>
                <div className='btn-perfil'>
                  <i class="fa-solid fa-file-circle-plus"></i>
                  <p>Reservados</p>
                  <span></span>
                </div>
              </NavLink>
              <NavLink to='/Prestados'>
                <div className='btn-perfil'>
                  <i class="fa-solid fa-calendar-check"></i>
                  <p>Prestados</p>
                  <span></span>
                </div>
              </NavLink>
              <NavLink to='/Infracciones'>
                <div className='btn-perfil'>
                  <i class="fa-solid fa-bullhorn"></i>
                  <p>Infracciones</p>
                </div>
              </NavLink>
              <NavLink to='/Favoritos'>
                <div className='btn-perfil'>
                  <i class="fa-solid fa-heart"></i>
                  <p>Favoritos</p>
                </div>
              </NavLink>
              <NavLink to='/' onClick={Logout}>
                <div className='btn-perfil' >
                  <i class="fa-solid fa-chalkboard-user"></i>
                  <p>Cerrar Sesion</p>
                </div>
              </NavLink>

            </div>
      </div>
    </>
      
    
  )
}
