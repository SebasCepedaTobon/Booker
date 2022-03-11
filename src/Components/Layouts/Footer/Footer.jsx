import React from 'react'
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import facebook from '../../../assets/Imagenes/facebook.svg'
import instagram from '../../../assets/Imagenes/instagram.svg'
import email from '../../../assets/Imagenes/email.svg'
import logo from '../../../assets/Imagenes/Booker1.png'


export const Footer = () => {
  return (
    <div className='footer' >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#000000" fill-opacity="1" d="M0,160L0,64L360,64L360,192L720,192L720,192L1080,192L1080,64L1440,64L1440,320L1080,320L1080,320L720,320L720,320L360,320L360,320L0,320L0,320Z"></path>
      </svg>
      
      <div className="contenedor-elementos">
        <div className='contenedor-redes' >
          <Imagenes url={facebook} clase='facebook' />
          <Imagenes url={email} clase='email' />
          <Imagenes url={instagram} clase='intagram' />
        </div>
        <div className='contenedor-info' >
          <div className="contenedor-info1">
            <h1>InformaciónBooker</h1>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor</p>
            <p>Possimus beatae facilis quaerat.</p></div>
          <div className="contenedor-info1">
            <h1>InformaciónColegio</h1>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor</p>
            <p>Possimus beatae facilis quaerat.</p>
          </div>
        </div>
        <div className="contenedor-pie">
          <div className='contenedor-logo-footer'>
          <Imagenes url={logo} clase='logo-footer' />
          </div>
          <p>&copy;2022 Booker Todos los derechos reservados</p>
        </div>
      </div>
    </div>
  )
}
