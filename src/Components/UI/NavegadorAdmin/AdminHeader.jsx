import { useState, useEffect } from 'react';
import { Imagenes } from '../Imagenes/Imagenes'
import '../../../Static/Admin.css'
import '../../../Static/MediaQueriesAdmin.css'
import '../../../Static/AdminHeader.css'
import axios from 'axios';
import perfil from '../../../assets/Imagenes/perfil.jpeg';
import NoDisponibles from '../../../assets/Imagenes/Admin/NoDisponibles1.png';
import { NavLink } from 'react-router-dom';
import React from 'react';

let sizeDisponibles
let sizeNoDisponibles

let id_bibliotecario

let imagenPerfil

export const AdminHeader = () => {

    const [libros, setLibros] = useState([])
    const [librosNo, setLibrosNo] = useState([])
    const [bibliotecario, setBibliotecario] = useState()
    const [doc_bibliotecarios , setDoc_bibliotecarios] = useState()

    

    const peticionGetBibliotecario=()=>{

      axios.get("https://bookerbackapi.herokuapp.com/modulos/bibliotecarios/" + id_bibliotecario + "/").then(response=>{
        setBibliotecario(response.data);
        setDoc_bibliotecarios(response.data.doc_bibliotecario)
        
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

    sizeDisponibles = librosNo.length
    sizeNoDisponibles = libros.length
  
    useEffect(() => {

      id_bibliotecario = localStorage.getItem('id_bibliotecario')

      console.log(id_bibliotecario);

      peticionGetBibliotecario()
      librosDisponibles()
      librosNoDisponibles()
  
    },[]);
    
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
                <NavLink to='/home'>
                    <i className="fa-solid fa-calendar-check"></i>
                </NavLink>
                <NavLink to='/home'>
                    <i className="fa-solid fa-gear"></i>
                </NavLink>
                <div className="box-perfilHeader">
                    <div className="userHeader">
                        <p>Sebastian</p>
                        <p>admin</p>
                    </div>
                    <div className='perfil'>
                      <Imagenes url={perfil} clase='icono'/>
                    </div>
                </div>           
            </div> 
        </div>
    </div>    
  )
}
