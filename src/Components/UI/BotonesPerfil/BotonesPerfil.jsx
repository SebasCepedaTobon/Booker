import React from 'react'
import { NavLink } from 'react-router-dom'




export const BotonesPerfil = () => {
  return (
      <div className="botones-perfil">
          <div className="img-nombre">
            <i class="fa-solid fa-user"></i>
              <div className="usu">
                  <h2>@Usuario</h2>
                  <p id='Bienvenido'>Bienvenido a tu cuenta</p>
              </div>
          </div>
          <div className="btns">
              <div className="icon-btn">
                  {/* <FaUserAlt /> */}
                  <NavLink to='/Perfil'><a href="#" id="perfil">Cuenta</a></NavLink>
              </div>
              <hr />
              <div className="icon-btn">
                  {/* <ImBooks /> */}
                  <NavLink to='/Historial'><a href="#" id="Historial">Reservas</a></NavLink>
              </div>
              <hr />
              <div className="icon-btn">
                  {/* <RiFileDamageFill /> */}
                  <NavLink to='/Infracciones'><a href="#" id="cuenta">Infracciones</a></NavLink>
              </div>
              <hr />
              <div className="icon-btn">
                  {/* <FaPowerOff /> */}
                  <NavLink to='/'><a href="#" id="Cerrar">Cerrar sesión</a></NavLink>
              </div>
          </div>
      </div>
    
  )
}
