import React, { useEffect, useState } from 'react'
import { BotonesPerfil } from '../../UI/BotonesPerfil/BotonesPerfil'
import { Navegacion3 } from '../../UI/Navegacion/Navegacion3'
import { Imagenes } from '../../UI/Imagenes/Imagenes';
import axios from 'axios';
import Noinfracciones from '../../../assets/Imagenes/infracciones.png';

export const MainInfracciones = () => {

  const id_estudiante = localStorage.getItem('id_estudiante')

  const [infracciones, setInfracciones] = useState([])


  let url = "https://bookerbackapi.herokuapp.com/modulos/infracciones/?id_estudiante__id_estudiante="+ id_estudiante +"&estado=AV"

  const PedirDatos = () => {
    axios.get(url).then(response => {
        setInfracciones(response.data)
        console.log(response.data)

    }).catch(error => {
        console.log(error.message);
    })


}







useEffect(() => {
    PedirDatos()
  

}, [])
  return (
    <div className='contenedor-perfil'>
        <Navegacion3/>
        <BotonesPerfil/>
        <div className="datos-perfil">
            <h2 id='Tu-cuenta'>Tus Infracciones</h2>
            {infracciones.length === 0 ? (
              <div className="p-hr">
                <h3>No tienes infracciones por ahora...</h3>
              </div>) :
                    (
              <div className="tabla-reservados">
              <table className='tabla-libros-reservados'>
                <thead className='barra-titulos'>
                  <th className='th-imagen'>Imagen</th>
                  <th>Nombre</th>
                  <th>Estado</th>
                  <th>Descripcion Infracción</th>
                  <th>Tipo infraccion</th>
                </thead>
                <tbody className='barra-libros'>
                  {infracciones.map(infra=>{
                    return(
                      <tr>
                        <td>
                          <Imagenes clase='img-card-res' url={infra.id_prestamo.id_ejemplar.id_libro.imagen_libro}/>
                        </td>
                        <td>
                          {infra.id_prestamo.id_ejemplar.id_libro.nombre}
                        </td>
                        <td>
                          {infra.estado === "AV" ? <p>Infracción vigente</p>:""}
                          {infra.estado === "C" ? <p>Infracción Finalizada</p>:""}
                          {infra.estado === "IV" ? <p>Infracción Inactiva</p>:""}
                          </td>
                        <td>{infra.descripcion === null ? <p>No tiene</p>:<p>{infra.descripcion}</p>}</td>
                        <td>{infra.id_tipo_infraccion.nombre}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
                    )
                    }
            
        </div>
    </div>
  )
}