import { useState, useEffect } from 'react';
import { Imagenes } from '../Imagenes/Imagenes'
import '../../../Static/Admin.css'
import '../../../Static/MediaQueriesAdmin.css'
import '../../../Static/AdminHeader.css'
import '../../../Static/AdminNavegador.css'
import axios from 'axios';
import NoDisponibles from '../../../assets/Imagenes/Admin/NoDisponibles1.png';
import { NavLink } from 'react-router-dom';
import React from 'react';
import usuario from '../../../assets/Imagenes/Admin/usuario.png'


let sizeDisponibles
let sizeNoDisponibles

let id_bibliotecario
let imagenPerfil
let nombres

export const AdminHeader = () => {

    const [libros, setLibros] = useState([])
    const [librosNo, setLibrosNo] = useState([])
    const [cerrar, setCounter] = useState(true)

    sizeDisponibles = librosNo.length
    sizeNoDisponibles = libros.length

    

    const peticionGetBibliotecario=()=>{

      axios.get("https://bookerbackapi.herokuapp.com/modulos/bibliotecarios/" + id_bibliotecario + "/").then(response=>{
        console.log(response.data);
        imagenPerfil = response.data.doc_bibliotecario.imagen
        nombres = response.data.nombres
        
      }).catch(error=>{
        console.log(error.message);
      })
    }
    
    const librosDisponibles=()=>{

      axios.get("https://bookerbackapi.herokuapp.com/modulos/ejemplares/?estado=P").then(response=>{
        setLibros(response.data);
        
      }).catch(error=>{
        console.log(error.message);
      })
    }

    const librosNoDisponibles=()=>{
      axios.get("https://bookerbackapi.herokuapp.com/modulos/ejemplares/?estado=D").then(response=>{
        setLibrosNo(response.data);
        
      }).catch(error=>{
        console.log(error.message);
      })
    }

    const FormFlotante  = () => {setCounter(!cerrar)}

  
    useEffect(() => {

      id_bibliotecario = localStorage.getItem('id_bibliotecario')
      peticionGetBibliotecario()
      librosDisponibles()
      librosNoDisponibles()

      const box_perfil = document.getElementById('box-gertion-perfil')
      if(cerrar === true){
        box_perfil.style.visibility = "hidden"
        box_perfil.style.top = "15%"
      }else{
        box_perfil.style.visibility = "visible"
        box_perfil.style.top = "13%"
      }
    },[cerrar]);

  return (
    <div className='AdminHeader'>
        <div className="HeaderAdmin">
            <p className='sitio'>Sitio Administrativo</p>
            <div className='boxLibrosCantidad'>
              <i className="fa-solid fa-book" data-title='Libros Disponibles'></i>
              <div className="Disponible notificacionCantidad">
                <p>{sizeDisponibles}</p>
              </div>
              <Imagenes url={NoDisponibles}  />
              <div className="noDisponible notificacionCantidad">
                <p>{sizeNoDisponibles}</p>
              </div>
            </div>
            <div className="HeaderIconos">
                <div className="box-perfilHeader" onClick={FormFlotante}>
                    <div className="userHeader">
                        <p className='p1'>{nombres}</p>
                        <p className='p2'>bibliotecario</p>
                    </div>
                    <div className='perfil'>
                    {imagenPerfil === null
                      ? <Imagenes url={usuario} />
                      : <Imagenes clase='icono' url={imagenPerfil} />
                    }
                    </div>
                </div>           
            </div> 
        </div>
        <div id='box-gertion-perfil' className="box-gertion-perfil-bibliotecaio">
          <div className="vinculosPerfil">
            <NavLink to='/PerfilBibliotecario' className='vinculoPerfil'>
              <i className="fa-regular fa-user"></i>
                <p>Perfil</p>
            </NavLink>
            <NavLink to='/TLibros' className='vinculoPerfil'>
                <i class="fa-regular fa-circle-xmark"></i>
                <p>Cerrar sesión</p>
            </NavLink>
          </div>
        </div>
    </div>    
  )
}
