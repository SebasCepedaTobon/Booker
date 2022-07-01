import { useState, useEffect } from 'react';
import { Imagenes } from '../Imagenes/Imagenes'
import '../../../Static/Admin.css'
import '../../../Static/MediaQueriesAdmin.css'
import '../../../Static/AdminHeader.css'
import '../../../Static/AdminNavegador.css'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import React from 'react';
import {Logout} from '../../../Logout'

let id_bibliotecario

export const AdminHeader = () => {

    const [cerrar, setCounter] = useState(true)

    const [imagenPerfil1, setImagenPerfil1] = useState({})
    const [nombres, setNombres] = useState({})

    


    const peticionGetBibliotecario=()=>{
      axios.get("https://bookerbackapi.herokuapp.com/modulos/bibliotecarios/" + id_bibliotecario + "/")
      
      .then(response=>{
        setImagenPerfil1(response.data.doc_bibliotecario)
        setNombres(response.data)
        
      }).catch(error=>{
        console.log(error.message);
      })
    }

    const FormFlotante  = () => {setCounter(!cerrar)}

  
    useEffect(() => {
      const box_perfil = document.getElementById('box-gertion-perfil')
      if(cerrar === true){
        box_perfil.style.visibility = "hidden"
        box_perfil.style.top = "15%"
      }else{
        box_perfil.style.visibility = "visible"
        box_perfil.style.top = "13%"
      }
    },[cerrar]);

    useEffect(() => {
      id_bibliotecario = localStorage.getItem('id_bibliotecario')
      peticionGetBibliotecario()
    }, [])


  return (
    <div className='AdminHeader'>
        <div className="HeaderAdmin">
            <p className='sitio'>Sitio Administrativo</p>
            <div className="HeaderIconos">
                <div className="box-perfilHeader" onClick={FormFlotante}>
                    <div className="userHeader">
                        <p className='p1'>{nombres.nombres}</p>
                        <p className='p2'>bibliotecario</p>
                    </div>
                    <div className='perfil'>
                    {imagenPerfil1.imagen === null
                      ? <Imagenes clase='icono' url='https://res.cloudinary.com/bookerimg/image/upload/v1655750515/douilym0euozd22k61wv.png' />
                      : <Imagenes clase='icono' url={imagenPerfil1.imagen} />
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
            <NavLink to='/' className='vinculoPerfil'>
              <i onClick={Logout} className="fa-regular fa-circle-xmark"></i>
              <p>Cerrar sesión</p>
            </NavLink>
          </div>
        </div>
    </div>    
  )
}
