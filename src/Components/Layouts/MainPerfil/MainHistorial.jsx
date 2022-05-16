import React from 'react'
import { useStateValue } from '../../../StateProvider';
import { BotonesPerfil } from '../../UI/BotonesPerfil/BotonesPerfil';
import { Checkoud } from '../../UI/Checkoud/Checkoud';
import { Imagenes } from '../../UI/Imagenes/Imagenes';
import Noreserva from '../../../assets/Imagenes/NoLibros.png'



export const MainHistorial = () => {
    
    const [{reservas}, dispatch] = useStateValue();

  return (
    <div className='contenedor-perfil'>
        <BotonesPerfil/>
        <div className="datos-perfil">
            <h2 id='Tu-cuenta'>Tus Reservas</h2>
            <div className="info-reservas">
                {reservas.length === 0 ? (<div className='no-reserva'>
                  <h3>No tienes reservas por ahora...</h3>
                  <Imagenes url={Noreserva}/>
                </div>) : 
                (reservas.map((libro => <Checkoud key={libro.id} libro={libro}/>)))} 
            </div>
        </div>
    </div>
  )
}
