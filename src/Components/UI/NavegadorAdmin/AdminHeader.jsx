import { useState, useEffect } from 'react';
import { Imagenes } from '../Imagenes/Imagenes'

import perfil from '../../../assets/Imagenes/perfil.jpeg';
import { NavLink } from 'react-router-dom';
import React from 'react';


export const AdminHeader = () => {

    const [buscar, setCounter] = useState(true)

    const boxBuscador  = () => {setCounter(!buscar)}
  
    useEffect(() => {
      const buscador = document.getElementById('buscador')
      const HeaderAdmin = document.querySelector('.HeaderAdmin')

      if(buscar === true){
        buscador.style.visibility = "hidden"
        HeaderAdmin.style.visibility = "visible"
        

      }else{
        buscador.style.visibility = "visible"
        HeaderAdmin.style.visibility = "hidden"
      }
  
    },[buscar]);


  return (
    <div className='AdminHeader'>
        <div className="HeaderAdmin">
            <p className='sitio'>Sitio Administrativo</p>
            <div className="HeaderIconos">
                <i onClick={boxBuscador} class="fa-solid fa-magnifying-glass"></i>
                <NavLink to='/home'>
                    <i class="fa-solid fa-calendar-check"></i>
                </NavLink>
                <NavLink to='/home'>
                    <i class="fa-solid fa-gear"></i>
                </NavLink>
                <div className="box-perfilHeader">
                    <div className="userHeader">
                        <p>Sebastian</p>
                        <p>admin</p>
                    </div>
                    <div className='perfil' >
                        <Imagenes url={perfil} clase='icono'/>
                    </div>
                </div>                
            </div>            
        </div>
        <div id='buscador' className="buscador">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input className='elInput' type="text" autoFocus placeholder='Buscar...'/>
            <i onClick={boxBuscador} class="fa-solid fa-xmark"></i>
        </div>
    
    </div>    
  )
}
