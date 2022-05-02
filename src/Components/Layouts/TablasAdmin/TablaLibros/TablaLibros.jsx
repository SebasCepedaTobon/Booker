import React, {useState, useEffect} from 'react';
import { Imagenes } from '../../../UI/Imagenes/Imagenes';
import Swal from 'sweetalert2';

import { BotonesCrud } from '../../../UI/Botones/BotonesCrud';
import { AdminHeader } from '../../../UI/NavegadorAdmin/AdminHeader'
import { AdminNavegador } from '../../../UI/NavegadorAdmin/AdminNavegador'



export const TablaLibros = () => {


  const mostrarImg = () =>{
    const inputImg = document.getElementById('inputImg');
    const nomImg = document.querySelector('.nomImg')
    nomImg.innerText = inputImg.files[0].name
  }


  const eliminacion = () =>{
     Swal.fire({
        title: '¿Esta seguro de eliminar el libro?',
        icon: 'warning',
        confirmButtonText: 'Si, Eliminar',
        showCancelButton: true,
        cancelButtonText: 'No, cancelar',
        reverseButtons: true
     }).then((resultado) => {
       if (resultado.isConfirmed) {
         Swal.fire(
           'Eliminado',
           'Libro eliminado correctamente',
           'success'
         )
      }
    })
  }

  const [cerrar, setCounter] = useState(true)
  const [libros, setLibros] = useState([])

  const cargaLibro = () => {
    fetch("http://127.0.0.1:8000/modulos/libros/")
    .then(res => res.json())
    .then((data) =>{
      setLibros(data)
      console.log(data)
    })
  }

  const ventanaFlotante  = () => {setCounter(!cerrar)}

  useEffect(() => {
    cargaLibro()
    const overlay = document.getElementById('overlay')
    const from_tablas = document.querySelector('.from-tablas')

    if(cerrar === true){
      overlay.style.visibility = "hidden"
      from_tablas.style.transform="scale(0.6)"
      from_tablas.style.opacity="0"
    }else{
      overlay.style.visibility = "visible"
      from_tablas.style.transform="scale(1)"
      from_tablas.style.opacity="2"
    }

  },[cerrar]);

  const addLibro = () => {
    const nombreLibro = document.getElementById('nombreLibro')
    console.log(nombreLibro)
    nombreLibro.value = ''
    ventanaFlotante()
  }

  const editarLibro = (e) => {
    const btnId = e.target.id
    console.log(btnId)

    fetch("http://127.0.0.1:8000/modulos/libros/" + btnId)
    .then(res => res.json())
    .then((data) =>{

      /*setLibro(data)*/
      llenarDatos(data)
    })
  }

  let cat = "";

  const llenarDatos = (datos) => {

    const imagenLibro = document.querySelector('.img')
    const nombreLibro = document.getElementById('nombreLibro')
    nombreLibro.value = datos.nombre
    const idioma = document.querySelector('.td-2')
    ventanaFlotante()

  }

  return (
    <div className='MainAdministrativo'>
      <div className="box-AdminNavegador">
        <AdminNavegador/>
      </div>
      <div className="box-Header-Admin">
        <AdminHeader/>
        <div className='box-Tabla' >
          <div className='Tabla'>
            <div className="TituloLibro">
              Libros
            </div>
            <div className='tr'>
              <div className='td-0'><p>Imagen</p></div>
              <div className='td-1' ><p>Nombre</p></div>
              <div className='td-2' ><p>Idioma</p></div>
              <div className='td-3'><p>Categoria</p></div>
              <div className='td-6'><p>Estado</p></div>
              <div className='td-5'><p>Opciones</p></div>
            </div>
            <div className='Tabla-Info' >
              {
                libros.map((libro, index) => 
                  
                  <div key={index} className='tr-1'>
                    <div className='td-0'>
                      <Imagenes clase='img' url={libro.imagen_libro} />
                    </div>
                    <div className='td-1'>
                      <p className='L1P'>{libro.nombre}</p>
                    </div>
                    <div className='td-2' >{libro.id_idioma.nombre}</div>

                    <div className='td-3'>                    
                    
                    {
                      libro.categorias.map((cate) => cate.nombre).join(", ")
                    }
                    </div>

                    <div className='td-switch'>
                      <label class="switch">
                        <input type="checkbox"/>
                        <span class="slider"></span>
                      </label>
                    </div>
                    <div className='td-5'>
                      <i onClick={editarLibro} id={libro.id_libro} class="fa-solid fa-pen-to-square"></i>
                      <i  onClick={eliminacion} id={libro.id_libro} class="fa-solid fa-trash-can" ></i>
                    </div>
                  </div>
                  )}
                </div>
              </div>
        <div id='Activar-From' className="Activar-From">
        <i onClick={addLibro} class="fa-solid fa-folder-plus"></i>
        </div> 
        </div>
      </div>
      <div id='overlay' className='overlay'>
        <div className="from-tablas">            
          <div className='Libros-from' >
            <div className="from-Titulo">
            <div className="Desactivar-From">
              <i onClick={addLibro} class="fa-solid fa-xmark"></i>
            </div>
              <h1>NUEVO LIBRO</h1>                
            </div>
            <form method="">
              <div className='boxs-inputs'>          
                <div className="box-input">
                  <input type="text" required/>
                  <span></span>
                  <label>ISBN</label>
                </div>
           
                <div className="box-input">
                  <input id='nombreLibro' type="text" required/>
                  <span></span>
                  <label>Nombre</label>
                </div>
                <div className="box-input">
                  <input type="text" required/>
                  <span></span>
                  <label>Edición</label>
                </div>
                
              </div>              

              <div className="boxs-inputs">
                <div className="box-input">
                  <input type="number" required/>
                  <span></span>
                  <label>N° Paginas</label>
                </div>
                <div className="box-input">
                  <input type="number" required/>
                  <span></span>
                  <label>N° Capitulos</label>
                </div>
                <div className="box-input">
                  <input type="text" required/>
                  <span></span>
                  <label>Alto</label>
                </div>
              </div>

              <div className="boxs-inputs">
                <div className="box-input">
                  <input type="text" required/>
                  <span></span>
                  <label>Ancho</label>
                </div><div className="box-input">
                  <input type="text" required/>
                  <span></span>
                  <label>Peso</label>
                </div><div className="box-input">
                  <input type="text" required/>
                  <span></span>
                  <label>Presentación</label>
                </div>
              </div>
              <div className="boxs-inputs">
              <div className="box-input">
                  <input type="text" required/>
                  <span></span>
                  <label>Anexos</label>
                </div>
                
                <div className="box-select">
                  <select>
                      <option value="" selected>Idioma</option>
                      <option value="">Ingles</option>
                      <option value="">Español</option>
                      <option value="">Frances</option>
                  </select>
                </div>
                <div className="box-select">
                  <select>
                      <option value="" selected>Autores</option>
                      <option value="">Gabriel Garcia Marquez</option>
                      <option value="">Hector Habad</option>
                  </select>
                </div>
              </div>
              <div className="boxs-inputs">
                <div className="box-select">
                  <select>
                      <option value="" selected>Editorial</option>
                      <option value="">Editorial 1</option>
                      <option value="">Editorial 2</option>
                  </select>
                </div>                
                <div className="box-select">
                  <select>
                      <option value="" selected>Estado</option>
                      <option value="">Activo</option>
                      <option value="">Inactivo</option>
                  </select>
                </div>
                <div className="box-textarea">
                  <textarea placeholder='Descripción' name="mensaje" ></textarea>
                  <span></span>
                  <label htmlFor=""></label>
                </div>
              </div>
              <div className="boxs-inputs">
                <div className="box-select">
                  <select>
                      <option value="" selected>Categorias</option>
                      <option value="">Terror</option>
                      <option value="">Infantil</option>
                      <option value="">Comedia</option>
                  </select>
                </div>
                <div class="file-select" id="src-file1" >
                  <input 
                  type="file"
                  name="src-file1"
                  id='inputImg'
                  onChange={mostrarImg}
                  />
                  <h5 className='nomImg'></h5>
                </div>
                <div className="box-textarea">
                  <textarea placeholder='Palabras Claves' name="mensaje" id=""></textarea>
                  <span></span>
                  <label htmlFor=""></label>
                </div>
              </div>                
              <BotonesCrud/>                
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
