import React from 'react'
import { Imagenes } from '../Imagenes/Imagenes'
import logo from '../../../assets/Imagenes/logos/bookerLetrasNegras.png'
import avatar from '../../../assets/Imagenes/iconos/avata.png'
import { NavLink } from 'react-router-dom'




export const Navegacion = () => {
  return (
    <div className="nav">
      <NavLink to='/Home'><Imagenes url={logo} id="logo"/></NavLink>
      <div className="nav-a">
      <NavLink to='/Home'><a href="#" id="home">Home</a></NavLink>
      </div>
      <NavLink to='/Perfil'><Imagenes url={avatar} id="avatar"/></NavLink>
    </div>
  )
}
