import React, { useState, useEffect } from 'react'
import { AdminHeader } from '../../UI/NavegadorAdmin/AdminHeader'
import { AdminNavegador } from '../../UI/NavegadorAdmin/AdminNavegador'
import '../../../Static/ImportarEstudiantes.css'
import Swal from 'sweetalert2';
import axios from 'axios'
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import { NavLink } from 'react-router-dom';

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

        Swal.fire({
          title: '¿Esta seguro de importar la lista de estudiantes?',
          icon: 'warning',
          confirmButtonText: 'Si, importar',
          showCancelButton: true,
          cancelButtonText: 'No, cancelar',
          reverseButtons: true
        }).then((resultado) => {
          if (resultado.isConfirmed) {
            metodoPost(f)
          }
        })
        
    }

    const metodoPost = async(f) =>{

      await axios.post("https://bookerbackapi.herokuapp.com/importar-estudiantes/", f)
        .then(response => {
            console.log(response.data);
            Swal.fire({
              title: 'Estudiantes importados corectamente',
              icon: 'success',
              confirmButtonText: 'OK'
            }).then((resultado) => {
              if (resultado.isConfirmed) {
                window.location.href = "/TEstudiantes"
              }
            })
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
        <div className="box-Tabla">
          <div className="boxImpotar">
            <Imagenes clase='imgManual' url="http://res.cloudinary.com/bookerimg/image/upload/v1655873669/a9ob4cbewkz6nnidrpoo.png"/>
            <div className="box-importarAcvhivos">
            <div className="inputBtn">
              <a target={'_blank'} href='https://bookerbackapi.herokuapp.com/media/csv_estudiantes/plantilla_estudiantes.csv' >
                <button>Descargar Plantilla</button>                
              </a>
              </div>
              <div className="inputBtn">
                <div className='box-inputImportar'>
                  <div className="fileImportar" id="srcFileImport" >
                      <input
                        type="file" name="csv" onChange={(e) => {
                          mostrarArchivo(e)
                          subirArchivos(e.target.files)
                        }} />
                      <h5 className='nomImg'></h5>
                    </div>
                </div>
                <button onClick={()=>insertarArchivos()} >Importar</button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
