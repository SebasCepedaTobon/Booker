import React, { useEffect, useState } from 'react'
import { BotonesPerfil } from '../../UI/BotonesPerfil/BotonesPerfil'
import { Navegacion3 } from '../../UI/Navegacion/Navegacion3'
import axios from 'axios';
import { Imagenes } from '../../UI/Imagenes/Imagenes';
import Swal from 'sweetalert2';



export const MainReservados = () => {

  const id_estudiante = localStorage.getItem('id_estudiante')

  const [reservados, setReservados] = useState([])
  console.log(reservados)

  const url = "https://bookerbackapi.herokuapp.com/modulos/reservas/?estado=AC&id_estudiante__id_estudiante=" + id_estudiante

  const PedirDatos = () =>{
    axios.get(url).then(response=>{
      setReservados(response.data);
    }).catch(error=>{
      console.log(error.message);
    })
       

  }

  const eliminacionAuto = (data) =>{
    Swal.fire({
      title: '¿Esta seguro de cancelar la reserva?',
      icon: 'warning',
      confirmButtonText: 'Si, cancelar',
      showCancelButton: true,
      cancelButtonText: 'No',
      reverseButtons: true
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        peticionDeleteAuto(data)
      }
    })
  }

  const url2 = "https://bookerbackapi.herokuapp.com/modulos/reservas/"

  const peticionDeleteAuto = async (data) =>{

    

    let endpoint  = url2+data.id_reserva + "/"
    await axios.delete(endpoint)
    .then((res)=>{
      PedirDatos()
      console.log(res);
    })
  }

  


  
  useEffect(() => {
      PedirDatos() 
      //llenarInputs()

    }, [])


    let eje = []

  return (
    <div className='contenedor-perfil'>
        
        <Navegacion3/>
        <BotonesPerfil/>
        <div className="datos-perfil">
            <h2 id='Tu-cuenta'>Reservados</h2>
            {reservados.map((reserva=>{
              
              eje = reserva.ejemplares
              return(
                <div className="ejemplares">
                  {eje.map((ejempla=>(
                    <Imagenes clase='img-card-res' url={ejempla.id_libro.imagen_libro} />
                      

                    )
                    


                  ))}
                  {eje.map((ejempla)=>(
                    <div className='datos-reservados'>
                      <h2>{ejempla.id_libro.nombre}</h2>
                      <p>{ejempla.id_libro.isbn}</p>


                    </div>
        
                  ))
                  }
                  <button onClick={()=>{eliminacionAuto(reserva)}} className="btn-reser">Cancelar</button>

                </div>

               
                
              )
            }))}

          
        </div>
    </div>
  )
}
