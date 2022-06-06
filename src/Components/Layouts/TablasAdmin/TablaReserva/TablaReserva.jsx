import React, {Component} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import { AdminHeader } from '../../../UI/NavegadorAdmin/AdminHeader'
import { AdminNavegador } from '../../../UI/NavegadorAdmin/AdminNavegador'
import { Imagenes } from '../../../UI/Imagenes/Imagenes';
import '../../../../Static/Admin.css'
import '../../../../Static/MediaQueriesAdmin.css'


const url = "https://bookerbackapi.herokuapp.com/modulos/reservas/";

export class TablaReserva extends Component{

  state={
    reserva: [],
    modalInsertar: false,
    modalEliminar: false,
    form:{
      id_reserva: '',
      id_estudiante: '',
      id_ejemplar: [],
      estado: '',
      tipoModal: ''
    },
  }

  peticionGet=()=>{
    axios.get(url).then(response=>{
      this.setState({reserva: response.data});
      console.log(this.state.reserva);
    }).catch(error=>{
      console.log(error.message);
    }) 
  }

  componentDidMount() {
    this.peticionGet();
  }

  cerrarForm = () =>{

    const cerrar = true
    const overlay = document.getElementById('overlay')
    const from_tablas = document.querySelector('.from-tablas')

    if(cerrar === true){
      console.log(cerrar)
      overlay.style.visibility = "hidden"
      from_tablas.style.transform="scale(0.6)"
      
      from_tablas.style.opacity="0"
    }
  }

/* Funcion con la cual se renderisa la ventana flotante */
  abrirForm = () => {

        this.setState({modalInsertar: !this.state.modalInsertar});
        const abrir = false
        const overlay = document.getElementById('overlay')
        const from_tablas = document.querySelector('.from-tablas')

        if(abrir === false){
        from_tablas.style.transition = "all .7s ease"
        overlay.style.visibility = "visible"
        from_tablas.style.transform="scale(1)"
        from_tablas.style.opacity="2"
        }
    }
    
  ejemplares = []

  render(){
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
                Reservas
              </div>
              <div className='tr'>
                <div className='td-0'><p>Imagen</p></div>
                <div className='td-1' ><p>Nombre Libro</p></div>
                <div className='td-2' ><p>Nombre Estudiante</p></div>
                <div className='td-4'><p>Fecha Reserva</p></div>
                <div className='td-6'><p>Estado</p></div>
                <div className='td-5'><p>Opciones</p></div>
              </div>
  
              <div className='Tabla-Info' >
                {
                  this.state.reserva.map(reservas =>{
                    this.ejemplares = reservas.ejemplares
                    return(
                      <div className='tr-1'>
                    <div className='td-0'>
                    {this.ejemplares.map(element => (
                      <Imagenes clase='img' url={element.id_libro.imagen_libro} />
                    )
                    )}
                    </div>
                    <div className='td-1'>
                      
                      {
                        this.ejemplares.map(element => (
                          <p className='L1P'> {element.id_libro.nombre} </p>
                        ))                  
                      }
                     
                    </div>
                    <div className='td-2'><p>{reservas.id_estudiante.nombres} {reservas.id_estudiante.apellidos}</p></div>
                    <div className='td-4'><p>
                      
                      </p></div>

                    <div className="td-6">
                        <input className='inputCheckbox' type="checkbox" />
                      </div>
                    <div className='td-5'>
                      <i class="fa-solid fa-pen-to-square"></i>
                      <i class="fa-solid fa-trash-can" ></i>
                    </div>
                  </div>

                    )
                  })
                }
  
              </div>
            </div>
            <div id='Activar-From' className="Activar-From">
              <i class="fa-solid fa-folder-plus"></i>
            </div> 
          </div>
        </div>
  
        <div id='overlay' className='overlay'>
          <div className="from-tablas">
            <div className='RM-from'>
              <div className="from-Titulo">
                <div className="Desactivar-From">
                  <i  class="fa-solid fa-xmark"></i>
                </div>
                <h1>NUEVA RESERVA</h1>                
              </div>
              <form method="post">
                <div className="box-input">
                  <input type="text" required/>
                  <span></span>
                  <label>Documento Estudiante</label>
                </div>
                <div className="box-input">
                    <input type="text" required/>
                    <span></span>
                    <label>Nombre Libro</label>
                </div>
                <div className="box-input">
                    <input type="date" required/>
                    <span></span>
                    <label className='labelDate'>Fecha Reserva</label>
                </div>
                <div id='box-dateInput' className="box-input">
                    <input type="date" required/>
                    <span></span>
                    <label className='labelDate'>Fecha Entrega</label>
                </div>

{/*                 {this.state.tipoModal=='insertar'?
                    <button className="btnFor btn-agregar" onClick={()=>this.peticionPost()}>
                    ANEXAR LIBRO
                  </button>: <button className="btnFor btn-actializar" onClick={()=>this.peticionPatch()}>
                    Actualizar
                  </button>
                }  */}  


              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
