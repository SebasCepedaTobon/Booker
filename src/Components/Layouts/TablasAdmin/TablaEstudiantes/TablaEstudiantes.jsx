import React, {Component} from 'react'
import '../../../../Static/Admin.css'
import '../../../../Static/MediaQueriesAdmin.css'

import Swal from 'sweetalert2';
import axios from 'axios';
import { Imagenes } from '../../../UI/Imagenes/Imagenes';
import { AdminHeader } from '../../../UI/NavegadorAdmin/AdminHeader';
import { AdminNavegador } from '../../../UI/NavegadorAdmin/AdminNavegador';

import usuario from '../../../../assets/Imagenes/Admin/usuario.png'


const url="https://bookerbackapi.herokuapp.com/modulos/estudiantes/";
const urlUsuarios="https://bookerbackapi.herokuapp.com/modulos/usuarios/";
export class TablaEstudiantes extends Component {

  state={
    estudiantes:[]
  }
  
  peticionGet=()=>{
    axios.get(url).then(response=>{
      this.setState({estudiantes: response.data});
      console.log(this.state.estudiantes);
    }).catch(error=>{
      console.log(error.message);
    }) 
  }

  usuarios = []
  
  cargarUsuarios = () => {
    fetch(urlUsuarios)
    .then(res => res.json())
    .then((usu) =>{
      this.usuarios = usu
    })
  }

  componentDidMount() {
    this.peticionGet();
    this.cargarUsuarios();
  }

  docEstiduante = []


  render() {

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
                Estudiantes
              </div>
              <div className='tr'>
                <div className='td-0'><p>Imagen</p></div>
                <div className='td-1' ><p>Documento</p></div>
                <div className='td-2' ><p>Nombre Completo</p></div>
                <div className='td-3'><p>Grado</p></div>
                <div className='td-4'><p>Grupo</p></div>
                <div className='td-6'><p>Estado</p></div>
                <div className='td-5'><p>Opciones</p></div>
              </div>
              <div className='Tabla-Info' >
                {
                  this.state.estudiantes.map(estudiante =>{
                    this.d = estudiante.id_grado
                    return(

                  <div className='tr-1'>
                    <div className='td-0'>
                      <div className='perfil' >
                        <Imagenes clase='icono' url={usuario} />
                      </div>
                    </div>
                    <div className='td-1'>
                    <p className='L1P'>{estudiante.doc_estudiante.doc}</p>
                    </div>
                    <div className='td-2'>{estudiante.nombres} {estudiante.apellidos}</div>
                    <div className='td-3'>{estudiante.id_grado.nombre}</div>
                    <div className='td-4'>{estudiante.id_grupo.letra_grupo}</div>
                    <div className='td-switch'>
                      <label class="switch">
                          <input type="checkbox"/>
                          <span class="slider"></span>
                      </label>
                    </div>
                    <div className='td-5'>
                      <i  class="fa-solid fa-pen-to-square"></i>
                      <i  class="fa-solid fa-trash-can" ></i>
                    </div>
                  </div>
                    )

                  })
                  
                }
  
              </div>            
            </div>
            <div id='ActivarFrom' className='Activar-From'>
              <i class="fa-solid fa-folder-plus"></i>
            </div> 
          </div>
        </div>
  
          {/* <div id='overlay' className='overlay'>          
            <div className="from-tablas">  
              <div className='Estudiantes-from' >
                <div className="from-Titulo">
                  <div className="Desactivar-From">
                    <i onClick={ventanaFlotante} class="fa-solid fa-xmark"></i>
                  </div>
                  <h1>NUEVO ESTUDIANTE</h1>                
                </div>              
                <form method="post">
                  <div className='boxs-inputs'>          
                    <div className="box-select">
                      <select>
                          <option value="" selected>Tipo Documento</option>
                          <option className='opciones' value="">Cédula de Ciudadanía</option>
                          <option className='opciones' value="">Tarjeta de Identidad</option>
                          <option className='opciones' value="">Cédula de Extranjeria</option>
                          <option className='opciones' value="">Pasaporte</option>
                          <option className='opciones' value="">Permiso Especial</option>
                          <option className='opciones' value="">Permiso Temporal</option>
                          <option className='opciones' value="">Salvoconducto de Permanecia</option>
                      </select>
                    </div>          
                    <div className="box-input">
                      <input type="text" required/>
                      <span></span>
                      <label>N° Documento</label>
                    </div>
                  </div>
                  
                  <div className="boxs-inputs">
                    <div className="box-input">
                      <input type="text" required/>
                      <span></span>
                      <label>Nombres</label>
                    </div> 
                    <div className="box-input">
                      <input type="text" required/>
                      <span></span>
                      <label>Apellidos</label>
                    </div>
                  </div>
                  <div className="boxs-inputs">
                    <div className="box-input">
                      <input type="text" required/>
                      <span></span>
                      <label>N° Celular</label>
                    </div>
                    <div className="box-input">
                      <input type="text" required/>
                      <span></span>
                      <label>Dirreción</label>
                    </div>
                  </div>
  
                  <div className="boxs-inputs">
                    <div className="box-select">
                      <select>
                        <option value="" selected>Grupo</option>
                        {
                          estudiantes.map((estudiantes, index)=> 
                            <option className='opciones' value="">{estudiantes.tipodoc}</option>
                          )
                        }
                      </select>
                    </div>
                    <div className="box-select">
                      <select>
                        <option value="" selected>Grado</option>
                        {
                          estudiantes.map((estudiantes, index)=> 
                            <option className='opciones' value="">{estudiantes.doc_estudiante.name}</option>
                          )
                        }
                      </select>
                    </div>
                   
                  </div>
                  <div id='box-inputCE' className="box-input">
                    <input type="Email" required placeholder='Correo Electronico'/>
                    <span></span>
                  </div>       
              </form>
            </div>
          </div>
        </div> */}
      </div>
    )

  }
}
