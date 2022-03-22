import React from 'react'
import { NavLink } from 'react-router-dom'
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import logo from '../../../assets/Imagenes/logos/BookerSinNombre.png'
import whatsapp from '../../../assets/Imagenes/iconos/phone.svg'
import email from '../../../assets/Imagenes/iconos/mail.svg'

export const MainLogin = () => {
  return (
    <div className="MainLogin">
      <div className="contenedorImgLogin">        
        <div className='contenedorLoginInfo'>
          <div className="divInfo">
          <div className='info' >
            <div className='logoImg'>
              <Imagenes url={logo} clase={'LoginLogo'} />  
            </div>
            <div className='divTextos'>
              <h1>¡LA RESERVA DE TUS LIBROS A EL ALCANSE DE TUS MANOS!</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores beatae necessitatibus, repellendus odio modi iusto, repellendus odio modi iusto.</p>
            </div>
          </div>
            <div className="footerLogin">
            <NavLink to='/Email'><Imagenes url={email} clase='email' /></NavLink>
              <a href="https://wa.me/+573002536217" target={'_blank'} ><Imagenes url={whatsapp} clase='whatsapp'/></a>
            </div>
        </div>
          </div>
      </div>      
      <div className="contenedorLogin">
        <div className='divlogoFrom' >
      
        </div>
        <div className="divFormulario" >
        <div className='center' >
          <h1>¡INICIAR SESIÓN!</h1>
          <form method="post">
          <div className="txt_field">
              <input type="text" required/>
              <span></span>
              <label>N° Documento</label>
          </div>
          <div className="txt_field">
              <input type="password" required/>
              <span></span>
              <label>Contraseña</label>
          </div>
          <div className="pass">¿Has olvidado tu contraseña?</div>
          <NavLink to='/home' ><input type="submit" value="Ingresar"/></NavLink>
          <div className="signup_link">
          </div>
          </form>
        </div>
        </div>        
      </div>
    </div>

  )
}
