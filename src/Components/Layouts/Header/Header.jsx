import React from 'react'
import logo from '../../../assets/Imagenes/Booker1.png'
import avatar from '../../../assets/Imagenes/photo.jpeg'
import banner from '../../../assets/Imagenes/Header-Banner.jpg'

export const Header = () => {
  return (
  <div>
    <div id='container-banner'>
      <img src= {banner} alt="" id='banner'/>
    </div>
    <div className='header'>
      <div id="container-img">
        <img src= {logo} alt="" />
      </div>
      <div id="rutas">
        <a href="">HOME</a>
        <a href="">CATEGORIAS</a>
        <a href="">HISTORIAL</a>
      </div>
      <div id="perfil">
        <img src= { avatar } alt="" id='img-perfil'/>
      </div>
    </div>
    <div id="busqueda">
      <p id='poema'>"La mariposa recordara siempre que fue gusano"</p>
      <input type="text" placeholder='BUSCAR' id='barra-busqueda'/>
    </div>
  </div>
  )
}
