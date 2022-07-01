import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import { Imagenes } from '../../../UI/Imagenes/Imagenes';
import usuario from '../../../../assets/Imagenes/Admin/usuario.png'
import { AdminHeader } from '../../../UI/NavegadorAdmin/AdminHeader';
import { AdminNavegador } from '../../../UI/NavegadorAdmin/AdminNavegador';
import { NavLink } from 'react-router-dom';


export const TablaEstudiantes = () => {

  const urlEstudiante = "https://bookerbackapi.herokuapp.com/modulos/estudiantes/"
  const url = "https://bookerbackapi.herokuapp.com/modulos/estudiantes/?ordering=id_estudiante"

  const eliminacion = (data) => {
    peticionDelete(data)
  }

  const peticionDelete = async (data) =>{
    let endpoint  = urlEstudiante+data.id_estudiante + "/"
    await axios.delete(endpoint)
    .then((res)=>{
      peticionGet()
      console.log(res);
    })
  }
  
  const [estudiantes, setEstudiantes] = useState([])


  const peticionGet = () => {
    axios.get(url).then(response => {
      setEstudiantes(response.data);
    }).catch(error => {
      console.log(error.message);
    })
  }
  const peticionGetInactivo = () => {
    axios.get("https://bookerbackapi.herokuapp.com/modulos/estudiantes/?doc_estudiante__usuario_activo=false&ordering=id_estudiante").then(response => {
      setEstudiantes(response.data);
    }).catch(error => {
      console.log(error.message);
    })
  }


  useEffect(() => {
    peticionGet()
  }, []);


  const peticionGetBusqueda = () => {
    const inputBuscar = document.getElementById('elInput')

    axios.get("https://bookerbackapi.herokuapp.com/modulos/estudiantes/?search=" + inputBuscar.value + "&ordering=id_estudiante")
    .then(response => {
      setEstudiantes(response.data);
    }).catch(error => {
      console.log(error.message);
    })
  }

  const handleSubmitEstado = (estudiantes) => {
    estudiantes.id_grupo = estudiantes.id_grupo.id_grupo
    estudiantes.id_grado = estudiantes.id_grado.id_grado

    console.log(estudiantes.doc_estudiante.usuario_activo);

    if (estudiantes.doc_estudiante.usuario_activo === true) {
      estudiantes.doc_estudiante.usuario_activo = false
    } else {
      estudiantes.doc_estudiante.usuario_activo = true
    }

    console.log(estudiantes.doc_estudiante.usuario_activo);

    Swal.fire({
      title: '¿Esta seguro de guardar los cambios?',
      icon: 'warning',
      confirmButtonText: 'Si, Guardar',
      showCancelButton: true,
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        updateEstadoData(estudiantes)
      }
    })

  }
  const updateEstadoData = (estudiantes) => {
    console.log(estudiantes);
    let endpoint = urlEstudiante + estudiantes.id_estudiante + '/'
    axios.put(endpoint, estudiantes)
      .then((res) => {
        peticionGet()
        console.log(res);
      })
    peticionGet()
  }

  const updateEstado = (estudiantes) => {
    handleSubmitEstado(estudiantes)
  }





  return (
    <div className='MainAdministrativo'>
      <div className="box-AdminNavegador">
        <AdminNavegador />
      </div>
      <div className="box-Header-Admin">
        <AdminHeader />
        <div className='box-Tabla' >
          <div className='Tabla'>
            <div className='categoriasMN'  >
              <div className='btnMulta' onClick={peticionGet}  >
                <div className='contenidoMultas'  >
                  <p>Estudiantes</p>
                </div>
              </div>
              <div className='btnMulta' onClick={peticionGetInactivo} >
                <div className='contenidoMultas' >
                  <p>Estudiantes Inactivos</p>
                </div>
              </div>
            </div>
            <div className="TituloLibro">
              <p>Estudiantes</p>
              <div id='buscador' className="buscador">
                <input onChange={peticionGetBusqueda} id='elInput' className='elInput' type="text" autoFocus placeholder='Buscar...' />
                <i onClick={peticionGetBusqueda} className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div className='tr'>
              <div className='td-0'><p>Imagen</p></div>
              <div className='td-1' ><p>Documento</p></div>
              <div className='td-2' ><p>Nombre Completo</p></div>
              <div className='td-6'><p>Grado</p></div>
              <div className='td-6'><p>Grupo</p></div>
              <div className='td-6'><p>Cambio de estado</p></div>
            </div>
            <div className='Tabla-Info' >
              {
                estudiantes.map((estudiantes, key) => {
                  return (
                    <div key={key} className='tr-1'>
                      <div className='td-0'>
                        <div className='perfil' >
                          {estudiantes.doc_estudiante.imagen === null
                            ? <Imagenes url={usuario} />
                            : <Imagenes clase='icono' url={estudiantes.doc_estudiante.imagen} />
                          }
                        </div>
                      </div>
                      <div className='td-1'>
                        <p className='L1P'>{estudiantes.doc_estudiante.doc}</p>
                      </div>
                      <div className='td-2'>{estudiantes.nombres} {estudiantes.apellidos}</div>
                      <div className='td-6'>{estudiantes.id_grado.nombre}</div>
                      <div className='td-6'>{estudiantes.id_grupo.letra_grupo}</div>
                      <div id='cambiosEstadoTabla' className='td-6'>
                        {estudiantes.doc_estudiante.usuario_activo === true
                          ? <p className='activoEstudiantes' >Activo</p>
                          : <p className='inactivoEstudiantes'>Inactivo</p>
                        }
                        {estudiantes.doc_estudiante.usuario_activo === true
                          ? <div data-title='Inactivar Libro' className='prueba pruebaEsruden' onClick={() => updateEstado(estudiantes)} ></div>
                          : <div data-title='Activar Libro' className='prueba prueba2 pruebaEsruden' onClick={() => updateEstado(estudiantes)} ></div>
                        }
                      </div>
                    </div>
                  )
                }

                )
              }

            </div>
          </div>
          <NavLink to='/NuevoEstudiante'  >
            <div id='Activar-From' className='Activar-From'>
              <i className="fa-solid fa-folder-plus"></i>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
