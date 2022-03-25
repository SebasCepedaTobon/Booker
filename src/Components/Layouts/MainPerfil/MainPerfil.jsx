import React from 'react'
import { NavLink } from 'react-router-dom'
import avatar from '../../../assets/Imagenes/iconos/avata.png'
import { Imagenes } from '../../UI/Imagenes/Imagenes'

export const MainPerfil = () => {
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
        <div className="datos-perfil">
            <h2 id='Tu-cuenta'>Tu cuenta</h2>
            <div className="p-hr">
                <p>Información Personal</p>
                <hr />
            </div>
            <div className="container-inputs">
                <div className="container-info">
                    <p>Correo Electronico</p>
                    <input type="email" id='email'/>
                </div>
                <div className="container-info">
                    <p>Fecha Nacimiento</p>
                    <input type="date" id='Fecha'/>
                </div>
                <div className="container-info">
                    <p>Nombres</p>
                    <input type="text" id='Nombres'/>
                </div>
                <div className="container-info">
                    <p>Apellidos</p>
                    <input type="text" id='Apellidos'/>
                </div>
                <div className="container-info">  
                    <p>Documento</p>
                    <input type="number" />
                </div>
                <div className="container-info">
                    <p>Telefono - Celular</p>
                    <input type="number" />
                </div>
            </div>
            <div className="p-hr">
                <p>Contraseña</p>
                <hr />
            </div>
            <div className="container-inputs">
                <div className="container-info">
                    <p>Nueva Contraseña</p>
                    <input type="password" id='contraseña'/>
                </div>
                <div className="container-info">
                    <p>Repetir Nueva Contraseña</p>
                    <input type="password" id='repetir.contraseña'/>
                </div>
            </div>
        </div>
    </div>
  )
}
