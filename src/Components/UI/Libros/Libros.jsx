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
      <div>
      <div className="cardss">
        <div className="contenedor-libro">
          <div className="libro">
            <Imagenes url={libro.image} id="libro"/>
            </div>
            <div className="btn-card">
              <div className="container_vacio">
              </div>
              <div className="container_botones">
                <NavLink to={"/Libro/" + libro.id}><Botonmas2/></NavLink>
                <button className='btn-vermas2' onClick={addLibros}>
                  <div class="svg-wrapper-1">
                    <div class="svg-wrapper">
                      {/* <GiBookshelf className='icon-reservar' /> */}
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
    </div>
    <div className="from-tablas3">
      <div className="conatiner-img-reserva">
        {(reservas.map((libros => 
          <Imagenes key={libros.id} url={libros.image} id="libro-reserva"/>
        )))} 
      </div>
      <div className="container-msj-reserva">
        <p id='p-reserva'>¡Tienes una nueva reserva!</p>
        <p id='contador-reserva'>Ahora tienes {reservas?.length} reservas</p>
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
