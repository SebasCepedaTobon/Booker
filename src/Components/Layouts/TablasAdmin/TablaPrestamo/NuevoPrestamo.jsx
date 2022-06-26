import React, { useState, useEffect, version } from 'react';
import { Imagenes } from '../../../UI/Imagenes/Imagenes';
import Swal from 'sweetalert2'
import axios from 'axios';
import { AdminHeader } from '../../../UI/NavegadorAdmin/AdminHeader'
import { AdminNavegador } from '../../../UI/NavegadorAdmin/AdminNavegador'
import '../../../../Static/Admin.css'
import '../../../../Static/MediaQueriesAdmin.css'
import '../../../../Static/TablasLibro.css'
import '../../../../Static/TablaReserva.css'
import { NavLink } from 'react-router-dom';



let c = []
let a = []
let idEjemplares = []
let idEstudiante


export const NuevoPrestamo = () => {

  let urlOrdenada = "https://bookerbackapi.herokuapp.com/modulos/libros/?estado=AV&ordering=id_libro"
  const urlEjem = "https://bookerbackapi.herokuapp.com/modulos/ejemplares/?estado=D&id_libro__id_libro="
  const url = "https://bookerbackapi.herokuapp.com/modulos/reservas/"
  const [libros, setLibros] = useState([])


  const peticionGetPrestamo=(libro)=>{

    for (let index = 0; index < 1; index++) {
      axios.get(urlEjem + libro.id_libro).then(response=>{

        console.log(response.data)
        idEjemplares.push(response.data[0].id_ejemplar)
        console.log(idEjemplares)

        ventanaAbrir()
        
      }).catch(error=>{
        console.log(error.message);
      })
    }
  }

  const peticionGet = () => {
    axios.get(urlOrdenada)
    .then(response => {
      setLibros(response.data);
    }).catch(error => {
      console.log(error.message);
    })
  }

  const peticionPost=()=>{
    let id_reserva
      
    axios.post(url, {
      "estado": "AC",
      "id_estudiante": idEstudiante,
      "ejemplares": idEjemplares
  }).then(response=>{
    
    id_reserva = response.data.data.id_reserva
    console.log(response.data.data.id_reserva);
    
    updateData2(id_reserva)

    }).catch(error => {
      console.log(error);
    })

  }


  const updateData2 = (id_reserva) => {

    console.log(id_reserva)

    let endpoint = url + id_reserva + '/'
    axios.put(endpoint, {
        "estado": "C",
        "id_estudiante": idEstudiante,
        "ejemplares": idEjemplares
    }).then((res) => {
        console.log(res);
        peticionDelete(id_reserva)
    }).catch(error => {
        console.log(error);   
    }) 
  }

  const peticionDelete = (id_reserva) => {

    console.log(id_reserva)

    let endpoint = url + id_reserva + '/'
    axios.delete(endpoint)
    .then((res) => {
        console.log(res);
    }).catch(error => {
        console.log(error);   
    }) 
  }


  useEffect(() => {
    peticionGet()
  }, [])


  
  const librosBusqueda = () => {
    const inputBuscar = document.getElementById('elInput')

    axios.get("https://bookerbackapi.herokuapp.com/modulos/libros/?search=" + inputBuscar.value).then(response => {
      setLibros(response.data);
    }).catch(error => {
      console.log(error.message);
    })
  }


  const ventanaAbrir = () => {
    const overlay = document.getElementById('overlay')
    const from_tablas = document.querySelector('.from-tablas')

    overlay.style.visibility = "visible"
    from_tablas.style.transform = "scale(1)"
    from_tablas.style.opacity = "2"
  }

  const ventanaCerrar = () => {
    const overlay = document.getElementById('overlay')
    const from_tablas = document.querySelector('.from-tablas')

    overlay.style.visibility = "hidden"
    from_tablas.style.transform = "scale(0.6)"
    from_tablas.style.opacity = "0"
  }


  const handleSubmit = (e) =>{
    e.preventDefault()
    peticionPost()
  }

  const buscarEstudiante = () => {
    const inpurEstuden = document.getElementById('inpurEstuden')

    axios.get("https://bookerbackapi.herokuapp.com/modulos/estudiantes/?search=" + inpurEstuden.value)
    .then(response => {
      console.log(response.data)
      console.log(response.data[0].id_estudiante)
      idEstudiante = response.data[0].id_estudiante
    }).catch(error => {
      console.log(error.message);
    })
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
              <div className='btnMulta' onClick={peticionGet} >
                <div className='contenidoMultas' >
                  <p>Libros disponibles para prestar</p>
                </div>
              </div>
            </div>
            <div className="TituloLibro">
              <p>Libros disponibles para prestar</p>
              <div id='buscador' className="buscador">
                <input onChange={librosBusqueda} id='elInput' className='elInput' type="text" autoFocus placeholder='Buscar...' />
                <i onClick={librosBusqueda} class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div className='tr'>
              <div className='td-0'><p>Imagen</p></div>
              <div className='td-1'><p>Nombre</p></div>
              <div className='td-2'><p>Categorias</p></div>
              <div className='td-3'><p>Autores</p></div>
              <div className='td-6'><p>Estado</p></div>
              <div className='td-5'><p>Opciones</p></div>
            </div>
            <div className='Tabla-Info' >
              {libros.map((libro, index) => {
                c = libro.categorias
                a = libro.autores

                return (
                  <div key={index} className='tr-1'>

                    <div className='td-0'>
                      <Imagenes clase='img' url={libro.imagen_libro} />
                    </div>
                    <div className='td-1'>
                      <p className='L1P'>{libro.nombre}</p>
                    </div>
                    <div className='td-2'>
                      <p>
                        {
                          c.map(element => element.nombre).join(', ')
                        }
                      </p>
                    </div>

                    <div className='td-3'>
                      <p>
                        {
                          a.map(element => element.nombres).join(', ')
                        }

                      </p>
                    </div>

                    <div className="td-6">
                      {libro.estado === 'AV'
                        ? <p className='pActivo'>Activo</p>
                        : <p className='pInactivo'>Inactivo</p>
                      }
                    </div>
                    { /*QUEDO EN LOS BOTONES*/}
                    <div className='td-5'>
                        <div data-title='Inactivar Libro' onClick={()=>{peticionGetPrestamo(libro)}} className='prueba'></div>
                    </div>
                  </div>
                )
              })}

            </div>
          </div>
        </div>
      </div>

      <div id='overlay' className='overlay'>
        <div className="from-tablas">
          <div className='RM-from'>
            <div className="from-Titulo">
              <div className="Desactivar-From">
                <i onClick={ventanaCerrar} className="fa-solid fa-xmark"></i>
              </div>
              <h1>ESTADO DE RESERVA</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="box-input">
                  <input type="text" id='inpurEstuden' onChange={buscarEstudiante} required />
                  <span></span>
                  <label>Documento</label>
                </div>
              <div className="btnsFormulario">
                <button className="btnFor btn-actializar">
                  Actualizar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
