import React, {useState, useEffect} from 'react'
import '../../../../Static/Admin.css'
import '../../../../Static/MediaQueriesAdmin.css'

import { BotonesCrud } from '../../../UI/Botones/BotonesCrud';
import Swal from 'sweetalert2'

import { AdminHeader } from '../../../UI/NavegadorAdmin/AdminHeader'
import { AdminNavegador } from '../../../UI/NavegadorAdmin/AdminNavegador'
import { Imagenes } from '../../../UI/Imagenes/Imagenes';


export const TablaPrestamo = () => {

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


const [cerrar, setCounter] = useState(true)
const [prestamos, setPrestamos] = useState([])

const cargaPrestamos = () => {
  fetch("https://rickandmortyapi.com/api/character/?page=3")
  .then(res => res.json())
  .then((data) =>{
    setPrestamos(data.results)
    
  })
}

const FormFlotante  = () => {setCounter(!cerrar)}

useEffect(() => {
  cargaPrestamos()
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
  const selectInfraccion = document.getElementById('box-select')
    selectInfraccion.style.display = "flex"
    FormFlotante()
}

const seleccionAdd = () => {
  const selectInfraccion = document.getElementById('box-select')
    selectInfraccion.style.display = "none"
    FormFlotante()
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
              <div className='td-0'><p>Imagen</p></div>
              <div className='td-1' ><p>Nombre Libro</p></div>
              <div className='td-2' ><p>Documento Estudiante</p></div>
              <div className='td-3'><p>Fecha Prestamo</p></div>
              <div className='td-4'><p>Fecha Entrega</p></div>
              <div className='td-6'><p>Estado</p></div>
              <div className='td-5'><p>Opciones</p></div>
            </div>
            <div className='Tabla-Info' >

              {
                prestamos.map((prestamos, index) =>
                <div key={index} className='tr-1'>
                  <div className='td-0'>
                    <Imagenes clase='img' url={prestamos.image} />
                  </div>
                  <div className='td-1'>
                    <p className='L1P'>{prestamos.name}</p>
                  </div>
                  <div className='td-2'><p>{prestamos.id}</p></div>
                  <div className='td-3'><p>{prestamos.species}</p></div>
                  <div className='td-4'><p>{prestamos.status}</p></div>
                  <div className='td-switch'>
                    <label class="switch">
                      <input type="checkbox" onClick={devuelto}/>
                      <span class="slider"></span>
                    </label>
                  </div>
                  <div className='td-5'>
                    <i onClick={seleccion}class="fa-solid fa-pen-to-square"></i>
                    <i onClick={eliminacion} class="fa-solid fa-trash-can" ></i>
                  </div>
                </div>
                )
              }
            </div>            
          </div>
          <div id='ActivarFrom' className="Activar-From">
          <i onClick={seleccionAdd} class="fa-solid fa-folder-plus"></i>
          </div>     
        </div>
      </div>

      <div id='overlay' className='overlay'>
        <div className="from-tablas">
          <div className='RM-from'>
            <div className="from-Titulo">
              <div className="Desactivar-From">
                <i onClick={FormFlotante} class="fa-solid fa-xmark"></i>
              </div>
              <h1>NUEVO PRESTAMO</h1>
            </div>
            <form method="post">
              <div className="box-input">
                <input type="text" required/>
                <span></span>
                <label>Nombre Libro</label>
              </div>
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
              <div className="box-input">
                  <input type="date" required/>
                  <span></span>
                  <label className='labelDate'>Fecha Prestamo</label>
              </div>
              <div className="box-input">
                  <input type="date" required/>
                  <span></span>
                  <label className='labelDate'>Fecha Entrega</label>
              </div>
              <div id='box-select' className="box-select">
                <select>
                    <option value="" selected>Estado</option>
                    <option value="">Multa</option>
                    <option value="">Novedad</option>
                </select>
              </div>
              <BotonesCrud/>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
