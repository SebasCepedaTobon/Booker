import React, {useState, useEffect} from 'react';
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import { NavLink } from 'react-router-dom'
import { Botonmas2 } from '../Botones/Botonmas2'
import { actionTypes } from '../../../reducer';
import { useStateValue } from '../../../StateProvider'
import { GiBookshelf } from 'react-icons/gi';
import { TiDelete } from 'react-icons/ti';

//Product


export const Libros = ({libro, libros}) => {

  //Funcion que guarda las propiedades del estado de los libros
  const {nombre , id, imagen, Autor, isbn} = libro;

  const [{reservas}, dispatch] = useStateValue();
  console.log(reservas)


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

    FormFlotante()
  }

  const [cerrar, setCounter] = useState(true)
  const FormFlotante  = () => {setCounter(!cerrar)}

useEffect(() => {
  const overlay = document.getElementById('overlay2')
  const from_tablas = document.querySelector('.from-tablas2')

  if(cerrar === true){
    overlay.style.visibility = "hidden"
    from_tablas.style.transform="scale(0.6)"
    from_tablas.style.opacity="0"
  }else{
    overlay.style.visibility = "visible"
    from_tablas.style.transform="scale(1)"
    from_tablas.style.opacity="2"
  }

  },[cerrar]);


  return (
    <div>
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
                  <div class="svg-wrapper-1">
                    <div class="svg-wrapper">
                      <GiBookshelf className='icon-reservar' />
                    </div>
                  </div>
                  <span>Reservar</span>
                </button>
                </div>
              </div>
          </div>
          <div className="blanco">
        </div>
      </div>
      <div id='overlay2' className='overlay2'>
        <div className="from-tablas2">
          <div className='RM-from'>
          <div className="from-Titulo">
              <div className="Desactivar-From">
                  <TiDelete onClick={FormFlotante} className='icono'/>
              </div>
                <h2>Nueva reserva</h2>
              <p>Tienes {reservas?.length} reservas </p>
              <div className='container-reservas'>
                {(reservas.map((libros => 
                  <Imagenes key={libros.id} url={libros.imagen} id="libro"/>
                )))} 
                <div className="container-info-reserva">
                  <p className='nombre-libro'>{nombre}</p>
                  <p>Autor: {Autor}</p>
                  <p>ISBN: {isbn}</p>
                  <NavLink to='/Historial'>Ver reserva</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}
