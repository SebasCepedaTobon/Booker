import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'

import { Imagenes } from '../Imagenes/Imagenes'
import booker from '../../../assets/Imagenes/logos/BookerAdmin.png'

export const AdminNavegador = () => {

  const [menu, setCounter] = useState(true)

    const boxBuscador  = () => {setCounter(!menu)}
  
    useEffect(() => {
      const novedades = document.querySelector('.novedades')

      if(menu === true){
        novedades.style.display = "none";
        novedades.style.transform="scale(0.6)"      

      }else{
        novedades.style.display = "flex";
        novedades.style.transform="scale(1)"
      }
  
    },[menu]);

  return (    
    <div className='Admin-Navegador'>
      <div className='box-Logo' >
        <Imagenes url={booker} clase='logo'/>
      </div>  
      <div className='Menu-Padre'>
        <div className='box-menu' >
            <NavLink to='/Admin' className='vinculo'>              
              <div className='box-vinculos'>
                <i class="fa-solid fa-lock"></i>
                <p>Admin</p>
                <span></span>
              </div>
            </NavLink>
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
            <NavLink to='/Reservas' className='vinculo'>
              <div className='box-vinculos'>
                <i class="fa-solid fa-calendar-check"></i>
                <p>Reservas</p>                
                <span></span>
              </div>
            </NavLink>
              <div className='vinculo'>           
                <div className='box-vinculos'>
                  <i class="fa-solid fa-file-invoice-dollar"></i>
                  <span></span>
                  <p>Infracciones</p>                
                </div>
              </div>
            <div className="novedades">
              <NavLink to='/Multas' className='vinculo'>           
                <div className='box-vinculos'>
                  <i class="fa-solid fa-file-invoice-dollar"></i>
                  <span></span>
                  <p>Multas</p>                
                </div>
              </NavLink>
            
              <NavLink to='/home' className='vinculo'>              
                <div className='box-vinculos'>
                  <i class="fa-solid fa-circle-exclamation"></i>
                  <p>Novedades</p>
                  <span></span>
                </div>
              </NavLink>
            </div>
        </div>              
      </div>
    </div>
  )
}
