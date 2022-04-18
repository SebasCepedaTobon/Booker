import React from 'react'
import { NavLink } from 'react-router-dom'
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import logo from '../../../assets/Imagenes/logos/BookerSinNombre.png'
import whatsapp from '../../../assets/Imagenes/iconos/phone.svg'
import email from '../../../assets/Imagenes/iconos/mail.svg'

export const MainLogin = () => {
  return (
    <div className="Main-Login-Gmail">
      <div className="box-Informacion">        
        <div className='box-info'>
          <div className="LG-Info">
            <div className='LG-info' >
              <div className='LG-logo'>
                <Imagenes url={logo} clase={'logo'} />  
              </div>
              <div className='LG-Textos'>
                <h1>¡LA RESERVA DE TUS LIBROS A EL ALCANSE DE TUS MANOS!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores beatae necessitatibus, repellendus odio modi iusto, repellendus odio modi iusto.</p>
              </div>
            </div>
            <div className="LG-Contactos">
              <NavLink to='/Email'><Imagenes url={email} clase='Login-Email' /></NavLink>
              <a href="https://wa.me/+573002536217" target={'_blank'} ><Imagenes url={whatsapp} clase='whatsapp'/></a>
            </div>
          </div>
        </div>
      </div>

      <div className="LG-boxFrom">
        <div className="LG-box-From" >
          <div className='LG-contenedor-From' >
            <h1>¡INICIAR SESIÓN!</h1>
            <form method="post">
              <div className='box-input'>
                <input type="text" required/>
                <span></span>
                <label>N° Documento</label>
              </div>
              <div className="box-input">
                <input type="password" required/>
                <span></span>
                <label>Contraseña</label>
              </div>
              <div className="pass">¿Has olvidado tu contraseña?</div>
              <NavLink to='/home' >
                <input type="submit" value="Ingresar"/>
              </NavLink>          
            </form>
          </div>
        </div>        
      </div>
    </div>
  )
}
