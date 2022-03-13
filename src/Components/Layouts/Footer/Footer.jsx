import React from 'react'
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import facebook from '../../../assets/Imagenes/facebook.png'
import instagram from '../../../assets/Imagenes/whatsapp.png'
import email from '../../../assets/Imagenes/gmail.png'
import logo from '../../../assets/Imagenes/Booker1.png'


export const Footer = () => {
  return (
    <div className='footer'>
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
  )
}
