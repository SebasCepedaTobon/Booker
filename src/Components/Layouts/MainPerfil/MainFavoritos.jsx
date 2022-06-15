import React from 'react'
import { BotonesPerfil } from '../../UI/BotonesPerfil/BotonesPerfil'
import { Navegacion3 } from '../../UI/Navegacion/Navegacion3'


export const MainFavoritos = () => {
  return (
    <div className='contenedor-perfil'>
        <Navegacion3/>
        <BotonesPerfil/>
        <div className="datos-perfil">
            <h2 id='Tu-cuenta'>Tus Favoritos</h2>
          
        </div>
    </div>
  )
}
