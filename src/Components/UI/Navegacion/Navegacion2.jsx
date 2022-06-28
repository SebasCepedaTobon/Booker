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

  const abrir = () =>{
    document.querySelector('.conatiner-nav-tres').classList.toggle('show')
  }

  const QuitarAdmin = () =>{
    if(tipo_usuario === "E"){
      document.querySelector('.admin-icon').classList.toggle('show')
    }
  }


  
  const [libros, setLibros] = useState([])
  console.log(libros)


  const [busqueda, setBusqueda] = useState("");


  const buscar = (e) => {
    e.preventDefault();
    fetch('https://bookerbackapi.herokuapp.com/modulos/libros/?search='+busqueda)
    .then(res => res.json())
    .then(data =>{
      setLibros(data)
    })


  }


  const cambiarState = (e) =>{
    setBusqueda(e.target.value)
  }

  return (
    <>
      <div className="nav2">
        <div className="logo">
          <NavLink to='/Home'><Imagenes url={logo} /></NavLink>
        </div>
        <div id="container">
          <form  id="searchform" onSubmit={buscar}>
            <label for="s">
              <i class="fa-solid fa-magnifying-glass"></i>
            </label>
            <input 
            type="text"  
            placeholder="Buscar" 
            class="" 
            id="s" 
            onChange={cambiarState}
            />
            <NavLink to={"/Busqueda/"+busqueda}><button type='submit'></button></NavLink>
          </form>
        </div>
        <div className="nav-a2">
          <NavLink to='/Historial'>
            <div className="contador">
              <p>{reservas?.length}</p>
            </div>
            <i class="fa-solid fa-bookmark" id='icon-contador'></i>
          </NavLink>
          <NavLink to='/libros'>
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
            <div className='menu-btn' onClick={abrir}>
              <i class="fas fa-bars" ></i>
            </div>
        </div>

      </div>
    </>
    
  )
}