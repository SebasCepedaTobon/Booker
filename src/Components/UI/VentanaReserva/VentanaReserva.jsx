import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom';
import { useStateValue } from '../../../StateProvider'
import { AbrirModal } from '../AbrirModal/AbrilModal';
import { Imagenes } from '../Imagenes/Imagenes';

export const VentanaReserva = () => {

  const [{capLibro, reservas}, dispatch] = useStateValue();
  const {ocultarReserva} = AbrirModal()
  const [libros, setLibros] = useState()

  useEffect(()=> {
    fetch("https://rickandmortyapi.com/api/character/" + capLibro)
    .then(res => res.json())
    .then((data) =>{
      setLibros(data)
      console.log(libros);
    })
  }, [capLibro]);

  return (
    <div className="from-tablas2">
      <div className="conatiner-img-reserva">
          {!libros ? "..." :
          <Imagenes url={libros.image} id="libro-reserva"/>
          }
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
        <button className='btn-vermas2' onClick={ocultarReserva}>
          <div class="svg-wrapper-1">
          <div class="svg-wrapper">
            </div>
            </div>
            <span>Cerrar</span>
        </button>
      </div>
    </div>
  )
}

