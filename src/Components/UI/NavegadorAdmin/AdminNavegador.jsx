import React, {useState, useEffect, Component} from 'react'
import { NavLink } from 'react-router-dom'
import { Imagenes } from '../Imagenes/Imagenes'
import booker from '../../../assets/Imagenes/logos/BookerAdmin.png'
import '../../../Static/Admin.css'
import flecha from '../../../assets/Imagenes/Admin/flecha2.png'
import '../../../Static/MediaQueriesAdmin.css'
import '../../../Static/AdminNavegador.css'


export const AdminNavegador = () => {

  const [navegador, setCounter] = useState(true)

    const mostrarNavegador  = () => {setCounter(!navegador)}
  
    useEffect(() => {

      const config = document.getElementById('Admin-Navegador2')
      const img =  document.getElementById('imgFlecha')

      if(navegador === true){
        config.style.marginLeft = "0"
        img.style.transform = "rotate(180deg)"

      }else{
        config.style.marginLeft = "-260px"
        config.style.transition = "all 0.5s"
        img.style.transition = "all 0.5s"
        img.style.transform = "rotate(0deg)"
      }
  
    },[navegador]);

  return (    
    <div id='Admin-Navegador2' className='Admin-Navegador'>
      <div className='box-Logo' >
        <NavLink to='/home' >
          <Imagenes url={booker} clase='logo'/>
        </NavLink>
      </div>
      <div onClick={mostrarNavegador} className='config'>
        <div className="flechaBox">
          <Imagenes id='imgFlecha' url={flecha} />
        </div>
      </div>
      <div className='Menu-Padre'>
        <div className='box-menu' >
            <NavLink to='/Admin' className='vinculo' activeclassname="active">              
              <div className='box-vinculos'>
                <i className="fa-solid fa-lock"></i>
                <p>Inicio</p>
              </div>
            </NavLink>
            <p className='LyE'>USUARIOS</p>         
            <NavLink to='/TEstudiantes' className='vinculo'> 
              <div className='box-vinculos'>
                <i className="fa-solid fa-graduation-cap"></i>
                <p>Estudiantes</p>
                <span></span>
              </div>
            </NavLink>
            <NavLink to='/TBibliotecarios' className='vinculo'> 
              <div className='box-vinculos'>
                <i className="fa-solid fa-graduation-cap"></i>
                <p>Bibliotecarios</p>
                <span></span>
              </div>
            </NavLink>
            <p className='LyE'>GESTIÓN LIBROS</p> 
            <NavLink to='/TLibros' className='vinculo'>              
              <div className='box-vinculos'>
                <i className="fa-solid fa-book"></i>
                <p>Libros</p>
                <span></span>
              </div>
            </NavLink>
              <NavLink to='/AutoresCategorias' className='vinculoCateAuto'>              
                <div className='box-vinculoCateAuto'>
                  <i className="fa-solid fa-chalkboard-user"></i>
                  <p>Categorias y Autores</p>                
                </div>
              </NavLink>
              <NavLink to='/EditorialIdioma' className='vinculo'>              
                <div className='box-vinculos'>
                  <i className="fa-solid fa-warehouse"></i>
                  <p>Editorial e Idioma</p>                
                </div>
              </NavLink>
            <NavLink to='/Reservas' className='vinculo'>
              <div className='box-vinculos'>
                <i className="fa-solid fa-calendar-check"></i>
                <p>Reservas</p>
                <span></span>
              </div>
            </NavLink>
            <NavLink to='/Prestamo' className='vinculo'>
              <div className='box-vinculos'>
              <i className="fa-solid fa-file-circle-plus"></i>
                <p>Prestamos</p>                
                <span></span>
              </div>
            </NavLink>
            <p className='LyE'>INFRACCIONES</p>
              <NavLink to='/TablaInfraciones' className='vinculo'>              
                <div className='box-vinculos'>
                  <i className="fa-solid fa-bullhorn"></i>
                  <p>Infracciones</p>                
                </div>
              </NavLink>

            <p className='LyE'>EVENTOS</p>
              <NavLink to='/TEventos' className='vinculo'>              
                <div className='box-vinculos'>
                  <i className="fa-regular fa-calendar-plus"></i>
                  <p>Eventos</p>                
                </div>
              </NavLink>
        </div>              
      </div>
      
    </div>
  )
}
