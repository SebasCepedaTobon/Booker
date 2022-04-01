import React from 'react'
import { NavLink } from 'react-router-dom'
import avatar from '../../../assets/Imagenes/iconos/avata.png'
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import { FaUserAlt, FaPowerOff } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';
import { RiFileDamageFill } from 'react-icons/ri';


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
                <div className="icon-btn">
                    <FaUserAlt/>
                    <NavLink to='/Perfil'><a href="#" id="perfil">Cuenta</a></NavLink>
                </div>
                <hr />
                <div className="icon-btn">
                    <ImBooks/>
                    <NavLink to='/Historial'><a href="#" id="Historial">Reservas</a></NavLink>
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
        <div className="datos-perfil">
            <h2 id='Tu-cuenta'>Tu cuenta</h2>
            <div className="p-hr">
                <p>Información Personal</p>
                <hr />
            </div>
            <div className="container-inputs">
                <div className="container-info">
                    <p>Correo Electronico</p>
                    <input type="email" id='email' placeholder='santicortesrincon15@gmail.com'/>
                </div>
                <div className="container-info">
                    <p>Fecha Nacimiento</p>
                    <input type="date" id='Fecha' />
                </div>
                <div className="container-info">
                    <p>Nombres</p>
                    <input type="text" id='Nombres' placeholder='Santiago'/>
                </div>
                <div className="container-info">
                    <p>Apellidos</p>
                    <input type="text" id='Apellidos' placeholder='Rincon Cortes'/>
                </div>
                <div className="container-info">  
                    <p>Documento</p>
                    <input type="number" placeholder='1090054930'/>
                </div>
                <div className="container-info">
                    <p>Telefono - Celular</p>
                    <input type="number" placeholder='32120942396'/>
                </div>
            </div>
            <div className="p-hr">
                <p>Contraseña</p>
                <hr />
            </div>
            <div className="container-inputs">
                <div className="container-info">
                    <p>Nueva Contraseña</p>
                    <input type="password" id='contraseña' placeholder='*************************'/>
                </div>
                <div className="container-info">
                    <p>Repetir Nueva Contraseña</p>
                    <input type="password" id='repetir.contraseña' placeholder='*************************'/>
                </div>
            </div>
            <div className="btnGuardar">
                <button className='btn-guardar'>Guardar</button>
            </div>
        </div>
    </div>
  )
}
