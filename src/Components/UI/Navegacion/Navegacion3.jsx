import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Imagenes } from '../Imagenes/Imagenes'
import { NavLink } from 'react-router-dom'
import { useStateValue } from '../../../StateProvider'


export const Navegacion3 = () => {

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
    }, [])

    const [{reservas}, dispatch] = useStateValue();


    const QuitarAdmin = () =>{
      if(tipo_usuario === "E"){
        document.querySelector('.admin-icon3').classList.toggle('show')
      }
    }


  return (
    <div className='conatiner-nav-tres'>
        <div className="conatiner-img-enlaces">
            <NavLink to='/Perfil'>
                <div className="container-avatar"><Imagenes url={Documento.imagen}/></div>
            </NavLink>
            <div className="enlaces-nav">
                <NavLink to='/Historial' className='nav-icon'>
                <i class="fa-solid fa-bookmark"></i>
                Reservas
                </NavLink>
                <NavLink to='/Home' className='nav-icon'>
                <i class="fa-solid fa-house"></i>
                Home
                </NavLink>
                <div className="admin-icon3">
                  <NavLink to='/Admin' className='nav-icon'>
                    <i class="fa-solid fa-user-pen"></i>Admin
                  </NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}
