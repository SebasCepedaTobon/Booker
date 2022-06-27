import React from 'react'
import { BotonesPerfil } from '../../UI/BotonesPerfil/BotonesPerfil'
import { Navegacion3 } from '../../UI/Navegacion/Navegacion3'
import { Imagenes } from '../../UI/Imagenes/Imagenes';
import Noinfracciones from '../../../assets/Imagenes/infracciones.png';

export const MainInfracciones = () => {
  return (
    <div className='contenedor-perfil'>
        <Navegacion3/>
        <BotonesPerfil/>
        <div className="datos-perfil3">
            <h2 id='Tu-cuenta'>Tus Infracciones</h2>
            <div className="p-hr">
                <h3>No tienes infracciones por ahora...</h3>
                <Imagenes url={Noinfracciones}/>

            </div>
        </div>
    </div>
  )
}