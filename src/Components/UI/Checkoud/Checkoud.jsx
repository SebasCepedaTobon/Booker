import React from 'react'
import { Imagenes } from '../Imagenes/Imagenes';
import { actionTypes } from '../../../reducer';
import { useStateValue } from '../../../StateProvider';

// import { GiConfirmed } from 'react-icons/gi'
// import { AiFillDelete } from 'react-icons/ai'
//Product


export const Checkoud = ({libro}) => {



  //Funcion que guarda las propiedades del estado de los libros
  const {name , id, image } = libro;


  const [{reservas}, dispatch] = useStateValue();

  const borrarLibro = () => dispatch({
      type: actionTypes.BORRAR_LIBRO,
      id: id,
  })





  return (
      <div className='container-reservas'>
          <Imagenes url={image} id="libro"/>
            <div className="container-info-reserva">
                <p className='nombre-libro'>{name}</p>
                {/* <GiConfirmed className='icon-reserva'*/}
                <button onClick={borrarLibro}>borrar</button>
            </div>
      </div>
  )
}

