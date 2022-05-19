import React, {useState, useEffect} from 'react';
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import { NavLink } from 'react-router-dom'
import { actionTypes } from '../../../reducer';
import { useStateValue } from '../../../StateProvider'
import '../../../slick.css'
import { VentanaReserva } from '../../UI/VentanaReserva/VentanaReserva';
import { AbrirModal } from '../AbrirModal/AbrilModal';

//Product


export const Libros = ({libro}) => {


  //Funcion que guarda las propiedades del estado de los libros
  const {name , id, image } = libro;

  const [{reservas}, dispatch] = useStateValue();
  const {ventanaReserva} = AbrirModal()
  



  //Funcion para agregar libros a las reservas
  let idLibros
  const addLibros = () => {
    
    dispatch({
      type: actionTypes.ADD_TO_RESERVA,
      item: {
        id,
        name,
        image,
      }
    })
    ventanaReserva()
  }

  const addLibros2 = () =>{
    idLibros = id
    dispatch({
      type: actionTypes.DETALLES_LIBRO,
      id:idLibros
    })
    addLibros()
  }

  return (
    <>
        <div className="cardss">
          <div className="contenedor-libro">
            <div className="libro">
              <Imagenes url={libro.image} id="libro" />
            </div>
            <div className="btn-card">
              <div className="container_vacio">
              </div>
              <div className="container_botones">
                <button className='btn-agLibro' onClick={addLibros2}>
                  <i class="fa-solid fa-book-bookmark"></i>
                </button>
                <button className='icon-like'>
                  <i class="fa-solid fa-heart"></i>
                </button>
                <NavLink to={"/Libro/" + libro.id}><button className='btn-verlibro'><i class="fa-solid fa-eye"></i></button></NavLink>
              </div>
            </div>
          </div>
          <div className="blanco">
            <h2>{libro.name}</h2>
            <p>{libro.gender}</p>
          </div>
        </div>
    </>
  )
}