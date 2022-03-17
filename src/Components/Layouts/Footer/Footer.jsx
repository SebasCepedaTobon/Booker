import React from 'react'
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import facebook from '../../../assets/Imagenes/facebook.png'
import whatsapp from '../../../assets/Imagenes/whatsapp.png'
import email from '../../../assets/Imagenes/gmail.png'
import logo from '../../../assets/Imagenes/Booker1.png'


export const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-lados">
        <div className="footer-info">
        <h1>InformaciónBooker</h1>
        <p>Lorem ipsum dolor</p>
        <p>Lorem ipsum dolor sit amet</p>
        <p>Lorem ipsum dolor</p>
        <p>Possimus beatae facilis quaerat.</p>
        </div>
      </div>
      <div className="footer2">
        <div className='contenedor-redes' >
          <a href="#"><Imagenes url={facebook} clase='facebook'/></a>
          <a href="#"><Imagenes url={email} clase='email' /></a>
          <a target={'_parent'} href="https://wa.me/+573002536217"><Imagenes url={whatsapp} clase='intagram' /></a>
        </div>
        <div className="contenedor-logo">
          <div className='contenedor-logo-footer'>
            <Imagenes url={logo} clase='logo-footer' />
          </div>         
        </div>
        <div className='footer-reservados' >
          <p>&copy;2022 Booker Todos los derechos reservados</p>
        </div>
      </div>
      <div className="footer-lados">
        <div className="footer-info">
          <h1>InformaciónColegio</h1>
          <p>Lorem ipsum dolor</p>
          <p>Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum dolor</p>
          <p>Possimus beatae facilis quaerat.</p>
        </div>
      </div>        
    </div>
  )
}
