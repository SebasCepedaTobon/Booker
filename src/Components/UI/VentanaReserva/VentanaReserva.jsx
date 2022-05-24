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
    fetch("http://127.0.0.1:8000/modulos/libros/" + capLibro)
    .then(res => res.json())
    .then((data) =>{
      setLibros(data)
      console.log(libros);
    })
  }, [capLibro]);

  return (
    <div id='overlay' className='overlay2'>
      <div className="from-tablas2">
          <div className="libros-check">
            <i class="fa-solid fa-check"></i>
            <p id='p-reserva'>¡Tienes una nueva reserva!</p>
            <a className='btn-vermas2' onClick={ocultarReserva}>
                X
            </a>
          </div>
          <hr />
        <div className="contender-info-reservados">
          <div className="conatiner-img-reserva">
              {!libros ? "..." :
                <Imagenes url={libros.imagen_libro} id="libro-reserva"/>
              }
          </div>
          <div className="info-btns">
            <div id='contador-reserva'>
              {reservas?.length > 1 ? (<p>Ahora tienes {reservas?.length} reservas</p>):
              (<p>Ahora tienes {reservas?.length} reserva</p>)}
            </div>
            <div className="container-btn-reserva">
              <NavLink to='/Historial'>
                <button >
                Ver reserva
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

