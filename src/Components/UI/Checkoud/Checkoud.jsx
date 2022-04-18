import React from 'react'
import { Imagenes } from '../Imagenes/Imagenes';
import { actionTypes } from '../../../reducer';
import { useStateValue } from '../../../StateProvider';
import { GiConfirmed } from 'react-icons/gi'
import { AiFillDelete } from 'react-icons/ai'
//Product


export const Checkoud = ({libro}) => {



  //Funcion que guarda las propiedades del estado de los libros
  const {nombre , id, imagen , Autor, isbn} = libro;


  const [{reservas}, dispatch] = useStateValue();

  const borrarLibro = () => dispatch({
      type: actionTypes.BORRAR_LIBRO,
      id: id,
  })





  return (
      <div className='container-reservas'>
          <Imagenes url={imagen} id="libro"/>
            <div className="container-info-reserva">
                <p className='nombre-libro'>{nombre}</p>
                <p>Autor: {Autor}</p>
                <p>ISBN: {isbn}</p>
                <GiConfirmed className='icon-reserva'/>
                <AiFillDelete className='icon-reserva' onClick={borrarLibro}>Eliminar</AiFillDelete>
            </div>
      </div>
  )
}

