import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../../StateProvider';
import { BotonesPerfil } from '../../UI/BotonesPerfil/BotonesPerfil';
import { Checkoud } from '../../UI/Checkoud/Checkoud';
import { Imagenes } from '../../UI/Imagenes/Imagenes';
import Noreserva from '../../../assets/Imagenes/NoLibros.png'
import axios from 'axios';



export const MainHistorial = () => {

  const url = "http://127.0.0.1:8000/modulos/reservas/"
  const urlEjem = "http://127.0.0.1:8000/modulos/ejemplares/?estado=A&id_libro__id_libro="
  let idEjemplares = []

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


    const peticionPost=async()=>{
      
      await axios.post(url, {
        "estado": "A",
        "id_estudiante": 1,
        "ejemplares": idEjemplares
    }).then(response=>{
        console.log(response);
      }).catch(error=>{
        console.log(error.message);
      })
    }
    useEffect(() => {
      peticionGet()   
    }, [])

    //id_estudiante(este se quema), ejemplares, estado

  return (
    <div className='contenedor-perfil'>
        <BotonesPerfil/>
        <div className="datos-perfil">
            <h2 id='Tu-cuenta'>Tus Reservas</h2>
            <div className="info-reservas">
                {reservas.length === 0 ? (<div className='no-reserva'>
                  <h3>No tienes reservas por ahora...</h3>
                  <Imagenes url={Noreserva}/>
                </div>) :
                    (
                      <>
                      {reservas.map((libro => <Checkoud key={libro.id} libro={libro}/>))}
                      <button onClick={peticionPost} >confirmar</button>
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