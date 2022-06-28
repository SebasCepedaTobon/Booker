import React from 'react'
import { NavLink } from 'react-router-dom'
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import facebook from '../../../assets/Imagenes/footer/facebook.png'
import whatsapp from '../../../assets/Imagenes/footer/whatsapp.png'
import email from '../../../assets/Imagenes/footer/gmail.png'
import logo from '../../../assets/Imagenes/logos/Booker1.png'


export const Footer = () => {
  return (
    <div className='footer'>
      {/* <div className="footer-extremos">
        <div className="footer-info">
        
        <p>Lorem ipsum dolor</p>
        <p>Lorem ipsum dolor sit amet</p>
        <p>Lorem ipsum dolor</p>
        <p>Possimus beatae facilis quaerat.</p>
        </div>
      </div> */}
      <div className="footer-centro">
        <div className="box-footer-Padre">

        <div className="box-logo">
            <div className='contenedor-logo'>
              <Imagenes url={logo} clase='logo-footer' />
            </div>
          </div>
          <div className='redes' >
            <a href="https://web.facebook.com/Booker-110199055074179" target={'_blank'}><Imagenes url={facebook} clase='facebook'/></a>
            <NavLink to='/Email' ><Imagenes url={email} clase='email' /></NavLink>
            <a href="https://wa.me/+573002536217" target={'_blank'} ><Imagenes url={whatsapp} clase='whatsapp'/></a>
          </div>
          
        </div>        
        <div className='footer-derechos' >
          <p>&copy;2022 Booker Todos los derechos reservados</p>
        </div>
      </div>
     {/*  <div className="footer-extremos">
        <div className="footer-info">
          
          <p>Lorem ipsum dolor</p>
          <p>Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum dolor</p>
          <p>Possimus beatae facilis quaerat.</p>
        </div>
      </div>   */}      
    </div>
  )
}
