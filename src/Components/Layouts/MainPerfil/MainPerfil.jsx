import React, { useEffect, useState } from 'react'
import { BotonesPerfil } from '../../UI/BotonesPerfil/BotonesPerfil'
import axios from 'axios';


export const MainPerfil = () => {

    const [Datos, setDatos] = useState([])
    const [Estudiante, setEstudiante] = useState([])

    
    const id_estudiante = localStorage.getItem('id_estudiante')
    const url = "https://bookerbackapi.herokuapp.com/modulos/estudiantes/"

    const PedirDatos = () =>{
        axios.get(url + id_estudiante).then(response=>{
            setEstudiante(response.data);
            
          }).catch(error=>{
            console.log(error.message);
          })

    }

    const PedirDatosEstu = () =>{
        axios.get(url + id_estudiante).then(response=>{
            setDatos(response.data.doc_estudiante);
            
          }).catch(error=>{
            console.log(error.message);
          })

    }
   
    
    useEffect(() => {
        PedirDatos()
        PedirDatosEstu()
        // let email = Estudiante.doc_estudiante
        // email = email.email
        
      }, [])

   

  return (
    <div className='contenedor-perfil'>
        <BotonesPerfil/>
        <div className="datos-perfil">
            <h2 id='Tu-cuenta'>Tu cuenta</h2>
            <div className="p-hr">
                <p>Información Personal</p>
                <hr />
            </div>
            <div className="container-inputs">
                <div className="container-info">
                    <h4>Nombres</h4>
                    <p>{Estudiante.nombres}</p>
                </div>
                <div className="container-info">
                    <h4>Apellidos</h4>
                    <p>{Estudiante.apellidos}</p>
                    
                </div>
                <div className="container-info">
                    <h4>Correo Electronico</h4>
                    <p>{Datos.email}</p>
                </div>
                <div className="container-info">
                    <h4>Documento</h4>
                    <p>{Datos.doc}</p>
                    
                    
                </div>
                <div className="container-info">
                    <h4>Dirección</h4>
                    <p>{Estudiante.direccion}</p>  
                   
                </div>
      
                    <input type="file" />
                    
                    
             
            </div>
            <div className="btnGuardar">
                <button className='btn-guardar'>Editar</button>
            </div>
        </div>
    </div>
  )
}
