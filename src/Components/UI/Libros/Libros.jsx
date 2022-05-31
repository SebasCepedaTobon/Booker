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
  const {nombre , id_libro, imagen_libro,  } = libro;

  const [{reservas}, dispatch] = useStateValue();
  const {ventanaReserva} = AbrirModal()
  



  //Funcion para agregar libros a las reservas
  let idLibros
  const addLibros = () => {
    
    dispatch({
      type: actionTypes.ADD_TO_RESERVA,
      item: {
        id_libro,
        nombre,
        imagen_libro,
      }
    })
    ventanaReserva()
  }

  const addLibros2 = () =>{
    idLibros = id_libro
    dispatch({
      type: actionTypes.DETALLES_LIBRO,
      id_libro:id_libro
    })
    addLibros()
  }

  return (
    <>
        <div className="cardss">
          <div className="contenedor-libro">
            <div className="libro">
              <Imagenes url={libro.imagen_libro} id="libro" />
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
                <NavLink to={"/Libro/" + libro.id_libro}><button className='btn-verlibro'><i class="fa-solid fa-eye"></i></button></NavLink>
              </div>
            </div>
          </div>
          <div className="blanco">
            <h2>{libro.nombre}</h2>
            {libro.autores.map(autor =>{
              return(
                <p>{autor.nombres} {autor.apellidos}</p>

              )
             
            })}
          </div>
        </div>
    </>
  )
}