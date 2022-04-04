import React from 'react'
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import libro from '../../../assets/Imagenes/iconos/libro.svg'
import student from '../../../assets/Imagenes/iconos/user.svg'
import multas from '../../../assets/Imagenes/iconos/multas.svg'
import reserva from '../../../assets/Imagenes/iconos/reserva.svg'
import { NavLink } from 'react-router-dom'
import perfil from '../../../assets/Imagenes/perfil.webp'
import inicioAdmin from '../../../assets/Imagenes/iconos/inicioAdmin.svg'
import cerrarAdmin from '../../../assets/Imagenes/iconos/cerrarAdmin.svg'
import gestionAdmin from '../../../assets/Imagenes/iconos/gestionAdmin.svg'
import booker from '../../../assets/Imagenes/logos/Booker1.png'


export const MainAdmin = () => {
  return (
    <div className='mainAdmin'>
        <div className='barra-arriba'>
          <div className='barra1'>
            <p>SITIO ADMINISTRATIVO</p>
          </div>
          <div className='barra2'>
            <NavLink className='aAdmin' to='/home' ><p>INICIO</p></NavLink>            
          </div>
        </div>
        <div className='contenedor-contenedores' >
          <div className='barra2_2'>
            <div className='divPerfil1' >
              <div className='divPerfil' >
                <Imagenes url={perfil} clase='perfil'/>
              </div>
            </div>
            <div className='divDatos'>
              <div className='divDatos1_1' >
                <div className='divDatos1'>
                  <NavLink to='/home' className='divDatos1Nav'>
                    <Imagenes url={inicioAdmin} />
                    <p>Inicio</p>
                  </NavLink>
                </div>
                <div className='divDatos1' >
                  <NavLink to='/home' className='divDatos1Nav2'>
                    <Imagenes url={gestionAdmin} />
                    <p>Gestión De Cuenta</p>
                  </NavLink>
                </div>                
                <div className='divDatos1' >
                  <NavLink to='/' className='divDatos1Nav3'>
                    <Imagenes url={cerrarAdmin} />
                    <p>Cerar Sesión</p>
                  </NavLink>
                </div>
              </div>              
            </div>
          </div>
          <div className='barra2_3'>
          <div className='barra2_33' >
            <Imagenes url={booker} />
            <p>Sitio Administrativo Booker</p>
          </div>
            <div className='barra2_34' >
              <NavLink className='Tlibros' to='/TLibros' >
              <button className='CardAdmin'>
                <Imagenes clase='student' url={libro} />
                <h1>Libros</h1>
                <span></span>
              </button>
              </NavLink>
              <NavLink className='Tlibros' to='/TEstudiantes' >
              <button className='CardAdmin'>
                <Imagenes clase='student' url={student} />
                <h1>Estudiantes</h1>
                <span></span>
              </button>
              </NavLink>

              <NavLink className='Tlibros' to='/Multas'>
                <button className='CardAdmin'>
                  <Imagenes clase='student' url={multas} />
                  <h1>Multas</h1>
                  <span></span>
                </button>
              </NavLink>

              <NavLink className='Tlibros' to='/Reservas' >
                <button className='CardAdmin'>
                  <Imagenes clase='student' url={reserva} />
                  <h1>Reservas</h1>
                  <span></span>
                </button>
              </NavLink>

            </div>
          </div>
        </div>
    </div>
  )
}
