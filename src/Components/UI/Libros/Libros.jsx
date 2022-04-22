import React, {useState, useEffect} from 'react';
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import { NavLink } from 'react-router-dom'
import { Botonmas2 } from '../Botones/Botonmas2'
import { actionTypes } from '../../../reducer';
import { useStateValue } from '../../../StateProvider'
import { VentanaAgregado } from '../VentanaAgregado/VentanaAgregado';

//Product


export const Libros = ({libro}) => {

  //Funcion que guarda las propiedades del estado de los libros
  const {nombre , id, imagen, Autor, isbn} = libro;

  const [{reservas}, dispatch] = useStateValue();



  //Funcion para agregar libros a las reservas
  const addLibros = () => {
    dispatch({
      type: actionTypes.ADD_TO_RESERVA,
      item: {
        id,
        nombre,
        imagen,
        Autor,
        isbn,
      }
    })
  }


  return (
      <div className="cardss">
        <div className="contenedor-libro">
          <div className="libro">
            <Imagenes url={imagen} id="libro"/>
            </div>
            <div className="btn-card">
              <div className="container_vacio">
              </div>
              <div className="container_botones">
                <NavLink to='/Libro'><Botonmas2/></NavLink>
              <button className='btn-vermas2' onClick={addLibros}>
                <VentanaAgregado/>
              </button>
                </div>
              </div>
          </div>
          <div className="blanco">
        </div>
      </div>
  )
}
