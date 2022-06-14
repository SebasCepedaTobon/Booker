import React, {useEffect, useState} from 'react'
import { Imagenes } from '../Imagenes/Imagenes'
import logo from '../../../assets/Imagenes/logos/Booker1.png'
import axios from 'axios'


import { NavLink } from 'react-router-dom'

// import { FaHome } from 'react-icons/fa'
// import { RiAdminFill } from 'react-icons/ri'
// import { ImBooks } from 'react-icons/im'

import { useStateValue } from '../../../StateProvider'




export const Navegacion2 = () => {

  const id_estudiante = localStorage.getItem('id_estudiante')

  const [Documento, setDocumento] = useState({})


  const url = "https://bookerbackapi.herokuapp.com/modulos/estudiantes/" + id_estudiante+ '/'

  const PedirDatos = () =>{
    axios.get(url).then(response=>{
      setDocumento(response.data.doc_estudiante)
    }).catch(error=>{
      console.log(error.message);
    })
       

  }

  

 


  
  useEffect(() => {
      PedirDatos() 
      //llenarInputs()
      
 
     

    }, [])

  const [{reservas}, dispatch] = useStateValue();

  const abrir = () =>{
    document.querySelector('.conatiner-nav-tres').classList.toggle('show')
  }

  return (
    <>
      <div className="nav2">
        <div className="logo">
          <NavLink to='/Home'><Imagenes url={logo} /></NavLink>
        </div>
        <div className="nav-a2">
          <NavLink to='/Historial'>
            <div className="contador">
              <p>{reservas?.length}</p>
            </div>
            <i class="fa-solid fa-bookmark" id='icon-contador'></i>
          </NavLink>
          <NavLink to='/Home' className='nav-icon'>
            <i class="fa-solid fa-house"></i>Home
          </NavLink>
          <NavLink to='/Admin' className='nav-icon'>
            <i class="fa-solid fa-user-pen"></i>Admin
          </NavLink>
            <div className='menu-btn' onClick={abrir}>
              <i class="fas fa-bars" ></i>
            </div>
        </div>

      </div>
    </>
    
  )
}