import React, {useState, useEffect} from 'react';
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import { NavLink } from 'react-router-dom'
import { actionTypes } from '../../../reducer';
import { useStateValue } from '../../../StateProvider'
import '../../../slick.css'
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
  const ventanaReserva  = () => {setCounter(false)}
  const ventanaReserva2 = () => {
    setCounter(!cerrar)
    console.log(cerrar);
  }



  useEffect(() => {
    //const overlay = document.getElementById('overlay2')
    const from_tablas = document.querySelector('.from-tablas3')

    if(cerrar === true){
        from_tablas.style.visibility = "hidden"
        from_tablas.style.opacity="0"
    }else{  
        from_tablas.style.visibility = "visible"
        from_tablas.style.bottom="0"
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
                <button className='btn-agLibro' onClick={addLibros}>
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
      <div className="from-tablas3">
      <div className="conatiner-img-reserva">
        {(reservas.map((libros => 
          <Imagenes key={libros.id} url={libros.image} id="libro-reserva"/>
        )))} 
      </div>
      <div className="container-msj-reserva">
        <p id='p-reserva'>¡Tienes una nueva reserva!</p>
        <div id='contador-reserva'>
          {reservas?.length > 1 ? (<p>Ahora tienes {reservas?.length} reservas</p>):
          (<p>Ahora tienes {reservas?.length} reserva</p>)}
        </div>
      </div>
      <div className="container-btn-reserva">
        <NavLink to='/Historial'>
          <button className='btn-vermas2'>
            <div class="svg-wrapper-1">
            <div class="svg-wrapper">
              </div>
              </div>
              <span>Ver reservas</span>
          </button>
        </NavLink>
        <button className='btn-vermas2' onClick={ventanaReserva2}>
          <div class="svg-wrapper-1">
          <div class="svg-wrapper">
            </div>
            </div>
            <span>Cerrar</span>
        </button>
      </div>
    </div>
    
    </>
  )
}
