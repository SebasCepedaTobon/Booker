import React, { useEffect, useState } from 'react'
import { BotonesPerfil } from '../../UI/BotonesPerfil/BotonesPerfil'
import { Navegacion3 } from '../../UI/Navegacion/Navegacion3'
import axios from 'axios';
import { Imagenes } from '../../UI/Imagenes/Imagenes';
import Swal from 'sweetalert2';


export const MainPrestados = () => {
    
    let reservados = []

    const id_estudiante = localStorage.getItem('id_estudiante')



   const [prueba, setPrueba] = useState([])
   const [estado, setEstado] = useState([])
   
   console.log(prueba)
   
    

    const url = "https://bookerbackapi.herokuapp.com/modulos/de_prestamos/?id_estudiante__id_estudiante=" + id_estudiante + "&ordering=-fec_prestamo"

    const PedirDatos = () => {
        axios.get(url).then(response => {
            response.data.map((prestados=>{
                reservados.push(prestados.prestamos)
            }))
            setPrueba(reservados)
            setEstado(response.data)
            console.log(reservados)

        }).catch(error => {
            console.log(error.message);
        })


    }







    useEffect(() => {
        PedirDatos()
        //llenarInputs()

    }, [])


    let estados
    return (
        <div className='contenedor-perfil'>
        <Navegacion3/>
        <BotonesPerfil/>
        <div className="datos-perfil">
            <h2 id='Tu-cuenta'>Prestados</h2>
            {prueba.length === 0 ? (<div className='no-reserva'>
                  <h3>No tienes prestamos por ahora...</h3>
                </div>) :
                    (<div className="tabla-reservados">
                    <table className='tabla-libros-reservados'>
                      <thead className='barra-titulos'>
                        <th className='th-imagen'>Imagen</th>
                        <th>Nombre</th>
                        <th>Fecha de Prestamo</th>
                        <th>Fecha de Devolución</th>
                        <th>Estado de Prestamo</th>
                      </thead>
                      <tbody className='barra-libros'>
                                
                                {prueba.map((reserva => {
                                    return (
                                        <tr>
                                            <td>
                                                {reserva.map((element => {
                                                    return (
                                                            <Imagenes clase='img-card-res' url={element.id_ejemplar.id_libro.imagen_libro} />
                                                    )
                                                }))}
                                            </td>
                                            <td>
                                                {reserva.map((element => (<p>{element.id_ejemplar.id_libro.nombre}</p>)))}
                                            </td>
                                            <td>
                                            {estado.map((element => (<p>{element.fec_prestamo}</p>)))}
                                            </td>
                                            <td>
                                                {reserva.map((element => (<p>{element.fec_devolucion}</p>)))}
                                            
                                            </td>
                                            <td>
                                                {estado.map((element => {estados = element.estado }))}
                                                {estados === "INF" ? <p>Prestamo con Infracción</p>:""}
                                                {estados === "AC" ? <p>Prestamo Activo</p>:""}
                                                {estados === "C" ? <p>Prestamo Finalizado</p>:""}
                                            </td>
                                        </tr>
                                        
                                        
                                    )
                                }))} 
                     
      
                      </tbody>
                    </table>
                  </div>)
            }
           

                    

          
        </div>
    </div>
        
    )
}
