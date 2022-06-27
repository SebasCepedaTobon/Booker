import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../../StateProvider';
import { Checkoud } from '../../UI/Checkoud/Checkoud';
import { Imagenes } from '../../UI/Imagenes/Imagenes';
import Noreserva from '../../../assets/Imagenes/NoLibros.png'
import axios from 'axios';
import Swal from 'sweetalert2';
import { Navegacion3 } from '../../UI/Navegacion/Navegacion3';
import { BotonesPerfil } from '../../UI/BotonesPerfil/BotonesPerfil';
import { actionTypes } from '../../../reducer';



export const MainHistorial = () => {

const reservar = () =>{
  Swal.fire({
    title: '¿Estas seguro de realizar la reserva?',
    icon: 'info',
    confirmButtonText: 'Si, reservar',
    showCancelButton: true,
    cancelButtonText: 'No, cancelar',
    reverseButtons: true
    }).then((resultado) => {

    if (resultado.isConfirmed) {

      peticionPost()

  
     

      
     }
    
   })

}

       




 
 

  const url = "https://bookerbackapi.herokuapp.com/modulos/reservas/"
  const urlEjem = "https://bookerbackapi.herokuapp.com/modulos/ejemplares/?estado=D&id_libro__id_libro="
  let idEjemplares = []
 
  
 

  
  const id_estudiante = localStorage.getItem('id_estudiante')

  

    const [{reservas}, dispatch] = useStateValue();
    
    const peticionGet=()=>{
      for (let index = 0; index < reservas.length; index++) {
        axios.get(urlEjem + reservas[index].id_libro).then(response=>{
         
          idEjemplares.push(response.data[0].id_ejemplar)
          
        }).catch(error=>{
          console.log(error.message);
        })
      }
    }


    const peticionPost=()=>{


      
      axios.post(url, {
        "estado": "AC",
        "id_estudiante": id_estudiante,
        "ejemplares": idEjemplares
      }).then(response => {
        dispatch({
          type: actionTypes.LIMPIAR_RESERVA,
        })
        Swal.fire(
          'Reserva realizada exitosamente',
          '',
          'success'
        )

      console.log(response.data)
      
        

      }).catch(error => {
        console.log(error);

        if(error.response.status === 401){
          Swal.fire(
            'El estudiante ha superado al limite de ejemplares prestados o reservados (3)',
            '',
            'info'
          )
        }

        else if(error.response.status === 409){
          Swal.fire(
            'El estudiante ha cometido una infraccion por lo tanto no podra reservar libros',
            '',
            'info'
          )
        }

        
      })

   

     
    }



  

    useEffect(() => {
      peticionGet() 
    }, [])

    //id_estudiante(este se quema), ejemplares, estado

  return (
    <div className='contenedor-perfil'>
        <Navegacion3/>
        <BotonesPerfil/>
        <div className="datos-perfil3">
            <h2 id='Tu-cuenta'>Tus Reservas</h2>
            <div className="info-reservas">
                {reservas.length === 0 ? (<div className='no-reserva'>
                  <h3>No tienes reservas por ahora...</h3>
                  <Imagenes url={Noreserva}/>
                </div>) :
                    (
                      <>
                      {reservas.map((libro => <Checkoud key={libro.id} libro={libro}/>))}
                      <button className='btn-confirmar-reserva' onClick={reservar} >confirmar</button>
                      </>
                      )
                }
                <div>
                 {/*  {
                    ejemplares.map(element=>(
                      <h1>{element.id_ejemplar}</h1>
                    ))
                  } */}

                </div>
                
            </div>
        </div>
    </div>
  )
}