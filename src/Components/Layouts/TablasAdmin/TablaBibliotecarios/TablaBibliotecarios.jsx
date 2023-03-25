import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import { Imagenes } from '../../../UI/Imagenes/Imagenes';
import usuario from '../../../../assets/Imagenes/Admin/usuario.png'
import { NavLink } from 'react-router-dom';


export const TablaBibliotecarios = () => {

  const url = "https://bookerbackapi.herokuapp.com/modulos/bibliotecarios/"

  const urlOdenada = "https://bookerbackapi.herokuapp.com/modulos/bibliotecarios/?ordering=id_bibliotecario"

  const [bibliotecarios, setBibliotecario] = useState([])


  const peticionGet = () => {
    const inputAyIbibliotecario = document.getElementById('a&ibibliotecario')
    inputAyIbibliotecario.textContent = "Bibliotecarios"
    axios.get(urlOdenada).then(response => {
      setBibliotecario(response.data);
    }).catch(error => {
      console.log(error.message);
    })
  }
  const peticionGetInactivo = () => {
    const inputAyIbibliotecario = document.getElementById('a&ibibliotecario')
    inputAyIbibliotecario.textContent = "Bibliotecarios Inactivos"
    axios.get("https://bookerbackapi.herokuapp.com/modulos/bibliotecarios/?doc_bibliotecario__usuario_activo=false&ordering=id_bibliotecario")
    .then(response => {
      setBibliotecario(response.data);
    }).catch(error => {
      console.log(error.message);
    })
  }
  const peticionGetActivos = () => {
    const inputAyIbibliotecario = document.getElementById('a&ibibliotecario')
    inputAyIbibliotecario.textContent = "Bibliotecarios Activos"
    axios.get("https://bookerbackapi.herokuapp.com/modulos/bibliotecarios/?doc_bibliotecario__usuario_activo=true&ordering=id_bibliotecario")
    .then(response => {
      setBibliotecario(response.data);
    }).catch(error => {
      console.log(error.message);
    })
  }





 
  useEffect(() => {
    peticionGet()

  }, []);


  const peticionGetBusqueda = () => {
    const inputBuscar = document.getElementById('elInput')
    
    const inputAyIbibliotecario = document.getElementById('a&ibibliotecario')
    let estado

    if(inputAyIbibliotecario.textContent === "Bibliotecarios Activos"){
      estado = true      
    }else if (inputAyIbibliotecario.textContent === "Bibliotecarios Inactivos") {
      estado = false  
    }

    axios.get("https://bookerbackapi.herokuapp.com/modulos/bibliotecarios/?doc_bibliotecario__usuario_activo="+estado+"&ordering=id_bibliotecario&search="+ inputBuscar.value)
    .then(response => {
      setBibliotecario(response.data);
    }).catch(error => {
      console.log(error.message);
    })
  }
  

  const handleSubmitEstado = (bibliotecarios) => {
    if (bibliotecarios.doc_bibliotecario.usuario_activo === true) {
      bibliotecarios.doc_bibliotecario.usuario_activo = false
    } else {
      bibliotecarios.doc_bibliotecario.usuario_activo = true
    }

    Swal.fire({
      title: '¿Esta seguro de guardar los cambios?',
      icon: 'warning',
      confirmButtonText: 'Si, Guardar',
      showCancelButton: true,
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        updateEstadoData(bibliotecarios)
      }
    })

  }
  const updateEstadoData = (bibliotecarios) => {
    console.log(bibliotecarios);
    let endpoint = url + bibliotecarios.id_bibliotecario + '/'
    axios.put(endpoint, bibliotecarios)
      .then((res) => {
        console.log(res);
        peticionGet()
      })
  }

  const updateEstado = (bibliotecarios) => {
    handleSubmitEstado(bibliotecarios)
  }

  return (
    <div className='MainAdministrativo'>
      <div className="box-Header-Admin bibliotecariosAdmin">
        <NavLink to='/'>
          <button className='ultimoBoton'>Cerrar sesión</button>
        </NavLink>
        <div className='box-Tabla' >
          <div className='Tabla'>
            <div className='categoriasMN'  >
              <div className='btnMulta' onClick={peticionGet}  >
                <div className='contenidoMultas'  >
                  <p>Bibliotecarios</p>
                </div>
              </div>
              <div className='btnMulta' onClick={peticionGetActivos}  >
                <div className='contenidoMultas'  >
                  <p>Bibliotecarios Activos</p>
                </div>
              </div>
              <div className='btnMulta' onClick={peticionGetInactivo} >
                <div className='contenidoMultas' >
                  <p>Bibliotecarios Inactivos</p>
                </div>
              </div>
            </div>
            <div className="TituloLibro">
              <p id='a&ibibliotecario'></p>
              <div id='buscador' className="buscador">
                <input onChange={peticionGetBusqueda} id='elInput' className='elInput' type="text" autoFocus placeholder='Buscar...' />
                <i onClick={peticionGetBusqueda} class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div className='tr'>
              <div className='td-0'><p>Imagen</p></div>
              <div className='td-1' ><p>Documento</p></div>
              <div className='td-2' ><p>Nombre Completo</p></div>
              <div className='td-6'><p>Celular</p></div>
              <div className='td-6'><p>Estado</p></div>
            </div>
            <div className='Tabla-Info' >
              {
                bibliotecarios.map((bibliotecario, _) => {
                  return (
                    <div className='tr-1'>
                      <div className='td-0'>
                        <div className='perfil' >
                          {bibliotecario.doc_bibliotecario.imagen === null
                            ? <Imagenes url={usuario} />
                            : <Imagenes clase='icono' url={bibliotecario.doc_bibliotecario.imagen} />
                          }

                        </div>
                        {bibliotecario.doc_bibliotecario.usuario_activo === true
                          ? <div className='UsuarioActivo'></div>
                          : <div className='UsuarioInactivo'></div>
                        }
                      </div>
                      <div className='td-1'>
                        <p className='L1P'>{bibliotecario.doc_bibliotecario.doc}</p>
                      </div>
                      <div className='td-2'>{bibliotecario.nombres} {bibliotecario.apellidos}</div>
                      <div className='td-6'>{bibliotecario.telefono}</div>
                      <div className='td-6'>
                        {bibliotecario.doc_bibliotecario.usuario_activo === true
                          ? <p className='activoEstudiantes' >Activo</p>
                          : <p className='inactivoEstudiantes'>Inactivo</p>
                        }
                        {bibliotecario.doc_bibliotecario.usuario_activo === true
                          ? <div data-title='Inactivar Bibliotecario' className='prueba pruebaEsruden' onClick={() => updateEstado(bibliotecario)} ></div>
                          : <div data-title='Activar Bibliotecario' className='prueba prueba2 pruebaEsruden' onClick={() => updateEstado(bibliotecario)} ></div>
                        }
                      </div>
                    </div>
                  )
                }

                )
              }

            </div>
          </div>

          <NavLink to='/NBibliotecarios'  >
            <div id='Activar-From' className='Activar-From'>
              <i className="fa-solid fa-folder-plus"></i>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
