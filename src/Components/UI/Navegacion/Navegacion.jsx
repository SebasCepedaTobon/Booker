import React from 'react'
import { Imagenes } from '../Imagenes/Imagenes'
import logo from '../../../assets/Imagenes/logos/bookerLetrasNegras.png'
import avatar from '../../../assets/Imagenes/iconos/avata.png'




export const Navegacion = () => {
  return (
    <div className="nav">
      <Imagenes url={logo} id="logo"/>
      <div className="nav-a">
        <a href="#" id="home">Home</a>
      </div>
      <Imagenes url={avatar} id="avatar"/>
    </div>
  )
}
