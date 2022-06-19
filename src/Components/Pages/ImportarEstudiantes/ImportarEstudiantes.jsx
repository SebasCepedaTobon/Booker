import React, { useState, useEffect } from 'react'
import { AdminHeader } from '../../UI/NavegadorAdmin/AdminHeader'
import { AdminNavegador } from '../../UI/NavegadorAdmin/AdminNavegador'
import '../../../Static/ImportarEstudiantes.css'
import axios from 'axios'

export const ImportarEstudiantes = () => {

    const [archivos, setArchivos] = useState(null)

    const subirArchivos = e =>{
        setArchivos(e);
    }

    const insertarArchivos = async()=>{
        const f = new FormData();

        for (let index = 0; index < archivos.length; index++) {
            f.append("csv", archivos[index]);
        }

        await axios.post("https://bookerbackapi.herokuapp.com/importar-estudiantes/", f)
        .then(response => {
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }

    let imagen_libro

    const mostrarArchivo = (e) => {
        console.log(e);
        const images = e.target.files
        imagen_libro = images[0].name;
        const tituImagen = document.querySelector(".nomImg");
        console.log(tituImagen);
        tituImagen.innerText = imagen_libro;
        // setearImagen(e)
      };


  return (
    <div className='MainAdministrativo'>
      <div className="box-AdminNavegador">
        <AdminNavegador />
      </div>
      <div className="box-Header-Admin">
        <AdminHeader />
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div className="box-importarAcvhivos">            
            <div className="file-select" id="src-file1" >
                <input
                  type="file" name="csv" onChange={(e) => {
                    mostrarArchivo(e)
                    subirArchivos(e.target.files)
                  }} />
                <h5 className='nomImg'></h5>
              </div>
            <button onClick={()=>insertarArchivos()} >Importar</button>
        </div>
      </div>
    </div>
  )
}
