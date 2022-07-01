import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom';
import { useStateValue } from '../../../StateProvider'
import { AbrirModal } from '../AbrirModal/AbrilModal';
import { Imagenes } from '../Imagenes/Imagenes';
import axios from 'axios'

export const VentanaReserva = () => {


  const [{capLibro, reservas}, dispatch] = useStateValue();
  const {ocultarReserva} = AbrirModal()
  const [libros, setLibros] = useState()
  const [idioma, setIdioma] = useState()


  const url = "https://bookerbackapi.herokuapp.com/modulos/libros/" + capLibro 

  const PedirDatos = () =>{
    axios.get(url).then(response=>{
      setLibros(response.data)
      setIdioma(response.data.id_idioma.nombre)


    }).catch(error=>{
      console.log(error.message);
    })
       

  }

  useEffect(() => {
    PedirDatos() 

  }, [capLibro])



  return (
    <div id='overlay2' className='overlay2'>
      <div className="Estudiantes-from2">
          <div className="libros-check">
            <div className="nueva-reserva-close">
              <p id='p-reserva'>¡Tienes una nueva reserva!</p>
              
              <a className='btn-vermas2'>
                <div className="Desactivar-From">
                  <i class="fa-solid fa-xmark" onClick={ocultarReserva}></i>
                </div>
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
              {libros.autores.map((libro)=>{
                return(
                  <p>{libro.nombres} {libro.apellidos}</p>
                ) 
                    
              })}
              <p>{idioma}</p>
              {libros.categorias.map((libro)=>{
                return(
                  <p>{libro.nombre}</p>
                ) 
                    
              })}
       
            
           
              

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

