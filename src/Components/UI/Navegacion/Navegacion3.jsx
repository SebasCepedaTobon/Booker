import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Imagenes } from '../Imagenes/Imagenes'
import { NavLink } from 'react-router-dom'
import { useStateValue } from '../../../StateProvider'
import UsuarioInactivo from '../../../assets/Imagenes/Admin/usuario.png'
import { Logout } from '../../../Logout'


export const Navegacion3 = () => {

    const id_estudiante = localStorage.getItem('id_estudiante')
    const tipo_usuario = localStorage.getItem('tipo_usuario')

  const [Documento, setDocumento] = useState({})
  const [nombre, setNombre] = useState({})



  const url = "https://bookerapi.onrender.com/modulos/estudiantes/" + id_estudiante+ '/'

  const PedirDatos = () =>{
    axios.get(url).then(response=>{
      setDocumento(response.data.doc_estudiante)
      setNombre(response.data)
    }).catch(error=>{
      console.log(error.message);
    })
       

  }


  
  useEffect(() => {
      PedirDatos() 
      
    }, [])

    const [{reservas}, dispatch] = useStateValue();





  return (
    <div className='conatiner-nav-tres'>
        <div className="conatiner-img-enlaces">
          <div className="img-nombre-p">
          {Documento.imagen === null ?
            
              <NavLink to='/Perfil'>
                <div className="container-avatar"><Imagenes url={UsuarioInactivo}/></div>
              </NavLink>
            :
              <NavLink to='/Perfil'>
                <div className="container-avatar"><Imagenes url={Documento.imagen}/></div>
              </NavLink>
         
          }
           
              <p className='nombre-user'>{nombre.nombres}</p>

            </div>
          
            <div className="enlaces-nav">
                <NavLink to='/Historial' className='nav-icon'>
                <i class="fa-solid fa-bookmark"></i>
                Reservas
                </NavLink>
                <NavLink to='/Home' className='nav-icon'>
                <i class="fa-solid fa-house"></i>
                Home
                </NavLink>
                <NavLink to='/Libros' className='nav-icon'>
                <i class="fa-solid fa-book"></i>
                Libros
                </NavLink>
                <NavLink to='/Favoritos' className='nav-icon'>
                <i class="fa-solid fa-heart"></i>
                Favoritos
                </NavLink>
                <NavLink to='/Perfil' className='nav-icon'>
                <i class="fa-solid fa-user"></i>
                Perfil
                </NavLink>
                <NavLink to='/' onClick={Logout} className='nav-icon'>
                <i class="fa-solid fa-chalkboard-user"></i>
                Cerrar Sesion
                </NavLink>
               
            </div>
        </div>
    </div>
  )
}
