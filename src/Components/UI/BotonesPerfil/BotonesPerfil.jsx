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
                  <NavLink to='/Perfil'><button data-text="Awesome" class="button">
                      <span class="actual-text">&nbsp;Cuenta&nbsp;</span>
                      <span class="hover-text" aria-hidden="true">&nbsp;Cuenta&nbsp;</span>
                  </button></NavLink>
              </div>
              <hr />
              <div className="icon-btn">
                  {/* <ImBooks /> */}
                  <NavLink to='/Historial'><button data-text="Awesome" class="button">
                      <span class="actual-text">&nbsp;Reservas&nbsp;</span>
                      <span class="hover-text" aria-hidden="true">&nbsp;Reservas&nbsp;</span>
                  </button></NavLink>
              </div>
              <hr />
              <div className="icon-btn">
                  {/* <RiFileDamageFill /> */}
                  <NavLink to='/Infracciones'><button data-text="Awesome" class="button">
                      <span class="actual-text">&nbsp;Infracciones&nbsp;</span>
                      <span class="hover-text" aria-hidden="true">&nbsp;Infracciones&nbsp;</span>
                  </button></NavLink>
              </div>
              <hr />
              <div className="icon-btn">
                  {/* <FaPowerOff /> */}
                  <NavLink to='/'><button data-text="Awesome" class="button">
                      <span class="actual-text">&nbsp;Salir&nbsp;</span>
                      <span class="hover-text" aria-hidden="true">&nbsp;Salir&nbsp;</span>
                  </button></NavLink>
              </div>
          </div>
      </div>
    
  )
}
