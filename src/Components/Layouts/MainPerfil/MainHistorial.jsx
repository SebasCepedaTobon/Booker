import React from 'react'
import { NavLink } from 'react-router-dom'
import avatar from '../../../assets/Imagenes/iconos/avata.png'
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import { FaUserAlt, FaPowerOff } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';
import { RiFileDamageFill } from 'react-icons/ri';

export const MainHistorial = () => {
  return (
    <div className='contenedor-perfil'>
        <div className="botones-perfil">
            <div className="img-nombre">
                <Imagenes url={avatar} id="avatar-perfil"/>
                <div className="usu">
                    <h2>@Usuario</h2>
                    <p id='Bienvenido'>Bienvenido a tu cuenta</p>
                </div>
            </div>
            <div className="btns">
                <div className="icon-btn">
                    <FaUserAlt/>
                    <NavLink to='/Perfil'><a href="#" id="perfil">Cuenta</a></NavLink>
                </div>
                <hr />
                <div className="icon-btn">
                    <ImBooks/>
                    <NavLink to='/Historial'><a href="#" id="Historial">Historial</a></NavLink>
                </div>
                <hr />
                <div className="icon-btn">
                    <RiFileDamageFill/>
                    <NavLink to='/Infracciones'><a href="#" id="cuenta">Infracciones</a></NavLink>
                </div>
                <hr />
                <div className="icon-btn">
                    <FaPowerOff/>
                    <NavLink to='/'><a href="#" id="Cerrar">Cerrar sesión</a></NavLink>
                </div>
            </div>
        </div>
        <h2 id='Tu-cuenta'>Tu Historial</h2>
        
    </div>
  )
}
