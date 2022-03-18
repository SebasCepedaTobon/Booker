import React from 'react'
import { Imagenes } from '../Imagenes/Imagenes'
import logo from '../../../assets/Imagenes/BookerNegro.svg'
import avatar from '../../../assets/Imagenes/avata.png'




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
