import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import { BotonesCrud } from '../../../UI/Botones/BotonesCrud';
import { Imagenes } from '../../../UI/Imagenes/Imagenes';
import libro from '../../../../assets/Imagenes/Libros/libro2.jpg';
import { AdminHeader } from '../../../UI/NavegadorAdmin/AdminHeader'
import { AdminNavegador } from '../../../UI/NavegadorAdmin/AdminNavegador'


let librosEstado = []

let id_estudianteId
let ejemplaresId = []

export const TablaReserva = () => {

  const url = "https://bookerbackapi.herokuapp.com/modulos/reservas/"

  const eliminacion = () =>{
    Swal.fire({
      title: '¿Esta seguro de eliminar esta multa?',
       icon: 'warning',
       confirmButtonText: 'Si, Eliminar',
       showCancelButton: true,
       cancelButtonText: 'No, cancelar',
       reverseButtons: true
     }).then((resultado) => {
       if (resultado.isConfirmed) {
         Swal.fire(
            'Eliminado',
            'Multa eliminada correctamente',
            'success'
         )
       }
     })
  }

  const [reservas, setReservas] = useState([])
  const [form2, setForm2] = useState({})


  const peticionGet=()=>{
    const cambioFiltro = document.querySelector('.cambioFiltro')
    cambioFiltro.textContent = "Reservas"
    axios.get(url).then(response=>{
      setReservas(response.data);

      librosEstado = response.data
      librosEstado.map((element,_) => {
        let id = element.id_reserva
        let pEstado = document.getElementById(id)
        let estado = element.estado
        if (estado === 'AC') {
          pEstado.textContent = "Reservada"
          pEstado.style.color = "#2fd319"
        }if(estado === 'IV'){
          pEstado.textContent = "Inactiva"
          pEstado.style.color = "#CA2020"
        }if(estado === 'C'){
          pEstado.textContent = "Completada"
          pEstado.style.color = "#0D5FE4"
        }
      })
    }).catch(error=>{
      console.log(error.message);
    })
  }
  
  const peticionGetInactiva=()=>{
    const cambioFiltro = document.querySelector('.cambioFiltro')
    cambioFiltro.textContent = "Reservas Inactivas"
    axios.get("https://bookerbackapi.herokuapp.com/modulos/reservas/?estado=IV").then(response=>{
      setReservas(response.data);

      librosEstado = response.data
      librosEstado.map((element,_) => {
        let id = element.id_reserva
        let pEstado = document.getElementById(id)
        let estado = element.estado
        if (estado === 'AC') {
          pEstado.textContent = "Reservada"
          pEstado.style.color = "#2fd319"
        }if(estado === 'IV'){
          pEstado.textContent = "Inactiva"
          pEstado.style.color = "#CA2020"
        }if(estado === 'C'){
          pEstado.textContent = "Completada"
          pEstado.style.color = "#0D5FE4"
        }
      })  
      
    }).catch(error=>{
      console.log(error.message);
    })    
  }

  const peticionGetCompletadas = ()=>{
    const cambioFiltro = document.querySelector('.cambioFiltro')
    cambioFiltro.textContent = "Reservas Completadas"
    axios.get("https://bookerbackapi.herokuapp.com/modulos/reservas/?estado=C").then(response=>{
      setReservas(response.data);
      
      librosEstado = response.data
      librosEstado.map((element,_) => {
        let id = element.id_reserva
        let pEstado = document.getElementById(id)
        let estado = element.estado
        if (estado === 'AC') {
          pEstado.textContent = "Reservada"
          pEstado.style.color = "#2fd319"
        }if(estado === 'IV'){
          pEstado.textContent = "Inactiva"
          pEstado.style.color = "#CA2020"
        }if(estado === 'C'){
          pEstado.textContent = "Completada"
          pEstado.style.color = "#0D5FE4"
        }
      })
    }).catch(error=>{
      console.log(error.message);
    })
  }

  const peticionGetActuales = ()=>{
    const cambioFiltro = document.querySelector('.cambioFiltro')
    cambioFiltro.textContent = "Reservas Actuales"
    axios.get("https://bookerbackapi.herokuapp.com/modulos/reservas/?estado=AC").then(response=>{
      setReservas(response.data);
      
      librosEstado = response.data
      librosEstado.map((element,_) => {
        let id = element.id_reserva
        let pEstado = document.getElementById(id)
        let estado = element.estado
        if (estado === 'AC') {
          pEstado.textContent = "Reservada"
          pEstado.style.color = "#2fd319"
        }if(estado === 'IV'){
          pEstado.textContent = "Inactiva"
          pEstado.style.color = "#CA2020"
        }if(estado === 'C'){
          pEstado.textContent = "Completada"
          pEstado.style.color = "#0D5FE4"
        }
      })
    }).catch(error=>{
      console.log(error.message);
    })
  }

  const handleChange = ()  =>{
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
    }else{
    console.log(reservas);
    id_estudianteId = reservas.id_estudiante.id_estudiante

    reservas.ejemplares.forEach(element => {
      ejemplaresId.push(element.id_ejemplar) 
    });
      setForm2(reservas)
      ventanaAbrir()
    }
  }

  const updateData2 = async () =>{
    let endpoint = url+form2.id_reserva+'/'
    await axios.put(endpoint, form2)
    .then((res) => {
      if (form2.estado === "C") {
        //ventanaAbrirFecha()
        window.location.href="/Prestamo"    
      }else{
        window.location.href="/Prestamo"        
      }
        console.log(res);
    })
  }
  

  useEffect(() => {
    peticionGet()

  },[]);

  const ventanaAbrirFecha = () =>{
    const overlay = document.getElementById('prestamoOverlay')
    const from_tablas = document.querySelector('.from-tablas')

    overlay.style.visibility = "visible"
    from_tablas.style.transform="scale(1)"
    from_tablas.style.opacity="2"
    ventanaCerrar()
  }

  const ventanaCerrarFecha = () =>{
    const overlay = document.getElementById('prestamoOverlay')

    overlay.style.visibility = "hidden"
  }

  const ventanaAbrir = () =>{
    const overlay = document.getElementById('overlay')

    overlay.style.visibility = "visible"
  }

  const ventanaCerrar = () =>{
    setTimeout(() => {
      vaciar()
    }, 500);
    const overlay = document.getElementById('overlay')
    const from_tablas = document.querySelector('.from-tablas')

    overlay.style.visibility = "hidden"
    from_tablas.style.transform="scale(0.6)"
    from_tablas.style.opacity="0"
  }

  const vaciar = () =>{
    id_estudianteId = ""
    ejemplaresId = []
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
            </div>
            <div className='tr'>
              <div className='td-0'><p>Imagen</p></div>
              <div className='td-1' ><p>Nombre Libro</p></div>
              <div className='td-1' ><p>Documento</p></div>
              <div className='td-4'><p>Nombre Estudiante</p></div>
              <div className='td-2'><p>Fecha Reserva</p></div>
              <div id='td-6Reserva' className='td-6'><p>Actual</p></div>
              <div className='td-6'><p>Opciones</p></div>
            </div>

            <div className='Tabla-Info' >
              {
                reservas.map((reservas, index) =>{
                  let l = reservas.ejemplares
                  return(
                    <div key={index} className='tr-1'>
                  <div className='td-0'>
                    {l.map((element,_)=>(
                      <Imagenes clase='img' url={element.id_libro.imagen_libro} />
                    ))
                    }
                  </div>
                  <div className='td-1'>
                  {l.map((element,_)=>(
                      <p className='L1P'>{element.id_libro.nombre} </p>
                    ))
                    }
                  </div>
                  <div className='td-1'>
                    <p className='L1P'>{reservas.id_estudiante.doc_estudiante}</p>
                  </div>
                  <div className='td-4'><p>{reservas.id_estudiante.nombres}</p></div>
                  <div className='td-2'><input className='fechaReserva' value={reservas.fecha_reserva} disabled minlength="4" maxlength="8" size="6"/></div>
                  <div className='td-6'>
                    <div className="estadoTablas">
                      <p className='pEstadoReserva' id={reservas.id_reserva}>Completada</p>
                    </div>
                  </div>
                  <div className='td-6'>
                  <i onClick={()=>updateData(reservas)} class="fa-solid fa-pen-to-square"></i>
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
                <i onClick={ventanaCerrar} class="fa-solid fa-xmark"></i>
              </div>
              <h1>ESTADO DE RESERVA</h1>                
            </div>
            <form onSubmit={handleSubmit}>
              <div className="box-select">                  
                <select id='estadoReserva' onChange={handleChange}>
                    <option value="AC">Reservada</option>
                    <option value="C">Completada</option>
                    <option value="IV">Inactiva</option>
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

      {/* <div id="prestamoOverlay" className='prestamoOverlay'>
          <div className='RM-from'>
            <div className="from-Titulo">
              <div className="Desactivar-From">
                <i onClick={ventanaCerrarFecha} class="fa-solid fa-xmark"></i>
              </div>
              <h1>ESTADO DE RESERVA</h1>                
            </div>
            <form onSubmit={handleSubmit}>
              <div className="box-input">
                <input type="date" required/>
                <span></span>
                <label className='labelDate'>Fecha Prestamo</label>
              </div>            
              <div className="btnsFormulario">
                  <button className="btnFor btn-actializar">
                    Actualizar
                  </button>
              </div>
            </form>
          </div>
        </div> */}
    </div>
  )
}
