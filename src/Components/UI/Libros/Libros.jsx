import React, {useState, useEffect} from 'react';
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import { NavLink } from 'react-router-dom'
import { Botonmas2 } from '../Botones/Botonmas2'
import { actionTypes } from '../../../reducer';
import { useStateValue } from '../../../StateProvider'
//Product


export const Libros = ({libro}) => {

  //Funcion que guarda las propiedades del estado de los libros
  const {name , id, image } = libro;

  const [{reservas}, dispatch] = useStateValue();



  //Funcion para agregar libros a las reservas
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

  const [cerrar, setCounter] = useState(true)
  const ventanaReserva  = () => {setCounter(!cerrar)}



  useEffect(() => {
    //const overlay = document.getElementById('overlay2')
    const from_tablas = document.querySelector('.from-tablas3')

    if(cerrar === true){
        from_tablas.style.visibility = "hidden"
        from_tablas.style.opacity="0"
    }else{  
        from_tablas.style.visibility = "visible"
        from_tablas.style.top="0"
        from_tablas.style.opacity="2"
    }


  },[cerrar]);


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
              <button className='btn-vermas2' onClick={addLibros}>
              <i class="fa-solid fa-heart"></i>
              <NavLink to={"/Libro/" + libro.id}>Ver más</NavLink>
              <i class="fa-solid fa-eye"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="blanco">
          <p>{libro.name}</p>
        </div>
      </div>
    <div className="from-tablas3">
      <div className="conatiner-img-reserva">
      </div>
      <div className="container-msj-reserva">
        <p>!Tienes una nueva reserva¡</p>
        <p>Ahora tienes {reservas?.length} reservas</p>
      </div>
      <div className="container-btn-reserva">
        <button>Ver reservas</button>
        <button onClick={ventanaReserva}>cerrar</button>
      </div>
    </div>
    </>
  )
}
