import React from 'react'
import { Imagenes } from '../Imagenes/Imagenes';
import { actionTypes } from '../../../reducer';
import { useStateValue } from '../../../StateProvider';

// import { GiConfirmed } from 'react-icons/gi'
// import { AiFillDelete } from 'react-icons/ai'
//Product


export const Checkoud = ({libro}) => {



  //Funcion que guarda las propiedades del estado de los libros
  const {nombre , id_libro, imagen_libro } = libro;


  const [{reservas}, dispatch] = useStateValue();

  const borrarLibro = () => dispatch({
      type: actionTypes.BORRAR_LIBRO,
      id_libro:id_libro,
      
  })





  return (
    <>
      <div className="cards-reservas">
        <div className="contenedor-reservas">
          <div className="libro-reserva">
            <Imagenes url={libro.imagen_libro} id="libro" />
          </div>
          <div className="btn-reservas">
            <div className="container_vacio">
            </div>
            <div className="container_botones2">
              <button onClick={borrarLibro} lass="noselect"><span class="text">Borrar</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span>
              </button>
            </div>
          </div>
        </div>
        <div className="blanco2">
          <h2>{libro.nombre}</h2>
        </div>
      </div>
      
  </>

            
  )
}

