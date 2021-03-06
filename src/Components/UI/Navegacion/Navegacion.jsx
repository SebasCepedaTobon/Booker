import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Imagenes } from '../Imagenes/Imagenes'
import logo from '../../../assets/Imagenes/logos/Booker1.png'
import { NavLink } from 'react-router-dom'
import { useStateValue } from '../../../StateProvider'
import UsuarioInactivo from '../../../assets/Imagenes/Admin/usuario.png'

export const Navegacion = () => {

  const id_estudiante = localStorage.getItem('id_estudiante')
  const tipo_usuario = localStorage.getItem('tipo_usuario')

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
      QuitarAdmin()
      QuitarPerfil()
      
 
     

    }, [])

  const [{reservas, favoritos}, dispatch] = useStateValue();


  

  


 
    
        
    
            
   
  const abrir = () =>{
    document.querySelector('.conatiner-nav-tres').classList.toggle('show')
  }


  const QuitarAdmin = () =>{
    if(tipo_usuario === "E"){
      document.querySelector('.admin-icon').classList.toggle('show')
    }
  }

  const QuitarPerfil = () =>{
    if(tipo_usuario === "B"){
      document.querySelector('.Perfil-icon').classList.toggle('show')
    }
  }

  const ver = () =>{
    document.querySelector('.container-perfil-cerrar').classList.toggle('show')
  }


  





  return (
    <>
      <div className="nav">

        <NavLink to='/Home'><Imagenes url={logo} id="logo" /></NavLink>
        <div className="nav-a">
          <NavLink to='/Historial'>
            <div className="contador">
              <p>{reservas?.length}</p>
            </div>
            <i class="fa-solid fa-bookmark" id='icon-contador'></i>
          </NavLink>
          <NavLink to='/Favoritos'>
            <div className="contador2" id='favoritos-p'>
              <p>{favoritos?.length}</p>
            </div>
            <i class="fa-solid fa-heart"  id='icon-contador'></i>
          </NavLink>
          <NavLink to='/libros' className='nav-icon'>
            <i class="fa-solid fa-book"></i>Libros
          </NavLink>
          <NavLink to='/Home' className='nav-icon'>
            <i class="fa-solid fa-house"></i>Home
          </NavLink>
          <div className="admin-icon">
            <NavLink to='/Admin' className='nav-icon'>
              <i class="fa-solid fa-user-pen"></i>Admin
            </NavLink>
          </div>
          {Documento.imagen === null ?
          <>
            <NavLink to='' className="Perfil-icon" onClick={ver}><Imagenes url={UsuarioInactivo} /></NavLink>
          </>:
          <>
          <NavLink to='' className="Perfil-icon" onClick={ver}><Imagenes url={Documento.imagen} /></NavLink>
          </>
          }
          
          <div className='menu-btn' onClick={abrir}>
            <i class="fas fa-bars" ></i>
          </div>
        </div>
      </div>

      {/*<div className="container-perfil-cerrar">
        <a href="">ver perfil</a>
        <a href="">cerrar sesion</a>
  </div>*/}
      
    </>
   
  )
}
