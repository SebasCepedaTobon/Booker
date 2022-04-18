import React, {useState, useEffect} from 'react'

import { AiFillDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';
import { BiBookAdd } from 'react-icons/bi';
import { MdAttachMoney } from 'react-icons/md';
import { BotonesCrud } from '../../../UI/Botones/BotonesCrud';
import Swal from 'sweetalert2'

import { AdminHeader } from '../../../UI/NavegadorAdmin/AdminHeader'
import { AdminNavegador } from '../../../UI/NavegadorAdmin/AdminNavegador'


export const TablaMultas = () => {

  const eliminacion = () =>{
    Swal.fire({
      title: '¿Esta seguro de eliminar este libro?',
      icon: 'warning',
      confirmButtonText: 'Si, Eliminar',
      showCancelButton: true,
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        Swal.fire(
          'Eliminado',
          'El libro se elimino correctamente',
          'success'
        )
      }
    })
  }

const [cerrar, setCounter] = useState(true)
const FormFlotante  = () => {setCounter(!cerrar)}

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
              <div className='td-1' ><p>Nombre Libro</p></div>
              <div className='td-2' ><p>Nombre Estudiante</p></div>
              <div className='td-3'><p>Fecha Esperada</p></div>
              <div className='td-4'><p>Fecha Entrega</p></div>
              <div className='td-5'><p>Opciones</p></div>
            </div>
            <div className='Tabla-Info' >
              <div className='tr-1'>
                <div className='td-0'>
                <MdAttachMoney className='img'/>
                </div>
                <div className='td-1'>
                  <p className='L1P'>Principito</p>
                </div>
                <div className='td-2'><p>Sebastian Andres Tobon Cepeda</p></div>
                <div className='td-3'><p>10/10/2022</p></div>
                <div className='td-4'><p>22/10/2022</p></div>
                <div className='td-5'>
                  <FaEdit onClick={FormFlotante } className='edit'/>
                  <AiFillDelete onClick={eliminacion}  className='delete'/>     
                </div>
              </div>

              <div className='tr-2'>
                <div className='td-0'>
                <MdAttachMoney className='img'/>
                </div>
                <div className='td-1'>
                    <p className='L1P'>Cien años de soledad</p>
                </div>
                <div className='td-2'><p>Santiago Rincon Cortes</p></div>
                <div className='td-3'><p>10/10/202</p></div>
                <div className='td-4'><p>22/10/2022</p></div>
                <div className='td-5'>
                  <FaEdit onClick={FormFlotante } className='edit'/>
                  <AiFillDelete onClick={eliminacion} className='delete'/>   
                </div>
              </div>
            </div>            
          </div>
          <div id='ActivarFrom' className="Activar-From">
            <BiBookAdd onClick={FormFlotante} id='icono' className='icono'/>
          </div>     
        </div>
      </div>

      <div id='overlay' className='overlay'>
        <div className="from-tablas">
          <div className='RM-from'>
            <div className="from-Titulo">
              <div className="Desactivar-From">
                  <TiDelete onClick={FormFlotante} className='icono'/>
              </div>
              <h1>NUEVA MULTA</h1>                
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
                  <label>Documento Administrador</label>
              </div>
              <div className="box-select">
                <select>
                  <option value="" selected>Seleccionar</option>
                  <option value="">Multa</option>
                  <option value="">Novedad</option>
                </select>
              </div>

              <div className="box-select">
                <select>
                  <option value="" selected>Estado</option>
                  <option value="">Activo</option>
                  <option value="">Inactivo                 
                  </option>
                </select>
              </div>
              <div className="box-textarea">
                <textarea placeholder='Mensaje' name="mensaje" id=""></textarea>
                <span></span>
                <label htmlFor=""></label>
              </div>
              <BotonesCrud/>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
