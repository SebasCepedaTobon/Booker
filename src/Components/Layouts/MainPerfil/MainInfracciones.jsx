import React from 'react'
import { BotonesPerfil } from '../../UI/BotonesPerfil/BotonesPerfil'

export const MainInfracciones = () => {
  return (
    <div className='contenedor-perfil'>
        <BotonesPerfil/>
        <div className="datos-perfil">
            <h2 id='Tu-cuenta'>Tus Infracciones</h2>
            <div className="p-hr">
                <p>No tienes infracciones por ahora...</p>
            </div>
        </div>
    </div>
  )
}