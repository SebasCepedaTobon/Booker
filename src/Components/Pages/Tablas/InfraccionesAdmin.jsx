import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import '../../../Static/TablaReserva.css'
import '../../../Static/Admin.css'
import '../../../Static/MediaQueriesAdmin.css'
import { AdminHeader } from '../../UI/NavegadorAdmin/AdminHeader';
import { AdminNavegador } from '../../UI/NavegadorAdmin/AdminNavegador';


export const InfraccionesAdmin = () => {
  let cargaInformacion 

  const url = "https://bookerbackapi.herokuapp.com/modulos/infracciones/"
  const urlOrdenada = "https://bookerbackapi.herokuapp.com/modulos/infracciones/?ordering=-id_infraccion"

  const eliminacion = (data) => {
    Swal.fire({
      title: '¿Esta seguro de eliminar este libro?',
      icon: 'warning',
      confirmButtonText: 'Si, Eliminar',
      showCancelButton: true,
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        peticionDelete(data)
      }
    })
  }

  const peticionDelete = async (data) =>{
  
    let endpoint  = url+data.id_infraccion + "/"
    await axios.delete(endpoint)
    .then((res)=>{
      peticionGet()
      console.log(res);
      Swal.fire(
        'Eliminada',
        'La reserva se elimino correctamente',
        'success'
      )
    }).catch(error=>{
      console.log(error);
    })
  }


  const [cerrar, setCounter] = useState(true)
  const FormFlotante = () => { setCounter(!cerrar) }
  const [infraciones, setInfracciones] = useState([])

  useEffect(() => {
    peticionGet()
    const overlay = document.getElementById('overlay')
    const from_tablas = document.querySelector('.from-tablas')

    if (cerrar === true) {
      overlay.style.visibility = "hidden"
      from_tablas.style.transform = "scale(0.6)"
      from_tablas.style.opacity = "0"
    } else {
      overlay.style.visibility = "visible"
      from_tablas.style.transform = "scale(1)"
      from_tablas.style.opacity = "2"
    }

  }, [cerrar]);

  /*-------------consumir api---------------*/


  const peticionGet = () => {
    const cambioFiltro = document.querySelector('.cambioFiltro')
    cambioFiltro.textContent = "Historial de infracciones"
    axios.get(urlOrdenada).then(response => {
      setInfracciones(response.data)
    }).catch(error => {
      console.log(error);
    })
  }

  const peticionGetCompletadas = () => {
    const cambioFiltro = document.querySelector('.cambioFiltro')
    cambioFiltro.textContent = "Infracciones completadas"
    axios.get("https://bookerbackapi.herokuapp.com/modulos/infracciones/?id_tipo_infraccion=1&ordering=-id_infraccion").then(response => {
      setInfracciones(response.data)
    }).catch(error => {
      console.log(error);
    })
  }

  const peticionGetNovedad = () => {
    const cambioFiltro = document.querySelector('.cambioFiltro')
    cambioFiltro.textContent = "Infracciones de tipo novedad"
    axios.get("https://bookerbackapi.herokuapp.com/modulos/infracciones/?id_tipo_infraccion=1&ordering=-id_infraccion").then(response => {
      setInfracciones(response.data)
    }).catch(error => {
      console.log(error);
    })
  }

  const peticionGetMulta = () => {
    const cambioFiltro = document.querySelector('.cambioFiltro')
    cambioFiltro.textContent = "Infracciones de tipo multa"
    axios.get("https://bookerbackapi.herokuapp.com/modulos/infracciones/?id_tipo_infraccion=2&ordering=-id_infraccion").then(response => {
      setInfracciones(response.data)
    }).catch(error => {
      console.log(error);
    })
  }

  const estadoInfra =(data)=>{
    data.id_prestamo = data.id_prestamo.id_prestamo
    data.id_estudiante = data.id_estudiante.id_estudiante
    data.id_tipo_infraccion = data.id_tipo_infraccion.id_tipo_infraccion
    data.id_bibliotecario = data.id_bibliotecario.id_bibliotecario
    if (data.estado === 'AV') {
      data.estado = 'C'
      updateEstado(data)
    }
    console.log(data);
  }

  const updateEstado = (data) => {

    console.log(data);
    
    let endpoint = url + data.id_infraccion + "/"
        axios.put(endpoint, data)
        .then((res) => {
            console.log(res)
            peticionGet()
        }).catch(error => {
          console.log(error);
        })
  }

  const [cargaInfra, setCargaInfra] = useState({})
  const [bibliotecario, setBibliotecario] = useState({})
  const [estudiante, setEstudiante] = useState({})

  const  cargaDeInformacion = (data) =>{
    setCargaInfra(data)
    setEstudiante(data.id_estudiante)
    setBibliotecario(data.id_bibliotecario)
    FormFlotante()
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
                <div className='contenidoMultas'>
                  <p>Ingracciones</p>
                </div>
              </div>
              <div className='btnMulta' onClick={peticionGetNovedad}>
                <div className='contenidoMultas' >
                  <p>Novedades</p>
                </div>
              </div>
              <div className='btnMulta' onClick={peticionGetMulta}>
                <div className='contenidoMultas'>
                  <p>Multas</p>
                </div>
              </div>
              <div className='btnMulta' onClick={peticionGetCompletadas}>
                <div className='contenidoMultas'>
                  <p>Infracciones comlpetadas</p>
                </div>
              </div>
            </div>
            <div className="TituloLibro">
              <p className='cambioFiltro'>Historial de préstamo</p>
              <div id='buscador' className="buscador">
                <input  id='elInput' className='elInput' type="text" autoFocus placeholder='Buscar...' />
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div className='tr'>
              <div className='td-1' ><p>Nombre Libro</p></div>
              <div className='td-2' ><p>Nombre Estudiante</p></div>
              <div className='td-3'><p>Fecha de infracción</p></div>
              <div className='td-0 td-0infra'><p>Tipo<br />Infracción</p></div>
              <div className='td-1'><p>Estado</p></div>
              <div className='td-5'><p>Opciones</p></div>
            </div>
            <div className='Tabla-Info' >
              {infraciones.map((element, key) => {
                return (
                  <div key={key} className='tr-1'>
                    <div className='td-1'>
                      <p>{element.id_prestamo.id_ejemplar.id_libro.nombre}</p>
                    </div>
                    <div className='td-2'>
                      <p className='L1P'>{element.id_estudiante.nombres} {element.id_estudiante.apellidos}</p>
                    </div>
                    <div className='td-3'>
                      <p>{element.id_prestamo.fec_devolucion}</p>
                    </div>
                    <div className='td-0'>
                      {element.id_tipo_infraccion === null
                      ?<p>Sin tipo <br/>de infración</p>
                      :<p>{element.id_tipo_infraccion.nombre}</p>
                    }
                    </div>
                    {
                      element.estado === 'AV'
                      ?<div className='td-1 InfraEstado'>
                        <p className='pEstadoReservaC' >Infracción activa</p>
                        <div data-title='Finalizar infracción' className='prueba prueba2' onClick={()=>{
                          estadoInfra(element)
                          //llamarUpdate()
                          }} >
                        </div> 
                      </div>
                      :""
                    }
                    {
                      element.estado === 'C'
                      ?<div className='td-1 InfraEstado'>        
                        <p className='pEstadoReservaAC' >Infracción completada</p>
                      </div>
                      :""
                    }
                    <div className='td-5'>
                      <i onClick={()=>{cargaDeInformacion(element)}} className="fa-solid fa-pen-to-square"></i>
                      <i onClick={()=>eliminacion(element)} class="fa-solid fa-trash-can" ></i>
                    </div>
                  </div>
                )
              })

              }

            </div>
          </div>
          <div id='ActivarFrom' className="Activar-From">
            <i onClick={FormFlotante} class="fa-solid fa-folder-plus"></i>
          </div>
        </div>
      </div>

      <div id='overlay' className='overlay'>
        <div className="from-tablas infraContenedor">
        <div className="boxPrestamos">
            <div className='tablaPrestamos'>
              <div className="TituloLibro TInfoInfraccion">
                <p className='pTituloDetallesP'>Detalles de la infracción</p>
                <i onClick={FormFlotante} className="fa-solid fa-xmark"></i>
              </div>
              <div className='tr'>
                <div className='td-1'><p>Documento Estudiante</p></div>
                <div className='td-2'><p>Nombre Estudiante</p></div>
                <div className='td-1'><p>Nombre Bibliotecario</p></div>
                <div className='td-7'><p>Descripción</p></div>
              </div>
              <div className="scrollPrestamos">
                <div className='Tabla-Info' >
                    <div className='tr-1'>
                      <div className='td-1'>
                        {estudiante.doc_estudiante}
                      </div>
                      <div className='td-2'>
                        {estudiante.nombres} {estudiante.apellidos}
                      </div>
                      <div className='td-1'>
                        {console.log(bibliotecario.nombres)}
                        {bibliotecario.nombres === null
                        ?<p>No tiene nombre</p>
                        :<p>{bibliotecario.nombres} {bibliotecario.apellidos}</p>
                        }
                      </div>
                      <div className="td-7">
                        {cargaInfra.descripcion}
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
