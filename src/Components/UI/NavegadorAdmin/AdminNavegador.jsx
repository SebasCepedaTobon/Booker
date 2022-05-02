import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { Imagenes } from '../Imagenes/Imagenes'
import booker from '../../../assets/Imagenes/logos/BookerAdmin.png'


export const AdminNavegador = () => {

  const [navegador, setCounter] = useState(true)

    const mostrarNavegador  = () => {setCounter(!navegador)}
  
    useEffect(() => {

      const config = document.getElementById('Admin-Navegador2')

      if(navegador === true){
        config.style.marginLeft = "0"

      }else{
        config.style.marginLeft = "-260px"
      }
  
    },[navegador]);

  return (    
    <div id='Admin-Navegador2' className='Admin-Navegador'>
      <div className='box-Logo' >
        <Imagenes url={booker} clase='logo'/>
      </div>  
      <div className='Menu-Padre'>
        <div className='box-menu' >
            <NavLink to='/Admin' className='vinculo' activeClassName="active">              
              <div className='box-vinculos'>
                <i class="fa-solid fa-lock"></i>
                <p>Inicio</p>
              </div>
            </NavLink>
            <p className='LyE'>LIBROS Y ESTUDIANTES</p>
            <NavLink to='/TLibros' className='vinculo'>              
              <div className='box-vinculos'>
                <i class="fa-solid fa-book"></i>
                <p>Libros</p>
                <span></span>
              </div>
            </NavLink>         
            <NavLink to='/TEstudiantes' className='vinculo'> 
              <div className='box-vinculos'>
                <i class="fa-solid fa-graduation-cap"></i>
                <p>Estudiantes</p>
                <span></span>
              </div>
            </NavLink>
            <p className='LyE'>RESERVAS Y PRESTAMOS</p>
            <NavLink to='/Reservas' className='vinculo'>
              <div className='box-vinculos'>
                <i class="fa-solid fa-calendar-check"></i>
                <p>Reservas</p>
                <span></span>
              </div>
            </NavLink>
            <NavLink to='/Prestamo' className='vinculo'>
              <div className='box-vinculos'>
              <i class="fa-solid fa-file-circle-plus"></i>
                <p>Prestamos</p>                
                <span></span>
              </div>
            </NavLink>
            <p className='LyE' id='infra'>INFRACCIONES</p>
              <NavLink to='/TablaInfraciones' className='vinculo'>              
                <div className='box-vinculos'>
                  <i class="fa-solid fa-bullhorn"></i>
                  <p>Infracciones</p>                
                </div>
              </NavLink>
            <p className='LyE'>DATOS DE LOS LIBROS</p>
              <NavLink to='/Admin/Infraciones' className='vinculo'>              
                <div className='box-vinculos'>
                  <i class="fa-solid fa-chalkboard-user"></i>
                  <p>Autores</p>                
                </div>
              </NavLink>
              <NavLink to='/Admin/Infraciones' className='vinculo'>              
                <div className='box-vinculos'>
                  <i class="fa-solid fa-warehouse"></i>
                  <p>Editorial</p>                
                </div>
              </NavLink>
              <NavLink to='/Admin/Infraciones' className='vinculo'>              
                <div className='box-vinculos'>
                  <i class="fa-solid fa-language"></i>
                  <p>Idioma</p>                
                </div>
              </NavLink>

        </div>              
      </div>
      <div onClick={mostrarNavegador} className='config'>
        <div id='config' className='spinnerAdmin'></div>
      </div>
    </div>
  )
}
