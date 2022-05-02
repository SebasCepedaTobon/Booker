import React, {useState, useEffect} from 'react'

import Swal from 'sweetalert2'
import { BotonesCrud } from '../../../UI/Botones/BotonesCrud';
import { Imagenes } from '../../../UI/Imagenes/Imagenes';
import libro from '../../../../assets/Imagenes/Libros/libro2.jpg';
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
  const [reservas, setReservas] = useState([])

  const cargaReservas = () => {
    fetch("https://rickandmortyapi.com/api/character/?page=20")
    .then(res => res.json())
    .then((data) =>{
      setReservas(data.results)
    
    })
  }

  const ventanaFlotante  = () => {setCounter(!cerrar)}

  useEffect(() => {
    cargaReservas()
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


  const seleccion = () => {
    const selectInfraccion = document.getElementById('box-dateInput')
      selectInfraccion.style.display = "flex"
      ventanaFlotante()
  }
  
  const seleccionAdd = () => {
    const selectInfraccion = document.getElementById('box-dateInput')
      selectInfraccion.style.display = "none"
      ventanaFlotante()
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
              Reservas
            </div>
            <div className='tr'>
              <div className='td-0'><p>Imagen</p></div>
              <div className='td-1' ><p>Nombre Libro</p></div>
              <div className='td-1' ><p>Documento</p></div>
              <div className='td-2' ><p>Nombre Estudiante</p></div>
              <div className='td-4'><p>Fecha Reserva</p></div>
              <div id='td-6Reserva' className='td-6'><p>Reservado-Prestar</p></div>
              <div className='td-5'><p>Opciones</p></div>
            </div>

            <div className='Tabla-Info' >
              {
                reservas.map((reservas, index) =>

                <div key={index} className='tr-1'>
                  <div className='td-0'>
                    <Imagenes clase='img' url={reservas.image} />
                  </div>
                  <div className='td-1'>
                    <p className='L1P'>{reservas.name}</p>
                  </div>
                  <div className='td-1'>
                    <p className='L1P'>{reservas.id}</p>
                  </div>
                  <div className='td-2'><p>{reservas.origin.name}</p></div>
                  <div className='td-4'><p>{reservas.status}</p></div>
                  <div id='td-6Reserva' className='td-switch'>
                    <label class="switch">
                      <input type="checkbox"/>
                      <span class="slider"></span>
                    </label>
                  </div>
                  <div className='td-5'>
                    <i onClick={seleccion} class="fa-solid fa-pen-to-square"></i>
                    <i onClick={eliminacion} class="fa-solid fa-trash-can" ></i>
                  </div>
                </div>
              )}

            </div>
          </div>
          <div id='Activar-From' className="Activar-From">
            <i onClick={seleccionAdd} class="fa-solid fa-folder-plus"></i>
          </div> 
        </div>
      </div>

      <div id='overlay' className='overlay'>
        <div className="from-tablas">
          <div className='RM-from'>
            <div className="from-Titulo">
              <div className="Desactivar-From">
                <i onClick={ventanaFlotante} class="fa-solid fa-xmark"></i>
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
              <BotonesCrud/>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
