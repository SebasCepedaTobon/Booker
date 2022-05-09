import React from 'react'
import { Imagenes } from '../Imagenes/Imagenes'
import logo from '../../../assets/Imagenes/logos/bookerLetrasNegras.png'

import { NavLink } from 'react-router-dom'

// import { FaHome } from 'react-icons/fa'
// import { RiAdminFill } from 'react-icons/ri'
// import { ImBooks } from 'react-icons/im'

import { useStateValue } from '../../../StateProvider'




export const Navegacion2 = () => {

  const [{reservas}, dispatch] = useStateValue();

  return (
    <div className="nav2">
      <NavLink to='/Home'><Imagenes url={logo} id="logo" /></NavLink>
      <div className="nav-a2">
        <NavLink to='/Historial'>
          <div className="contador">
            <p>{reservas?.length}</p>
          </div>
          <i class="fa-solid fa-bookmark" id='icon-contador'></i>
        </NavLink>
        <NavLink to='/Home' className='nav-icon'>
          <i class="fa-solid fa-house"></i>Home
        </NavLink>
        <NavLink to='/Admin' className='nav-icon'>
          <i class="fa-solid fa-user-pen"></i>Admin
        </NavLink>
      </div>
      <NavLink to='/Perfil'></NavLink>
    </div>
  )
}