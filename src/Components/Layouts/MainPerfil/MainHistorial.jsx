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

    const [{reservas}, dispatch] = useStateValue();
    const [ejemplares, setEjemplares] = useState([]);
    console.log(reservas[0].id_libro);
    
    const peticionGet=()=>{
      console.log("entra en la peticion GET");
      for (let index = 0; index < reservas.length; index++) {
        axios.get(urlEjem + reservas[index].id_libro).then(response=>{
          setEjemplares(response.data)


          /* idEjemplar.add  */
          
        }).catch(error=>{
          console.log(error.message);
        })
      }
    }
    console.log(ejemplares);

    const idEjemplar = []

    const capEjemplares=()=>{
      console.log("hhhhhh");
      console.log(ejemplares);
      ejemplares.forEach(element => {
        console.log(element.id_ejemplar)
        idEjemplar(element.id_ejemplar)
        console.log(idEjemplar);

      });
    }
    const peticionPost=async()=>{
      capEjemplares()
      await axios.post(url, {
        "estado": "A",
        "id_estudiante": 1,
        "ejemplares": [1, 2, 3]
    }).then(response=>{
        console.log(response);
      }).catch(error=>{
        console.log(error.message);
      })
    }
    useEffect(() => {
      console.log("entra desde el useEffect");
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