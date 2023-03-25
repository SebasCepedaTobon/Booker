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
let tamaReservas
let tamaPrestamo
let validarEstudiante


export const NuevoPrestamo = () => {

  let urlOrdenada = "https://bookerapi.onrender.com/modulos/libros/?estado=AV&ordering=id_libro"
  const urlEjem = "https://bookerapi.onrender.com/modulos/ejemplares/?estado=D&id_libro__id_libro="
  const url = "https://bookerapi.onrender.com/modulos/reservas/"
  const [libros, setLibros] = useState([])
  const [prestamos, setPrestamos] = useState([])
  const [estudiantes, setEstudiantes] = useState({})
  const [detallesPrestamo, setDetallesPrestamo] = useState([])

  const peticionGetPrestamo=(libro)=>{

    if (tamaPrestamo === null) {
      tamaPrestamo = 0    
    }

    console.log(tamaReservas);
    console.log(tamaPrestamo);

    const sumaP = idEjemplares.length + tamaReservas + tamaPrestamo
    console.log(sumaP);
    
    if (sumaP >= 3) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Limite de prestamos superados',
        showConfirmButton: false,
        timer: 1600
      })
    }else{
      for (let index = 0; index < 1; index++) {
        axios.get(urlEjem + libro.id_libro).then(response=>{
          console.log(response.data)
          idEjemplares.push(response.data[0].id_ejemplar)
          console.log(idEjemplares)
        }).catch(error=>{
          console.log(error.message);
        })
      }
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

  const peticionGetTreservas = () => {
    console.log(idEstudiante);
    axios.get("https://bookerapi.onrender.com/modulos/reservas/?id_estudiante__id_estudiante=" + idEstudiante +  "&estado=AC")
    .then(response => {
      if(response.data.length > 0){
        response.data.map((elemet,_) => {
          tamaReservas = elemet.ejemplares.length
          console.log(elemet.ejemplares.length)
        })        
      }else{
        tamaReservas = 0
      }
      
    }).catch(error => {
      console.log(error.message);
    })
  }

  const peticionGetTPrestamos = () => {
    axios.get("https://bookerapi.onrender.com/modulos/de_prestamos/?estado=AC&id_estudiante__id_estudiante=" + idEstudiante)
    .then(response => {
      if(response.data.length > 0){
        response.data.map((elemet,_) => {
          tamaPrestamo = elemet.prestamos.length
          console.log(elemet.prestamos.length)
        })        
      }else{
        tamaPrestamo = 0
      }
      

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

    console.log("Correcta");
    
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
        const id_prestamos = res.data.id_de_prestamo
        peticionGetPrestamos(id_prestamos, id_reserva)
        
    }).catch(error => {
        console.log(error);   
    }) 
  }

  const peticionGetPrestamos = (id_prestamos, id_reserva) => {
    axios.get("https://bookerapi.onrender.com/modulos/de_prestamos/" + id_prestamos)
      .then(response => {
        setPrestamos(response.data);
        console.log(response.data);
        setEstudiantes(response.data.id_estudiante)
        setDetallesPrestamo(response.data.prestamos)
        peticionDelete(id_reserva)
        abrirPrestamos()
      }).catch(error => { 
        console.log(error.message);
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
    ventanaAbrir()
  }, [])

  useEffect(() => {

  }, [])
  


  
  const librosBusqueda = () => {
    const inputBuscar = document.getElementById('elInput')
    console.log(inputBuscar.value)

    if (inputBuscar.value === "") {
      peticionGet()      
    }else{
      axios.get("https://bookerapi.onrender.com/modulos/libros/?estado=AV&search=" + inputBuscar.value).then(response => {
      setLibros(response.data);
      console.log(response.data);
    }).catch(error => {
      console.log(error.message);
    })
    }
  }


  const ventanaAbrir = () => {
    const overlay = document.getElementById('overlay')
    const from_tablas = document.querySelector('.from-tablas')
    overlay.style.visibility = "visible"
    from_tablas.style.transform = "scale(1)"
    from_tablas.style.opacity = "2"
  }

  const ventanaCerrar = () => {
    const input = document.getElementById('inpurEstuden')

    setTimeout(() => {
      input.value = ""
    }, 900);

    
    const overlay = document.getElementById('overlay')
    const from_tablas = document.querySelector('.from-tablas')

    overlay.style.visibility = "hidden"
    from_tablas.style.transform = "scale(0.6)"
    from_tablas.style.opacity = "0"
  }


  const handleSubmit = (e) =>{
    e.preventDefault()
    const p = document.getElementById('noExiste')
      if(validarEstudiante === 1){
        p.textContent = "No coninciden"
      }else{
        ventanaCerrar()
        p.textContent = ""
      }
       
  }

  const buscarEstudiante = () => {
    console.log(validarEstudiante)
    const p = document.getElementById('noExiste')
    const inpurEstuden = document.getElementById('inpurEstuden')
    axios.get("https://bookerapi.onrender.com/modulos/estudiantes/?search=" + inpurEstuden.value)
    .then(response => {
      console.log(response.data)
      if(response.data.length === 0){
        p.textContent = "No coninciden"
        p.style.color = "red"
        validarEstudiante = 1
      }else{
        idEstudiante = response.data[0].id_estudiante
        p.textContent = ""
        validarEstudiante = 2
      }
      
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
    let endpoint = "https://bookerapi.onrender.com/modulos/prestamos/"+data.id_prestamo+'/'
    await axios.put(endpoint, data)
    .then((res) => {
        /* peticionGetPrestamosUpdate() */
        console.log(res);
    }).catch(error => {
      console.log(error);
    })
  }

  const redireccionPrestamo = () => {
    Swal.fire({
      title: 'Prestamo actualizado correctamente',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        window.location.href = "/Prestamo"
      }
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
              <div className='btnMulta' onClick={peticionPost} >
                <div className='contenidoMultas' >
                  <p>Finalizar Prestamo</p>
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
              {/* <div className='td-6'><p>Estado</p></div> */}
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
{/* 
                    <div className="td-6">
                      {libro.estado === 'AV'
                        ? <p className='pActivo'>Activo</p>
                        : <p className='pInactivo'>Inactivo</p>
                      }
                    </div> */}
                    { /*QUEDO EN LOS BOTONES*/}
                    <div className='td-5'>
                      <input id='ss' onClick={()=>{peticionGetPrestamo(libro)}} type="checkbox" />
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
                <NavLink to='/Prestamo'>
                  <i className="fa-solid fa-xmark"></i>
                </NavLink>
              </div>
              <h1 className='h1MaxMin'>DOCUMENTO DEL ESTUDIANTE</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="box-input">
                  <input type="text" id='inpurEstuden' onChange={buscarEstudiante} required />
                  <span></span>
                  <label>Documento Estudiante</label>
              </div>
              <p id='noExiste'></p>
              <div className="btnsFormulario">
                <button onClick={()=>{
                  peticionGetTreservas()
                  peticionGetTPrestamos()
                }} className="btnFor btn-actializar">
                  VALIDAR
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
                <button id='confirmasPP' onClick={redireccionPrestamo}>Confirmar Prestamo</button>
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
