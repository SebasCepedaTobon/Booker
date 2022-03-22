import React from 'react'
import { NavLink } from 'react-router-dom'
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import logo from '../../../assets/Imagenes/logos/BookerSinNombre.png'
import home from '../../../assets/Imagenes/iconos/home.svg'

export const Gmail = () => {
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
              <h1>¡LA RESERVA DE TUS LIBROS A EL ALCANCE DE TUS MANOS!</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores beatae necessitatibus, repellendus odio modi iusto, repellendus odio modi iusto.</p>
            </div>
          </div>
            <div className="footerLogin">
                <NavLink to='/home'><Imagenes url={home} clase='homeGmail'/></NavLink>
            </div>
        </div>
          </div>
      </div>      
      <div className="contenedorGmail">
        <div className='divlogoFrom' >
      
        </div>
        <div className="divFormulario" >
        <div className='center' >
          <h1>¡CONTACTANOS!</h1>
          <form method="post">
          <div className="txt_field">
              <input type="text" required/>
              <span></span>
              <label>Dirección de correo</label>
          </div>
          <div className="txt_fieldGmail">
              <textarea placeholder='Mensaje' name="" id=""></textarea>
              <span></span>
              <label htmlFor=""></label>
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
