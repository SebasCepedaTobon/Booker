import React, {useState, useEffect} from 'react'

import Swal from 'sweetalert2';
import { Imagenes } from '../../../UI/Imagenes/Imagenes';
import perfil from '../../../../assets/Imagenes/perfil.jpeg';

import { BotonesCrud } from '../../../UI/Botones/BotonesCrud';
import { AdminHeader } from '../../../UI/NavegadorAdmin/AdminHeader';
import { AdminNavegador } from '../../../UI/NavegadorAdmin/AdminNavegador';


export const TablaEstudiantes = () => {

  const eliminacion = () =>{
     Swal.fire({
       title: '¿Esta seguro de eliminar a el estudiante?',
       icon: 'warning',
       confirmButtonText: 'Si, Eliminar',
       showCancelButton: true,
       cancelButtonText: 'No, cancelar',
       reverseButtons: true
     }).then((resultado) => {
       if (resultado.isConfirmed) {
         Swal.fire(
           'Eliminado',
           'Estudiante eliminado correctamente',  
           'success'
         )
       }
     })
  }


  const [cerrar, setCounter] = useState(true)

  const [estudiantes, setEstudiantes] = useState([])

  const cargaEstudiante = () => {
    fetch("http://127.0.0.1:8000/api/estudiantes/")
    .then(res => res.json())
    .then((data) =>{
      setEstudiantes(data)
    
    })
  }

  const ventanaFlotante  = () => {setCounter(!cerrar)}

  useEffect(() => {
    cargaEstudiante()
    const overlay = document.getElementById('overlay')
    const from_tablas = document.querySelector('.from-tablas')

    if(cerrar === true){
      overlay.style.visibility = "hidden"
      from_tablas.style.transform="scale(0.6)"
      from_tablas.style.opacity="0"
    }else{
      overlay.style.visibility = "visible"
      from_tablas.style.transform="scale(1)"
      from_tablas.style.opacity="2"
    }

  },[cerrar]);

 

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
              <div className='td-6'><p>Activo-Inactivo</p></div>
              <div className='td-5'><p>Opciones</p></div>
            </div>
            <div className='Tabla-Info' >
              {
                estudiantes.map((estudiantes, index) =>
                <div key={index} className='tr-1'>
                  <div className='td-0'>
                    <div className='perfil' >
                      <Imagenes clase='icono'/>
                    </div>
                  </div>
                  <div className='td-1'>
                    <p className='L1P'>{estudiantes.doc_estudiante.doc}</p>
                  </div>
                  <div className='td-2'>{estudiantes.nombres} {estudiantes.apellidos}</div>
                  <div className='td-3'>{estudiantes.id_grado}</div>
                  <div className='td-4'>{estudiantes.id_grupo}</div>
                  <div className='td-switch'>
                    <label class="switch">
                        <input type="checkbox"/>
                        <span class="slider"></span>
                    </label>
                  </div>
                  <div className='td-5'>
                    <i onClick={ventanaFlotante} class="fa-solid fa-pen-to-square"></i>
                    <i onClick={eliminacion} class="fa-solid fa-trash-can" ></i>
                  </div>
                </div>
                ) 
              }

            </div>            
          </div>
          <div id='ActivarFrom' className='Activar-From'>
            <i onClick={ventanaFlotante} class="fa-solid fa-folder-plus"></i>
          </div> 
        </div>
      </div>

        <div id='overlay' className='overlay'>          
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
      </div>
    </div>
  )
}
