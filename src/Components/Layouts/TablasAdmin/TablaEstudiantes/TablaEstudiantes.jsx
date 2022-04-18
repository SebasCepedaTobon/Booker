import React, {useState, useEffect} from 'react'

import { AiTwotoneEdit, AiFillDelete } from 'react-icons/ai';
import { BsPersonSquare } from 'react-icons/bs';
import { BiBookAdd } from 'react-icons/bi';
import Swal from 'sweetalert2'
import { TiDelete } from 'react-icons/ti';
import { BotonesCrud } from '../../../UI/Botones/BotonesCrud';

import { AdminHeader } from '../../../UI/NavegadorAdmin/AdminHeader'
import { AdminNavegador } from '../../../UI/NavegadorAdmin/AdminNavegador'




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

  const ventanaFlotante  = () => {setCounter(!cerrar)}

  useEffect(() => {
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
            <div className='tr'>
              <div className='td-0'><p>Imagen</p></div>
              <div className='td-1' ><p>Documento</p></div>
              <div className='td-2' ><p>Nombre Completo</p></div>
              <div className='td-3'><p>Grado</p></div>
              <div className='td-5'><p>Opciones</p></div>
            </div>
            <div className='Tabla-Info' >

              <div className='tr-1'>
                <div className='td-0'>
                  <BsPersonSquare className='img'/>
                </div>
                <div className='td-1'>
                  <p className='L1P'>1002633624</p>
                </div>
                <div className='td-2'>Sebastian Cepeda</div>
                <div className='td-3'>1°</div>
                <div className='td-5'>
                  <AiTwotoneEdit onClick={ventanaFlotante} className='edit'/>
                  <AiFillDelete onClick={eliminacion} className='delete'/>     
                </div>
              </div>

              <div className='tr-2'>
                <div className='td-0'>
                  <BsPersonSquare className='img'/>
                </div>
                <div className='td-1'>
                  <p className='L1P'>1023762421</p>
                </div>
                <div className='td-2'>Santiago Rincon</div>
                <div className='td-3'>2°</div>
                <div className='td-5'>
                  <AiTwotoneEdit onClick={ventanaFlotante} className='edit'/>
                  <AiFillDelete onClick={eliminacion} className='delete'/>      
                </div>
              </div>

            </div>            
          </div>
          <div id='ActivarFrom' className='Activar-From'>
            <BiBookAdd onClick={ventanaFlotante} id='icono-Activar-From' className='icono'/>
          </div> 
        </div>
      </div>

        <div id='overlay' className='overlay'>          
          <div className="from-tablas">  
            <div className='Estudiantes-from' >
              <div className="from-Titulo">
                <div className="Desactivar-From">
                  <TiDelete onClick={ventanaFlotante } className='icono'/>
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
                        <option className='opciones' value="">Grupo 1</option>
                        <option className='opciones' value="">Grupo 2</option>
                        <option className='opciones' value="">Grupo 3</option>
                        <option className='opciones' value="">Grupo 4</option>
                        <option className='opciones' value="">Grupo 5</option>
                        <option className='opciones' value="">Grupo 6</option>
                        <option className='opciones' value="">Grupo 7</option>
                        <option className='opciones' value="">Grupo 8</option>
                    </select>
                  </div>
                  <div className="box-select">
                    <select>
                        <option value="" selected>Grado</option>
                        <option className='opciones' value="">Grado 1°</option>
                        <option className='opciones' value="">Grado 2°</option>
                        <option className='opciones' value="">Grado 3°</option>
                        <option className='opciones' value="">Grado 4°</option>
                        <option className='opciones' value="">Grado 5°</option>
                        <option className='opciones' value="">Grado 6°</option>
                        <option className='opciones' value="">Grado 7°</option>
                        <option className='opciones' value="">Grado 8°</option>
                        <option className='opciones' value="">Grado 9°</option>
                        <option className='opciones' value="">Grado 10°</option>
                        <option className='opciones' value="">Grado 11°</option>
                    </select>
                  </div>
                </div>
                <BotonesCrud />                
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
