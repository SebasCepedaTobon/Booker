import React from 'react'
import { BotonesPerfil } from '../../UI/BotonesPerfil/BotonesPerfil'


export const MainPerfil = () => {
  return (
    <div className='contenedor-perfil'>
        <BotonesPerfil/>
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
