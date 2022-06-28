import React, {useState, useEffect} from 'react'
import '../../../../Static/Admin.css'
import '../../../../Static/MediaQueriesAdmin.css'
import '../../../../Static/TablaReserva.css'
import axios from 'axios';
import Swal from 'sweetalert2'
import { AdminHeader } from '../../../UI/NavegadorAdmin/AdminHeader'
import { AdminNavegador } from '../../../UI/NavegadorAdmin/AdminNavegador'
import { NavLink } from 'react-router-dom';
import { Imagenes } from '../../../UI/Imagenes/Imagenes';



let fechaPrestamo

let prestamoUpdate = []

export const TablaPrestamo = () => {
  const url = "https://bookerbackapi.herokuapp.com/modulos/de_prestamos/"

  const eliminacion = (data) =>{
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
  
    let endpoint  = url+data.id_de_prestamo + "/"
    await axios.delete(endpoint)
    .then((res)=>{
      peticionGet()
      console.log(res);
    }).catch(error=>{
      console.log(error.message);
    })
  }

  const devuelto = () =>{
    Swal.fire({
      title: '¿Esta seguro que el libro esta duvuelto?',
      icon: 'warning',
      confirmButtonText: 'Si, Confirmar',
      showCancelButton: true,
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
     }).then((resultado) => {
      if (resultado.isConfirmed) {
        Swal.fire(
          'Duvuelto',
          'El libro nuevamente esta disponible',
          'success'
         )
       }
     })
  }

const [prestamos, setPrestamos] = useState([])
const [prestamos1, setPrestamos1] = useState()
const [detallesPrestamo, setDetallesPrestamo] = useState([])
const [estudiantes, setEstudiantes] = useState({})
const [generarInfra, setGenerarInfra] = useState({})
const peticionGet=()=>{

  axios.get(url).then(response=>{
    setPrestamos(response.data);
    console.log(response.data)
  }).catch(error=>{
    console.log(error.message);
  })
}

useEffect(() => {
  peticionGet()

},[]);


  const peticionGetPrestamos = (libro) => {
    axios.get("https://bookerbackapi.herokuapp.com/modulos/de_prestamos/" + libro.id_de_prestamo)
      .then(response => {
        fechaPrestamo = libro.fec_prestamo
        setPrestamos1([response.data]);
        prestamoUpdate.push(response.data)
        console.log([response.data]);
        setEstudiantes(response.data.id_estudiante)
        setDetallesPrestamo(response.data.prestamos)
        abrirPrestamos()
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
    abrirPrestamos2()
  }


  const abrirPrestamos2 = () => {
    const overlayEjem = document.getElementById('overlayEjem2')
    const from_tablasEjem = document.querySelector('.box-prestamos2')
    overlayEjem.style.visibility = "visible"
    from_tablasEjem.style.transform = "scale(1)"
    from_tablasEjem.style.opacity = "2" 
  }


  const cerrarPrestamos = () => {
    const overlayEjem = document.getElementById('overlayEjem')
    const from_tablasEjem = document.querySelector('.box-prestamos')

    overlayEjem.style.visibility = "hidden"
    from_tablasEjem.style.transform = "scale(0.6)"
    from_tablasEjem.style.opacity = "0"
    cerrarPrestamos2()
  }

  const cerrarPrestamos2 = () => {
    const overlayEjem = document.getElementById('overlayEjem2')
    const from_tablasEjem = document.querySelector('.box-prestamos2')

    overlayEjem.style.visibility = "hidden"
    from_tablasEjem.style.transform = "scale(0.6)"
    from_tablasEjem.style.opacity = "0"

  }

  const updateEstado = (data)=>{
    console.log(data);
    if(data.estado === 'AC'){
    data.estado = 'INF'
    }else if (data.estado === 'INF') {
      alert('Este prestamo ya es una unfracción')
    }else if (data.estado === 'C') {
      alert('Este prestamo esta ya esta completado')
    }
    updateEstado2(data)
  }

  const updateEstado2 = (data) =>{
    let endpoint = "https://bookerbackapi.herokuapp.com/modulos/prestamos/"+data.id_prestamo+'/'
    axios.put(endpoint, data)
    .then((res) => {
        console.log(res);
        /* peticionGetDetalles(data) */
    }).catch(error => {
      console.log(error);
    })
  }

/*   const peticionGetDetalles  = (data) => {
    axios.get("https://bookerbackapi.herokuapp.com/modulos/prestamos/" + data.id_prestamo)
      .then(response => {
        setDetallesPrestamo(response.data)
        abrirPrestamos()
      }).catch(error => { 
        console.log(error.message);
      })

  } */


  const preInfracion = () => {

    let losPrestamos
    let losPrestamos1
    let losPrestamos2
    let idEstudiante

    console.log(prestamoUpdate)

    {
      prestamoUpdate.map((element) => {
        idEstudiante = element.id_estudiante.id_estudiante
      })
    }

    console.log(idEstudiante);
    

    if(detallesPrestamo.length === 1){
      console.log("Entro al uno");
      {
        prestamoUpdate.map((element) => {
          losPrestamos = element.prestamos[0]
        })
      }

      setGenerarInfra({
        ...generarInfra,
        id_de_prestamo: losPrestamos.id_de_prestamo,
        id_estudiante : idEstudiante,
        prestamos : [{
          id_prestamo : losPrestamos.id_prestamo,
          id_de_prestamo : losPrestamos.id_de_prestamo,
          fec_devolucion : losPrestamos.fec_devolucion,
          id_ejemplar : losPrestamos.id_ejemplar.id_ejemplar,
          estado : losPrestamos.estado
        }],
        estado: "INF"
      })
    }
    else if(detallesPrestamo.length === 2){

      console.log("Entro al dos");
      
      {
        prestamos.map((element) => {
          losPrestamos = element.prestamos[0]
          losPrestamos1 = element.prestamos[1]
        })
      }
      setGenerarInfra({
        ...generarInfra,
        id_de_prestamo: losPrestamos.id_de_prestamo,
        id_estudiante : idEstudiante,
        prestamos : [
          {
            id_prestamo : losPrestamos.id_prestamo,
            id_de_prestamo : losPrestamos.id_de_prestamo,
            fec_devolucion : losPrestamos.fec_devolucion,
            id_ejemplar : losPrestamos.id_ejemplar.id_ejemplar,
            estado : losPrestamos.estado
          },
          {
            id_prestamo : losPrestamos1.id_prestamo,
            id_de_prestamo : losPrestamos1.id_de_prestamo,
            fec_devolucion : losPrestamos1.fec_devolucion,
            id_ejemplar : losPrestamos1.id_ejemplar.id_ejemplar,
            estado : losPrestamos1.estado
          }
    ],
        estado: "INF"
      })
    }else if(detallesPrestamo.length === 3){

      console.log("Entro al dos");
      
      {
        prestamos.map((element) => {
          losPrestamos = element.prestamos[0]
          losPrestamos1 = element.prestamos[1]
          losPrestamos2 = element.prestamos[2]
        })
      }
      setGenerarInfra({
        ...generarInfra,
        id_de_prestamo: losPrestamos.id_de_prestamo,
        id_estudiante : idEstudiante,
        prestamos : [
          {
            id_prestamo : losPrestamos.id_prestamo,
            id_de_prestamo : losPrestamos.id_de_prestamo,
            fec_devolucion : losPrestamos.fec_devolucion,
            id_ejemplar : losPrestamos.id_ejemplar.id_ejemplar,
            estado : losPrestamos.estado
          },
          {
            id_prestamo : losPrestamos1.id_prestamo,
            id_de_prestamo : losPrestamos1.id_de_prestamo,
            fec_devolucion : losPrestamos1.fec_devolucion,
            id_ejemplar : losPrestamos1.id_ejemplar.id_ejemplar,
            estado : losPrestamos1.estado
          },
          {
            id_prestamo : losPrestamos2.id_prestamo,
            id_de_prestamo : losPrestamos2.id_de_prestamo,
            fec_devolucion : losPrestamos2.fec_devolucion,
            id_ejemplar : losPrestamos2.id_ejemplar.id_ejemplar,
            estado : losPrestamos2.estado
          }
    ],
        estado: "INF"
      })
    }

    //updateDataInfracion(infra)
    console.log(generarInfra);
  }

  const updateDataInfracion = async () =>{

    console.log(generarInfra);

    let endpoint = "https://bookerbackapi.herokuapp.com/modulos/de_prestamos/"+ generarInfra.id_de_prestamo+'/'
    await axios.put(endpoint, generarInfra)
    .then((res) => {
        console.log(res);
        console.log('Infración creada')
    }).catch(error => {
      console.log(error);
    })
  }

  return (

    <div className='MainAdministrativo'>
      <div className="box-AdminNavegador">
        <AdminNavegador/>
      </div>
      <div className="box-Header-Admin">
        <AdminHeader/>
        <div className='box-Tabla' >          
          <div className='Tabla'>
            <div className="TituloLibro">
              Prestamo de Libros
            </div>
            <div className='tr'>
              <div className='td-2' ><p>Documento Estudiante</p></div>
              <div className='td-2' ><p>Nombres Estudiante</p></div>
              <div className='td-1'><p>Cantidad de<br/> libros prestados</p></div>
              <div className='td-1'><p>Fecha del<br/>Prestamo</p></div>
              <div className='td-5'><p>Opciones</p></div>
            </div>
            <div className='Tabla-Info' >

              {
                prestamos.map((prestamo, key) => {

                  let p = prestamo.prestamos
                  return(

                    <div key={key} className='tr-1'>
                      <div className='td-2'><p>{prestamo.id_estudiante.doc_estudiante}</p></div>
                      <div className='td-2'><p>{prestamo.id_estudiante.nombres} {prestamo.id_estudiante.apellidos}</p></div>
                      <div className='td-1'>
                      <p>
                        {
                          p.length
                        }
                        </p>                        
                      </div>
                      <div className='td-1'><p>{prestamo.fec_prestamo}</p></div>
                     {/*  <div className='td-1'>{
                          p.map((elementP, key) => (
                            <p key={key} >{elementP.fec_devolucion}</p>
                          ))                    
                        }
                      </div> */}
                      <div className='td-5'>
                        <i onClick={()=>{peticionGetPrestamos(prestamo)}}  class="fa-solid fa-eye fa-eyeAdmin"></i>
                        <i onClick={()=>eliminacion(prestamo)} className="fa-solid fa-trash-can" ></i>
                      </div>
                    </div>
                  )
                }
                )
              }
            </div>            
          </div>
            <NavLink to='/NuevoPrestamo'>
          <div id='ActivarFrom' className="Activar-From">
              <i className="fa-solid fa-folder-plus"></i>
          </div>     
            </NavLink>
        </div>
      </div>
      <div id='overlayEjem' className="overlay">

        <div id='box-ejeplar2' className="box-prestamos ">
          <div className="boxPrestamos">
            <div className='tablaPrestamos'>
              <div className="TituloLibro">
                <p className='pTituloDetallesP'>Detalles del prestamo</p>
                <i onClick={cerrarPrestamos} className="fa-solid fa-xmark"></i>
              </div>
              <div className='tr'>
                <div className='td-1'><p>Documento Estudiante</p></div>
                <div className='td-1'><p>Nombre Estudiante</p></div>
                <div className='td-2'><p>Fecha Préstamo</p></div>
                <div className='td-6'><p>Confirmar Infracción</p></div>
              </div>
              <div className="scrollPrestamos">
                <div className='Tabla-Info' >
                {
                  prestamoUpdate.map((element, key) => {
                    return(
                    <div className='tr-1'>
                      
                      <div className='td-1'>
                        <p>{element.id_estudiante.doc_estudiante}</p>
                      </div>
                      <div className='td-1'>
                        <p className='L1P'>{element.id_estudiante.nombres}<br/>{element.id_estudiante.apellidos}</p>
                      </div>
                      <div className='td-2'>
                        <p>{element.fec_prestamo}</p>
                      </div>
                      <div className="td-6">
                        <button id='confirmasPP' onClick={()=>{
                          updateDataInfracion()
                          }}>Confirmar Infración</button>
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

      <div id='overlayEjem2' className="overlayDePrestamos">
        <div id='box-ejeplar2' className="box-prestamos2 ">
          <div className="boxPrestamos2">
            <div className='tablaPrestamos'>
              <div className="TituloLibro">
              </div>
              <div className='tr'>
                <div className='td-0'><p>Imagen Libro</p></div>
                <div className='td-1'><p>Nombre Libro</p></div>
                <div className='td-2'><p>Fecha Préstamo</p></div>
                <div className='td-2'><p>Fecha Devolución</p></div>
                <div className='td-6'><p>Estado</p></div>
                <div className='td-4'><p>Generar Infracción</p></div>
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
                          <p>{fechaPrestamo}</p>
                        </div>
                        <div className="td-2 td-0infra">
                          {element.fec_devolucion === null
                          ?<p>Aun no se asigno fecha</p>
                          :<p>{element.fec_devolucion}</p>
                          }
                        </div>

                        { /*QUEDO EN LOS BOTONES*/}
                        <div className="td-6">
                          {element.estado === "AC" &&
                            <p>Prestado</p>
                          }
                          {element.estado === "C" &&
                            <p>Prestamo Finalizado</p>
                          }
                          {element.estado === "INF" &&
                            <p>Prestamo con<br />Infración</p>
                          }
                        </div>
                        <div className="td-4">
                        {element.estado === 'AC'
                        ? <div className='prueba prueba2' onClick={()=>{updateEstado(element)}}></div>
                        : <div className='prueba' onClick={()=>{
                          updateEstado(element)
                          
                          }}>
                          </div>
                        }
                        </div>
                    </div>
                    )
                  })
                  }

                  <button onClick={preInfracion}>holaaa</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
