import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import { BotonesCrud } from '../../../UI/Botones/BotonesCrud';
import { Imagenes } from '../../../UI/Imagenes/Imagenes';
import libro from '../../../../assets/Imagenes/Libros/libro2.jpg';
import { AdminHeader } from '../../../UI/NavegadorAdmin/AdminHeader'
import { AdminNavegador } from '../../../UI/NavegadorAdmin/AdminNavegador'
import '../../../../Static/TablaReserva.css'



let id_estudianteId
let ejemplaresId = []
let id_bibliotecario

export const TablaReserva = () => {

  const url = "https://bookerbackapi.herokuapp.com/modulos/reservas/"

  const eliminacion = (data) => {
    Swal.fire({
      title: '¿Esta seguro de eliminar la categoria?',
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

  const peticionPost = async () =>{
    await axios.post(url, {
      "estado": "AC",
      "id_estudiante": 5,
      "ejemplares": [76]
  })
    .then(res=>{
        console.log(res)
    })
    .catch(error => {
      console.log(error.response.data.message);
    })
}

  const peticionDelete = async (data) => {

    let endpoint = url + data.id_reserva + "/"
    await axios.delete(endpoint)
      .then((res) => {
        peticionGet()
        console.log(res);
      })
  }


  const [reservas, setReservas] = useState([])
  const [form2, setForm2] = useState({})
  const [prestamos, setPrestamos] = useState([])
  const [estudiantes, setEstudiantes] = useState({})
  const [detallesPrestamo, setDetallesPrestamo] = useState([])


  const peticionGet = () => {
    const cambioFiltro = document.querySelector('.cambioFiltro')
    cambioFiltro.textContent = "Reservas"
    axios.get(url).then(response => {
      setReservas(response.data);

    }).catch(error => {
      console.log(error.message);
    })
  }

  const peticionGetInactiva = () => {
    const cambioFiltro = document.querySelector('.cambioFiltro')
    cambioFiltro.textContent = "Reservas Inactivas"
    axios.get("https://bookerbackapi.herokuapp.com/modulos/reservas/?estado=IV").then(response => {
      setReservas(response.data);
      console.log(response.data);

    }).catch(error => {
      console.log(error.message);
    })
  }

  const peticionGetCompletadas = () => {
    const cambioFiltro = document.querySelector('.cambioFiltro')
    cambioFiltro.textContent = "Reservas Completadas"
    axios.get("https://bookerbackapi.herokuapp.com/modulos/reservas/?estado=C").then(response => {
      setReservas(response.data);
      console.log(response.data);

    }).catch(error => {
      console.log(error.message);
    })
  }

  const peticionGetActuales = () => {
    const cambioFiltro = document.querySelector('.cambioFiltro')
    cambioFiltro.textContent = "Reservas Actuales"
    axios.get("https://bookerbackapi.herokuapp.com/modulos/reservas/?estado=AC").then(response => {
      setReservas(response.data);
    }).catch(error => {
      console.log(error.message);
    })
  }

  const handleChange = () => {
    const estado = document.getElementById('estadoReserva')
    setForm2({
      ...form2,
      estado: estado.value,
      id_estudiante: id_estudianteId,
      ejemplares: ejemplaresId
    })

    console.log(form2);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleChange()
    updateData2()
  }

  const updateData = (reservas) => {
    if (reservas.estado === "C") {
      Swal.fire(
        'Ya esta completada',
        'Esta reserva ya es un prestamo',
        'success'
      )
    } else {
      console.log(reservas);
      id_estudianteId = reservas.id_estudiante.id_estudiante
      reservas.ejemplares.forEach(element => {
        ejemplaresId.push(element.id_ejemplar)
      });
      setForm2(reservas)
      ventanaAbrir()
    }
  }

  const updateData2 = async () => {
    let endpoint = url + form2.id_reserva + '/'
    await axios.put(endpoint, form2)
      .then((res) => {
        console.log(res);
        if (form2.estado === "C") {
          peticionGet()
          abrirPrestamos()
        } else {
          peticionGet()
          ventanaCerrar()
        }
        console.log(res);
        const id_prestamos = res.data.id_de_prestamo
        peticionGetPrestamos(id_prestamos)
        
      }).catch(error => {
        console.log(error.message);
      })
  }


  /*------------------------------------------------ENPIESA DETALLES PRESTAMOS-----------------------------------*/


  const peticionGetPrestamos = (id_prestamos) => {
    axios.get("https://bookerbackapi.herokuapp.com/modulos/de_prestamos/" + id_prestamos)
      .then(response => {
        setPrestamos(response.data);
        console.log(response.data);
        setEstudiantes(response.data.id_estudiante)
        setDetallesPrestamo(response.data.prestamos)
      }).catch(error => { 
        console.log(error.message);
      })
  }



  useEffect(() => {
    id_bibliotecario = localStorage.getItem('id_bibliotecario')
    peticionGet()
  }, []);

  const ventanaAbrir = () => {
    const overlay = document.getElementById('overlay')
    const from_tablas = document.querySelector('.from-tablas')

    overlay.style.visibility = "visible"
    from_tablas.style.transform = "scale(1)"
    from_tablas.style.opacity = "2"
  }

  const ventanaCerrar = () => {
    setTimeout(() => {
      vaciar()
    }, 500);
    const overlay = document.getElementById('overlay')
    const from_tablas = document.querySelector('.from-tablas')

    overlay.style.visibility = "hidden"
    from_tablas.style.transform = "scale(0.6)"
    from_tablas.style.opacity = "0"
  }

  const vaciar = () => {
    id_estudianteId = ""
    ejemplaresId = []
  }

  const peticionGetBusqueda = () => {
    const inputBuscar = document.getElementById('elInput')

    axios.get("https://bookerbackapi.herokuapp.com/modulos/reservas/?search=" + inputBuscar.value).then(response => {
      setReservas(response.data);
    }).catch(error => {
      console.log(error.message);
    })
  }

  const abrirPrestamos = () => {

    const overlayEjem = document.getElementById('overlayEjem')
    const from_tablasEjem = document.querySelector('.box-prestamos')
    overlayEjem.style.visibility = "visible"
    from_tablasEjem.style.transform = "scale(1)"
    from_tablasEjem.style.opacity = "2"
    ventanaCerrar()
    abrirPrestamos2()
  }

  const cerrarPrestamos = () => {

    const overlayEjem = document.getElementById('overlayEjem')
    const from_tablasEjem = document.querySelector('.box-prestamos')

    overlayEjem.style.visibility = "hidden"
    from_tablasEjem.style.transform = "scale(0.6)"
    from_tablasEjem.style.opacity = "0"
    cerrarPrestamos2()
  }

  const abrirPrestamos2 = () => {
    const overlayEjem = document.getElementById('overlayEjem2')
    const from_tablasEjem = document.querySelector('.box-prestamos2')
    overlayEjem.style.visibility = "visible"
    from_tablasEjem.style.transform = "scale(1)"
    from_tablasEjem.style.opacity = "2" 
  }


  const cerrarPrestamos2 = () => {

    const overlayEjem = document.getElementById('overlayEjem2')
    const from_tablasEjem = document.querySelector('.box-prestamos2')

    overlayEjem.style.visibility = "hidden"
    from_tablasEjem.style.transform = "scale(0.6)"
    from_tablasEjem.style.opacity = "0"

  }

  const antesHandleChange = (data) =>{
    const input1 = document.getElementById(data.id_prestamo)

    data.fec_devolucion = input1.value

    handleSubmitPrestamos(data)        
  }

  const handleSubmitPrestamos = (data) =>{
    console.log(data);
    console.log(data.id_ejemplar.id_libro.id_libro);
    updateDataPrestamos(data)
  }

  const updateDataPrestamos = async (data) =>{
    console.log(data)
    let endpoint = "https://bookerbackapi.herokuapp.com/modulos/prestamos/"+data.id_prestamo+'/'
    await axios.put(endpoint, data)
    .then((res) => {
        /* peticionGetPrestamosUpdate() */
        console.log(res);
    }).catch(error => {
      console.log(error);
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
                  <p>Total Reservas</p>
                </div>
              </div>
              <div className='btnMulta' onClick={peticionGetActuales} >
                <div className='contenidoMultas' >
                  <p>Actuales Reservas</p>
                </div>
              </div>
              <div className='btnMulta' onClick={peticionGetCompletadas} >
                <div className='contenidoMultas' >
                  <p>Reservas Completadas</p>
                </div>
              </div>
              <div className='btnMulta' onClick={peticionGetInactiva} >
                <div className='contenidoMultas'>
                  <p>Reservas Inactivas</p>
                </div>
              </div>
            </div>
            <div className="TituloLibro">
              <p className='cambioFiltro'></p>
              <div id='buscador' className="buscador">
                <input onChange={peticionGetBusqueda} id='elInput' className='elInput' type="text" autoFocus placeholder='Buscar...' />
                <i onClick={peticionGetBusqueda} className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div className='tr'>
              <div className='td-4'><p>Imagen</p></div>
              <div className='td-1' ><p>Nombre Libro</p></div>
              <div className='td-1'><p>Nombre Estudiante</p></div>
              <div className='td-1'><p>Fecha Reserva</p></div>
              <div className='td-0'><p>Estado</p></div>
              <div className='td-4'><p>Cambiar estado</p></div>
            </div>

            <div className='Tabla-Info' >
              {
                reservas.map((reservas, index) => {
                  let l = reservas.ejemplares
                  return (
                    <div key={index} className='tr-1'>
                      <div className='td-4'>
                        {l.map((element, key) => (
                          <Imagenes key={key} clase='img' url={element.id_libro.imagen_libro} />
                        ))
                        }
                      </div>
                      <div className='td-1'>
                        {l.map((element, key) => (
                          <p key={key} className='L1P'>-- {element.id_libro.nombre} <br /></p>
                        ))
                        }
                      </div>
                      <div className='td-1'><p>{reservas.id_estudiante.nombres}</p></div>
                      <div className='td-1'><p>{reservas.fecha_reserva}</p></div>
                      <div className='td-0'>
                        <div className="estadoTablas">
                          {reservas.estado === "AC" &&
                            <p className='pEstadoReservaC'>Reserva<br />en gestión</p>
                          }
                          {reservas.estado === "C" &&
                            <p className='pEstadoReservaAC'>Reserva<br />Finalizada</p>
                          }
                          {reservas.estado === "IV" &&
                            <p className='pEstadoReservaIV'>Reserva<br />Inactiva</p>
                          }
                        </div>
                      </div>
                      <div className='td-4'>
                        <i onClick={() => updateData(reservas)} className="fa-solid fa-pen-to-square"></i>
                        <i onClick={() => eliminacion(reservas)} className="fa-solid fa-pen-to-square"></i>
                      </div>
                    </div>
                  )
                }
                )}
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
              <div className="box-select">
                <select id='estadoReserva' value={form2.estado} onChange={handleChange}>
                  <option value="">Estado de reserva</option>
                  <option value="AC">Reservada en gestión</option>
                  <option value="C">Finalizar Reserva</option>
                  <option value="IV">Inactivar Reserva</option>
                </select>
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

      <div id='overlayEjem' className="overlay">
        <div id='box-ejeplar2' className="box-prestamos ">
          <div className="boxPrestamos">
            <div className='tablaPrestamos'>
              <div className="TituloLibro">
                <p className='pTituloDetallesP'>Actualizar Fecha devolución</p>
                <i onClick={cerrarPrestamos} className="fa-solid fa-xmark"></i>
              </div>
              <div className='tr'>
                <div className='td-1'><p>Documento Estudiante</p></div>
                <div className='td-1'><p>Nombre Estudiante</p></div>
                <div className='td-2'><p>Fecha Prestamo</p></div>
                <div className='td-6'><p>Estado</p></div>
              </div>
              <div className="scrollPrestamos">
                <div className='Tabla-Info' >
                  <div className='tr-1'>
                    <div className='td-1'>
                      <p>{estudiantes.doc_estudiante}</p>
                    </div>
                    <div className='td-1'>
                      <p className='L1P'>{estudiantes.nombres}<br/>{estudiantes.apellidos}</p>
                    </div>
                    <div className='td-2'>
                      <p>{prestamos.fec_prestamo}</p>
                    </div>

                    <div className="td-6">
                      {prestamos.estado === "AC" &&
                        <p>Ejemplar<br />Prestado</p>
                      }
                      {prestamos.estado === "IV" &&
                        <p>Prestamo Finalizado</p>
                      }
                      {prestamos.estado === "" &&
                        <p>Prestamo en <br />Infración</p>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    {/* PRESTAMOS DETALLADOS */}
      <div id='overlayEjem2' className="overlayDePrestamos">
        <div id='box-ejeplar2' className="box-prestamos2 ">
          <div className="boxPrestamos2">
            <div className='tablaPrestamos'>
              <div className="TituloLibro">
              </div>
              <div className='tr'>
                <div className='td-0'><p>Imagen Libro</p></div>
                <div className='td-1'><p>Nombre Libro</p></div>
                <div className='td-2'><p>Fecha Prestamo</p></div>
                <div className='td-4'><p>Fecha Devolución</p></div>
              </div>
              <div className="scrollDetalles">
                <div className='Tabla-Info' >
                  {detallesPrestamo.map((element, key) => {
                    return(
                      <div key={key} className='tr-1'>
                        <div className='td-0'>
                          <Imagenes clase='img' url={element.id_ejemplar.id_libro.imagen_libro} />
                        </div>
                        <div className='td-1'>
                          <p>{element.id_ejemplar.id_libro.nombre}</p>
                        </div>
                        <div className='td-2'>
                          <p>{prestamos.fec_prestamo}</p>
                        </div>

                        { /*QUEDO EN LOS BOTONES*/}
                        <div className='td-4'>
                          <div className="box-inputRP">
                            <input type="date" id={element.id_prestamo} onChange={()=>{antesHandleChange(element)}} required/>
                            <label>Fecha devolución</label>
                          </div>
                        </div>
                    </div>
                    )
                  })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
