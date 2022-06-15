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
    fetch("https://bookerbackapi.herokuapp.com/modulos/libros/" + capLibro)
    .then(res => res.json())
    .then((data) =>{
      setLibros(data)
    })
  }, [capLibro]);



  return (
    <div id='overlay' className='overlay2'>
      <div className="Estudiantes-from2">
          <div className="libros-check">
            <div className="nueva-reserva-close">
              <p id='p-reserva'>¡Tienes una nueva reserva!</p>
              <a className='btn-vermas2' onClick={ocultarReserva}>
                X
              </a>

            </div>
            
            <div id='contador-reserva'>
              {reservas?.length > 1 ? (<p>Ahora tienes {reservas?.length} reservas</p>):
              (<p>Ahora tienes {reservas?.length} reserva</p>)}
            </div>
          </div>
          <hr className='hr-reserva'/>
          {!libros ? "..." :
          <div className="contender-info-reservados">
          <div className="conatiner-img-reserva">
            <Imagenes url={libros.imagen_libro} id="libro-reserva"/>  
          </div>
          
            <div className="conatiner-info-reservas">
              <h2>{libros.nombre}</h2>
              <p className='estado'>{libros.estado === "A" ? 
                (<p>Activo</p>):
                (<p>Inactivo</p>)}
              </p>
              

            </div>
           
        </div>
          }
        
        <hr className='hr-reserva'/>
        <div className="container-btn-reserva">
          <NavLink to='/Historial'>
             <button >
              Ver reserva
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

