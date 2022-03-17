import React from 'react'
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import logo from '../../../assets/Imagenes/BookerSinNombre.png'

export const MainLogin = () => {
  return (
    <div className="MainLogin">
      <div className="contenedorImgLogin">
        <div className='contenedorLoginInfo'>
          <div className='info' >
            <div className='logoImg'>
              <Imagenes url={logo} clase={'LoginLogo'} />  
            </div>
            <div>
            <h1>¡LA RESERVA DE TUS LIBROS A EL ALCANSE DE TUS MANOS!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores beatae necessitatibus, repellendus odio modi iusto, repellendus odio modi iusto.</p>
            </div>
          </div>
        </div>
      </div>      
      <div className="contenedorLogin">
        <div className='center' >
          <h1>¡INGRESO!</h1>
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
          <input type="submit" value="Ingresar"/>
          <div className="signup_link">
          </div>
          </form>
        </div>
      </div>
    </div>

  )
}
