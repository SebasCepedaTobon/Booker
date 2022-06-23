import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import { BotonesCrud } from '../../../UI/Botones/BotonesCrud';
import { Imagenes } from '../../../UI/Imagenes/Imagenes';
import libro from '../../../../assets/Imagenes/Libros/libro2.jpg';
import { AdminHeader } from '../../../UI/NavegadorAdmin/AdminHeader'
import { AdminNavegador } from '../../../UI/NavegadorAdmin/AdminNavegador'



let id_estudianteId
let ejemplaresId = []

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
  const [prestamos, setPrestamos] = useState({})
  const [estudiantes, setEstudiantes] = useState({})
  const [ejemplares, setEjemplares] = useState([])


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

  const peticionGetPrestamos = (id_prestamos) => {
    axios.get("https://bookerbackapi.herokuapp.com/modulos/de_prestamos/" + id_prestamos)
      .then(response => {
        setPrestamos(response.data);
        setEstudiantes(response.data.id_estudiante)
        setEjemplares(response.data.prestamos)
        console.log(response.data);
      }).catch(error => {
        console.log(error.message);
      })
  }


  useEffect(() => {
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
    const from_tablasEjem = document.querySelector('.box-ejemplares2')
    overlayEjem.style.visibility = "visible"
    from_tablasEjem.style.transform = "scale(1)"
    from_tablasEjem.style.opacity = "2"
  }

  const cerrarPrestamos = () => {

    const overlayEjem = document.getElementById('overlayEjem')
    const from_tablasEjem = document.querySelector('.box-ejemplares2')

    overlayEjem.style.visibility = "hidden"
    from_tablasEjem.style.transform = "scale(0.6)"
    from_tablasEjem.style.opacity = "0"

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
                <i onClick={peticionGetBusqueda} class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div className='tr'>
              <div className='td-0'><p>Imagen</p></div>
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
                      <div className='td-0'>
                        {l.map((element, _) => (
                          <Imagenes clase='img' url={element.id_libro.imagen_libro} />
                        ))
                        }
                      </div>
                      <div className='td-1'>
                        {l.map((element, _) => (
                          <p className='L1P'>{element.id_libro.nombre} </p>
                        ))
                        }
                      </div>
                      <div className='td-1'><p>{reservas.id_estudiante.nombres}</p></div>
                      <div className='td-1'><input className='fechaReserva' value={reservas.fecha_reserva} disabled minlength="4" maxlength="8" size="6" /></div>
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
                        <i onClick={() => updateData(reservas)} class="fa-solid fa-pen-to-square"></i>
                        <i onClick={() => eliminacion(reservas)} class="fa-solid fa-pen-to-square"></i>
                      </div>
                    </div>
                  )
                }
                )}
            </div>
          </div>

          <button onClick={peticionPost} ></button>

        </div>
      </div>

      <div id='overlay' className='overlay'>
        <div className="from-tablas">
          <div className='RM-from'>
            <div className="from-Titulo">
              <div className="Desactivar-From">
                <i onClick={ventanaCerrar} class="fa-solid fa-xmark"></i>
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
        <div id='box-ejeplar2' className="box-ejemplares2">
          <div className="boxTablaEjemplares">
            <div className='Tabla'>
              <i onClick={cerrarPrestamos} class="fa-solid fa-xmark"></i>
              <div className="TituloLibro">
              </div>
              <div className='tr'>
                <div className='td-0'><p>Nombre Libro</p></div>
                <div className='td-1'><p>Nombre Estudiante</p></div>
                <div className='td-2'><p>Fecha Prestamo</p></div>
                <div className='td-6'><p>Estado</p></div>
                <div className='td-3'><p>Fecha Entrega</p></div>
                <div className='td-5'><p>Opciones</p></div>
              </div>
              <div className="scrollEjemplares">
                <div className='Tabla-Info' >
                  <div className='tr-1'>
                    <div className='td-0'>
                      <p></p>
                    </div>
                    <div className='td-1'>
                      <p className='L1P'>{estudiantes.nombres}</p>
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

                    <div className='td-3'>
                      <p>

                      </p>
                    </div>

                    { /*QUEDO EN LOS BOTONES*/}
                    <div className='td-5'>
                      <i class="fa-solid fa-trash-can" ></i>
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
