import React from 'react'
import { NavLink } from 'react-router-dom'
import avatar from '../../../assets/Imagenes/iconos/avata.png'
import { Imagenes } from '../../UI/Imagenes/Imagenes'

export const MainInfracciones = () => {
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
                <NavLink to='/Perfil'><a href="#" id="perfil">Cuenta</a></NavLink>
                <hr />
                <NavLink to='/Historial'><a href="#" id="Historial">Historial</a></NavLink>
                <hr />
                <NavLink to='/Infracciones'><a href="#" id="cuenta">Infracciones</a></NavLink>
                <hr />
                <NavLink to='/'><a href="#" id="Cerrar">Cerrar sesión</a></NavLink>
            </div>
        </div>
        <h2 id='Tu-cuenta'>Tus Infracciones</h2>
    </div>
  )
}