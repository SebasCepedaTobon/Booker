import React, {useState, useEffect} from 'react'

import Swal from 'sweetalert2'

import { BotonesCrud } from '../../UI/Botones/BotonesCrud';
import { AdminHeader } from '../../UI/NavegadorAdmin/AdminHeader';
import { AdminNavegador } from '../../UI/NavegadorAdmin/AdminNavegador';
import { Imagenes } from '../../UI/Imagenes/Imagenes';

export const InfraccionesAdmin = () => {

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
  cargaLibro()
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

/*-------------consumir api---------------*/
const [libros, setLibros] = useState([])

const cargaLibro = () => {
  const TituloLibro = document.querySelector('.TituloLibro')
  TituloLibro.textContent = "Infracciones"

  fetch("https://rickandmortyapi.com/api/character/?page=16")
  .then(res => res.json())
  .then((data) =>{
    setLibros(data.results)
  
  })
}

const multas = () => {
  console.log('multas')

  const TituloLibro = document.querySelector('.TituloLibro')
  TituloLibro.textContent = "Multas"

  fetch("https://rickandmortyapi.com/api/character/?page=13")
  .then(res => res.json())
  .then((data) =>{
    setLibros(data.results)
  })
}
const novedades = () => {
  const TituloLibro = document.querySelector('.TituloLibro')
  TituloLibro.textContent = "Novedades"

  console.log('novedades')
  fetch("https://rickandmortyapi.com/api/character/?page=5")
  .then(res => res.json())
  .then((data) =>{
    setLibros(data.results)
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
          <div className='categoriasMN'  >
          <div className='btnMulta' onClick={cargaLibro}>
            <div className='contenidoMultas'>
              <p>Ingracciones</p>
            </div>
          </div>
          <div className='btnMulta' onClick={multas}>
            <div className='contenidoMultas'>
              <p>Multas</p>
            </div>
          </div>
          <div className='btnMulta' onClick={novedades}>
            <div className='contenidoMultas'>
              <p>Novedades</p>
            </div>
          </div>
        </div>
            <div className="TituloLibro">
              Infracciones
            </div>
            <div className='tr'>
              <div className='td-0'><p>Imagen</p></div>
              <div className='td-1' ><p>Nombre Libro</p></div>
              <div className='td-2' ><p>Nombre Estudiante</p></div>
              <div className='td-3'><p>Fecha Esperada</p></div>
              <div className='td-4'><p>Fecha Entrega</p></div>
              <div className='td-5'><p>Opciones</p></div>
            </div>
            <div className='Tabla-Info' >
              {
                libros.map((libros, index) => 
                  
                <div key={index} className='tr-1'>
                  <div className='td-0'>
                  <Imagenes clase='img' url={libros.image}/>
                  </div>
                  <div className='td-1'>
                    <p className='L1P'>{libros.name}</p>
                  </div>
                  <div className='td-2'><p>{libros.species}</p></div>
                  <div className='td-3'><p>{libros.gender}</p></div>
                  <div className='td-4'><p>{libros.status}</p></div>
                  <div className='td-5'>
                    <i onClick={FormFlotante} class="fa-solid fa-pen-to-square"></i>
                    <i onClick={eliminacion} class="fa-solid fa-trash-can" ></i>
                  </div>
                </div>
                
                )}
            </div>            
          </div>
          <div id='ActivarFrom' className="Activar-From">
            <i onClick={FormFlotante} class="fa-solid fa-folder-plus"></i>
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
