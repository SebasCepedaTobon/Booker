import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'

import { BotonesCrud } from '../../UI/Botones/BotonesCrud';
import { AdminHeader } from '../../UI/NavegadorAdmin/AdminHeader';
import { AdminNavegador } from '../../UI/NavegadorAdmin/AdminNavegador';


export const InfraccionesAdmin = () => {

  const url = "https://bookerbackapi.herokuapp.com/modulos/infracciones/"

  const eliminacion = (data) => {
    Swal.fire({
      title: '¿Esta seguro de eliminar este libro?',
      icon: 'warning',
      confirmButtonText: 'Si, Eliminar',
      showCancelButton: true,
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        peticionDelete(data)
      }
    })
  }

  const peticionDelete = async (data) =>{
  
    let endpoint  = url+data.id_infraccion + "/"
    await axios.delete(endpoint)
    .then((res)=>{
      peticionGet()
      console.log(res);
      Swal.fire(
        'Eliminada',
        'La reserva se elimino correctamente',
        'success'
      )
    }).catch(error=>{
      console.log(error);
    })
  }


  const [cerrar, setCounter] = useState(true)
  const FormFlotante = () => { setCounter(!cerrar) }
  const [infraciones, setInfracciones] = useState([])

  useEffect(() => {
    peticionGet()
    const overlay = document.getElementById('overlay')
    const from_tablas = document.querySelector('.from-tablas')

    if (cerrar === true) {
      overlay.style.visibility = "hidden"
      from_tablas.style.transform = "scale(0.6)"
      from_tablas.style.opacity = "0"
    } else {
      overlay.style.visibility = "visible"
      from_tablas.style.transform = "scale(1)"
      from_tablas.style.opacity = "2"
    }

  }, [cerrar]);

  /*-------------consumir api---------------*/


  const peticionGet = () => {
    axios.get(url).then(response => {
      setInfracciones(response.data)
    }).catch(error => {
      console.log(error);
    })
  }


  return (
    <div className='MainAdministrativo'>
      <div className="box-AdminNavegador">
        <AdminNavegador />
      </div>
      <div className="box-Header-Admin">
        <AdminHeader />
        <div className='box-Tabla' >
          <div className='Tabla'>
            <div className='categoriasMN'  >
              <div className='btnMulta' >
                <div className='contenidoMultas'>
                  <p>Ingracciones</p>
                </div>
              </div>
              <div className='btnMulta' >
                <div className='contenidoMultas'>
                  <p>Multas</p>
                </div>
              </div>
              <div className='btnMulta'>
                <div className='contenidoMultas'>
                  <p>Novedades</p>
                </div>
              </div>
            </div>
            <div className="TituloLibro">
              Infracciones
            </div>
            <div className='tr'>
              <div className='td-1' ><p>Nombre Libro</p></div>
              <div className='td-2' ><p>Nombre Estudiante</p></div>
              <div className='td-3'><p>Fecha de infracción</p></div>
              <div className='td-4'><p>Descripción</p></div>
              <div className='td-0 td-0infra'><p>Tipo<br />Infracción</p></div>
              <div className='td-5'><p>Opciones</p></div>
            </div>
            <div className='Tabla-Info' >
              {infraciones.map((element, key) => {
                return (
                  <div key={key} className='tr-1'>
                    <div className='td-1'>
                      <p>{element.id_prestamo.id_ejemplar.id_libro.nombre}</p>
                    </div>
                    <div className='td-2'>
                      <p className='L1P'>{element.id_estudiante.nombres} {element.id_estudiante.apellidos}</p>
                    </div>
                    <div className='td-3'>
                      <p>{element.id_prestamo.fec_devolucion}</p>
                    </div>
                    <div className='td-4'><p>{element.descripcion}</p></div>
                    <div className='td-0'>
                      {element.id_tipo_infraccion === null
                      ?<p>Sin tipo <br/>de infración</p>
                      :<p>{element.id_tipo_infraccion.nombre}</p>
                      }
                    </div>
                    <div className='td-5'>
                      <i onClick={FormFlotante} class="fa-solid fa-pen-to-square"></i>
                      <i onClick={()=>eliminacion(element)} class="fa-solid fa-trash-can" ></i>
                    </div>
                  </div>
                )
              })

              }

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
                <input type="text" required />
                <span></span>
                <label>Documento Estudiante</label>
              </div>
              <div className="box-input">
                <input type="text" required />
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
              <BotonesCrud />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
