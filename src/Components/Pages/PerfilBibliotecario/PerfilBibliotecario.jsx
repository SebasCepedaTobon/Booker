import React, { useState, useEffect } from 'react'
import { AdminHeader } from '../../UI/NavegadorAdmin/AdminHeader'
import { AdminNavegador } from '../../UI/NavegadorAdmin/AdminNavegador'
import '../../../Static/PerfilBibliotecario.css'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { Imagenes } from '../../UI/Imagenes/Imagenes'


let id_bibliotecario
let imagenPerfil
let nombres

id_bibliotecario = localStorage.getItem('id_bibliotecario')

export const PerfilBibliotecario = () => {

    const [bibliotecario, setBibliotecario] = useState()
    const [imagen, setImagen] = useState()

    const peticionGetBibliotecario=()=>{

        axios.get("https://bookerbackapi.herokuapp.com/modulos/bibliotecarios/" + id_bibliotecario + "/").then(response=>{
          console.log(response.data);
          setBibliotecario(response.data.nombres)
          setImagen(response.data.doc_bibliotecario.imagen)
          console.log(imagenPerfil);
          console.log(nombres);
          
        }).catch(error=>{
          console.log(error.message);
        })
      }

      useEffect(() => {
        
        peticionGetBibliotecario()
       
      }, [])
      
    


    return (
        <div className='MainAdministrativo'>
          <div className="box-AdminNavegador">
            <AdminNavegador />
          </div>
          <div className="box-Header-Admin">
            <AdminHeader />
            <div className="TablaPerilUsuario">
                <div className="boxperfilbibliotecario">
                    <div className="box1">
                        <div className="datosBibliotecario">
                            <div className="theDatos">
                                <div className='theDatosImg'>
                                    <Imagenes clase='icono' url={imagen} />
                                    <button>Editar</button>
                                </div>
                                <div className='theDatosP'>
                                    <p className='N'>{bibliotecario}</p>
                                    <p className='C'>Bibliotecario</p>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    <div className="box2">
                        <div className="butonesPerfilBibliotecario">
                            <NavLink className='card-Admin' to='/TEstudiantes'>
                                <div className='btn-perfilBibliotecario'>
                                    <p>Editar Perfil</p>
                                    <span></span>
                                </div>
                            </NavLink>
                            <NavLink className='card-Admin' to='/TEstudiantes'>
                                <div className='btn-perfilBibliotecario btn-libroPerfil'>
                                    <p>Libros Favoritos</p>
                                    <span></span>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      )
}
