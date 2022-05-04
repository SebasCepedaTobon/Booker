import React from 'react'
import { Imagenes } from '../Imagenes/Imagenes'
import logo from '../../../assets/Imagenes/logos/Booker1.png'

import { NavLink } from 'react-router-dom'



import { useStateValue } from '../../../StateProvider'

export const Navegacion = () => {

  const [{reservas}, dispatch] = useStateValue();

  return (
    <div className="nav">
      <NavLink to='/Home'><Imagenes url={logo} id="logo"/></NavLink>
      <div className="nav-a">
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
      <NavLink to='/Perfil'><div className="container-avatar"><i class="fa-solid fa-user"></i></div></NavLink>
      </div>
    </div>
  )
}
