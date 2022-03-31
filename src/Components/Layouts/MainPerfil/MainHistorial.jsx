import React from 'react'
import { NavLink } from 'react-router-dom'
import avatar from '../../../assets/Imagenes/iconos/avata.png'
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import { FaAddressCard } from 'react-icons/fa';

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
                    <FaAddressCard/>
                    <NavLink to='/Perfil'><a href="#" id="perfil">Cuenta</a></NavLink>
                </div>
                <hr />
                <div className="icon-btn">
                    <NavLink to='/Historial'><a href="#" id="Historial">Historial</a></NavLink>
                </div>
                <hr />
                <div className="icon-btn">
                    <NavLink to='/Infracciones'><a href="#" id="cuenta">Infracciones</a></NavLink>
                </div>
                <hr />
                <div className="icon-btn">
                    <NavLink to='/'><a href="#" id="Cerrar">Cerrar sesión</a></NavLink>
                </div>
            </div>
        </div>
        <h2 id='Tu-cuenta'>Tu Historial</h2>
        
    </div>
  )
}
