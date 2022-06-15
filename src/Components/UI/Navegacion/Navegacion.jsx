import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Imagenes } from '../Imagenes/Imagenes'
import logo from '../../../assets/Imagenes/logos/Booker1.png'
import { NavLink } from 'react-router-dom'
import { useStateValue } from '../../../StateProvider'

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

  const [{reservas}, dispatch] = useStateValue();


  

  


 
    
        
    
            
   
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
          <NavLink to='/Home' className='nav-icon'>
            <i class="fa-solid fa-house"></i>Home
          </NavLink>
          <div className="admin-icon">
            <NavLink to='/Admin' className='nav-icon'>
              <i class="fa-solid fa-user-pen"></i>Admin
            </NavLink>
          </div>
          <NavLink to='/Perfil' className="Perfil-icon"><Imagenes url={Documento.imagen} /></NavLink>
          <div className='menu-btn' onClick={abrir}>
            <i class="fas fa-bars" ></i>
          </div>
        </div>
      </div>
      
    </>
   
  )
}
