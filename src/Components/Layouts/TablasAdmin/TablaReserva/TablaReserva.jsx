import React, {useState, useEffect} from 'react'

import { AiTwotoneEdit, AiFillDelete } from 'react-icons/ai';
import { FaUserEdit } from 'react-icons/fa';
import { BiBookAdd } from 'react-icons/bi';

import Swal from 'sweetalert2'
import { BsCalendarCheck } from 'react-icons/bs';
import { TiDelete } from 'react-icons/ti';
import { BotonesCrud } from '../../../UI/Botones/BotonesCrud';

import { AdminHeader } from '../../../UI/NavegadorAdmin/AdminHeader'
import { AdminNavegador } from '../../../UI/NavegadorAdmin/AdminNavegador'





export const TablaReserva = () => {

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
              <div className='td-2' ><p>Nombre Estudiante</p></div>
              <div className='td-3'><p>Grado</p></div>
              <div className='td-4'><p>Fecha Reserva</p></div>
              <div className='td-5'><p>Opciones</p></div>
            </div>

            <div className='Tabla-Info' >
              <div className='tr-1'>
                <div className='td-0'>
                <BsCalendarCheck className='img'/>
                </div>
                <div className='td-1'>
                  <p className='L1P'>1002633624</p>
                </div>
                <div className='td-2'><p>Sebastian Andres Tobon Cepeda</p></div>
                <div className='td-3'><p>1°</p></div>
                <div className='td-4'><p>22/10/2022</p></div>
                <div className='td-5'>
                  <FaUserEdit onClick={ventanaFlotante} className='edit'/>
                  <AiFillDelete onClick={eliminacion} className='delete'/>     
                </div>
              </div>

              <div className='tr-2'>
                <div className='td-0'>
                <BsCalendarCheck className='img'/>
                </div>
                <div className='td-1'>
                    <p className='L1P'>1809883422</p>
                </div>
                <div className='td-2'><p>Santiago Rincon Cortes</p></div>
                <div className='td-3'><p>2°</p></div>
                <div className='td-4'><p>22/10/2022</p></div>
                <div className='td-5'>
                <FaUserEdit onClick={ventanaFlotante} className='edit'/>
                <AiFillDelete onClick={eliminacion} className='delete'/>     
                </div>
              </div>
            </div>
          </div>
          <div id='Activar-From' className="Activar-From">
            <BiBookAdd onClick={ventanaFlotante} id='icono' className='icono'/>
          </div> 
        </div>
      </div>

      <div id='overlay' className='overlay'>
        <div className="from-tablas">
          <div className='RM-from'>
            <div className="from-Titulo">
              <div className="Desactivar-From">
                  <TiDelete onClick={ventanaFlotante} className='icono'/>
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
              <div className="box-input">
                  <input type="date" required/>
                  <span></span>
                  <label className='labelDate'>Fecha Entrega</label>
              </div>            
              <BotonesCrud/>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
