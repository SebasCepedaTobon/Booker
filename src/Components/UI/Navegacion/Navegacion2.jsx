import React from 'react'
import { Imagenes } from '../Imagenes/Imagenes'
import logo from '../../../assets/Imagenes/logos/bookerLetrasNegras.png'
import avatar from '../../../assets/Imagenes/iconos/avata.png'
import { NavLink } from 'react-router-dom'

// import { FaHome } from 'react-icons/fa'
// import { RiAdminFill } from 'react-icons/ri'
// import { ImBooks } from 'react-icons/im'

import { useStateValue } from '../../../StateProvider'




export const Navegacion2 = () => {

  const [{reservas}, dispatch] = useStateValue();

  return (
    <div className="nav2">
      <NavLink to='/Home'><Imagenes url={logo} id="logo"/></NavLink>
      <div className="contador">
        <p>{reservas?.length}</p>
      </div>
      <div className="nav-a">
      <NavLink to='/Historial'>
        {/* <ImBooks className='icon-nav2'/> */}
      </NavLink>
      {/* <FaHome className='icon-nav2'/> */}
      <NavLink to='/Home'><a href="#" id="home">Home</a></NavLink>
      {/* <RiAdminFill className='icon-nav2'/> */}
      <NavLink to='/Admin'><a href="#" id="admin">Admin</a></NavLink>
      </div>
      <NavLink to='/Perfil'><Imagenes url={avatar} id="avatar"/></NavLink>
    </div>
  )
}