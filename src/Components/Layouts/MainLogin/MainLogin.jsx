import React from 'react'

export const MainLogin = () => {
  return (
    <div className="center">
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

  )
}
