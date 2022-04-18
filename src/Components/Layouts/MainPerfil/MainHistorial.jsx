import React from 'react'
import { useStateValue } from '../../../StateProvider';
import { BotonesPerfil } from '../../UI/BotonesPerfil/BotonesPerfil';
import { Checkoud } from '../../UI/Checkoud/Checkoud';


//CheckoutPage

export const MainHistorial = () => {
    
    const [{reservas}, dispatch] = useStateValue();

  return (
    <div className='contenedor-perfil'>
        <BotonesPerfil/>
        <div className="datos-perfil">
            <h2 id='Tu-cuenta'>Tus Reservas</h2>
            <div className="p-hr">
                {reservas.length === 0 ? (<h3>No tienes reservas por ahora...</h3>) : 
                (reservas.map((libro => <Checkoud key={libro.id} libro={libro}/>)))} 
            </div>
        </div>
    </div>
  )
}
