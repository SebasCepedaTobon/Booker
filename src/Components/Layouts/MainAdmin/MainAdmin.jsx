import React from 'react'
import { NavLink } from 'react-router-dom'

import { AdminHeader } from '../../UI/NavegadorAdmin/AdminHeader'
import { AdminNavegador } from '../../UI/NavegadorAdmin/AdminNavegador'

import libro from '../../../assets/Imagenes/Admin/libro.png';
import prestamo from '../../../assets/Imagenes/Admin/prestamo.png';
import evento from '../../../assets/Imagenes/Admin/evento.png';
import reserva from '../../../assets/Imagenes/Admin/reserva.png';
import estudiantes from '../../../assets/Imagenes/Admin/estudiantes.png';
import novedades from '../../../assets/Imagenes/Admin/novedades.png';
import { Imagenes } from '../../UI/Imagenes/Imagenes';


export const MainAdmin = () => {

  return (
    <div className='MainAdministrativo'>
      <div className="box-AdminNavegador">
        <AdminNavegador/>
      </div>
      <div className='box-Header-Admin' >
        <AdminHeader/>
        <div className="box-carsd-Admin">
          <div className="boxAdminCardd">
          <div className="boxCard01">
            
            <div className="cardAdmin">
              <div className="info-btn">
                <p className='p'>Prestamos</p>
                <NavLink className='card-Admin' to='/Prestamo'>
                  <div className='contenido'>
                    <p>Ver Tabla</p>
                    <span></span>
                  </div>
                </NavLink>
              </div>
              <div className="imagen">
                <Imagenes url={prestamo} clase='img'/>
              </div>
            </div>
            <div className="cardAdmin">
              <div className="info-btn">
                <p className='p'>Reservas</p>
                <NavLink className='card-Admin' to='/Reservas'>
                  <div className='contenido'>
                    <p>Ver Tabla</p>
                    <span></span>
                  </div>
                </NavLink>
              </div>
              <div className="imagen">
                <Imagenes url={evento} clase='img img1'/>
              </div>
            </div>
            <div className="cardAdmin">
              <div className="info-btn">
                <p className='p'>Eventos</p>
                <NavLink className='card-Admin' to='/TEventos'>
                  <div className='contenido'>
                    <p>Ver Tabla</p>
                    <span></span>
                  </div>
                </NavLink>
              </div>
              <div className="imagen">
                <Imagenes url={reserva} clase='img'/>
              </div>
            </div>
          </div>
          <div className="boxCard02">
            <div className="cardLibros">
              <div className="info-btn">
                <p className='p'>Libros</p>
                <NavLink className='card-Admin' to='/TLibros'>
                  <div className='contenido'>
                    <p>Ver Tabla</p>
                    <span></span>
                  </div>
                </NavLink>
              </div>
              <div className="imagen">
                <Imagenes url={libro} clase='img'/>
              </div>
            </div>
            <div className="cardNovedades">
              <div className="tituloNovedades">
                <h1>Estudiantes</h1>
              </div>
              <div className="box-card-novedades">
                <div className="card-IM">
                  <div className="info-btn">
                    <p className='p'>Lista<br/>Estudiantes</p>
                    <NavLink className='card-Admin' to='/TEstudiantes'>
                      <div className='contenido'>
                        <p>Ver Tabla</p>
                        <span></span>
                      </div>
                    </NavLink>
                  </div>
                  <div className="imagen">
                    <Imagenes url={estudiantes} clase='img'/>
                  </div>                
                </div>

                <div className="card-IM">
                  <div className="info-btn">
                    <p className='pI'>Importar</p>
                    <NavLink className='card-Admin' to='/ImportarEstudiantes'>
                      <div className='contenido'>
                        <p>Ver Tabla</p>
                        <span></span>
                      </div>
                    </NavLink>
                  </div>
                  <div className="imagen">
                    <Imagenes url={novedades} clase='img importar'/>
                  </div>                
                </div>                
              </div>
            </div>
          </div>
          </div>          
        </div>
      </div>
    </div>
  )
}
