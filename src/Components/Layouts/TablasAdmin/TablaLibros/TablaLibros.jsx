import React, {useState, useEffect} from 'react';
import { Imagenes } from '../../../UI/Imagenes/Imagenes';
// import Swal from 'sweetalert2';
// import { AiTwotoneEdit, AiFillDelete } from 'react-icons/ai';
// import { TiDelete } from 'react-icons/ti';
// import { BiBookAdd } from 'react-icons/bi';

import cienAños from '../../../../assets/Imagenes/cienAños.jpg'
import { BotonesCrud } from '../../../UI/Botones/BotonesCrud';

import { AdminHeader } from '../../../UI/NavegadorAdmin/AdminHeader'
import { AdminNavegador } from '../../../UI/NavegadorAdmin/AdminNavegador'



export const TablaLibros = () => {


  const eliminacion = () =>{
    // Swal.fire({
    //   title: '¿Esta seguro de eliminar el libro?',
    //   icon: 'warning',
    //   confirmButtonText: 'Si, Eliminar',
    //   showCancelButton: true,
    //   cancelButtonText: 'No, cancelar',
    //   reverseButtons: true
    // }).then((resultado) => {
    //   if (resultado.isConfirmed) {
    //     Swal.fire(
    //       'Eliminado',
    //       'Libro eliminado correctamente',
    //       'success'
    //     )
    //   }
    // })
  }

  const [cerrar, setCounter] = useState(true)

  const ventanaFlotante  = () => {setCounter(!cerrar)}

  useEffect(() => {
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
              <div className='td-5'><p>Opciones</p></div>
            </div>
            <div className='Tabla-Info' >
            <div className='tr-1'>
              <div className='td-0'>
                <Imagenes clase='img' url={cienAños} />
              </div>
              <div className='td-1'>
                <p className='L1P'>Cien años de soledad</p>
              </div>
              <div className='td-2' >Grabriel García</div>
              <div className='td-3'>Literatura</div>
              <div className='td-5'>
                {/* <AiTwotoneEdit onClick={ventanaFlotante} className='edit'/>
                <AiFillDelete onClick={eliminacion} className='delete'/> */}
              </div>
            </div>
          </div>            
        </div>
        <div id='Activar-From' className="Activar-From">
          {/* <BiBookAdd onClick={ventanaFlotante} id='icono' className='icono'/> */}
        </div> 
        </div>
      </div>
      <div id='overlay' className='overlay'>
        <div className="from-tablas">            
          <div className='Libros-from' >
            <div className="from-Titulo">
            <div className="Desactivar-From">
                {/* <TiDelete onClick={ventanaFlotante } className='icono'/> */}
              </div>
              <h1>NUEVO LIBRO</h1>                
            </div>
            <form method="post">
              <div className='boxs-inputs'>          
                <div className="box-input">
                  <input type="text" required/>
                  <span></span>
                  <label>ISBN</label>
                </div>
           
                <div className="box-input">
                  <input type="text" required/>
                  <span></span>
                  <label>Nombre</label>
                </div>
                 
                <div className="box-input">
                  <input type="text" required/>
                  <span></span>
                  <label>N° Editorial</label>
                </div>
              </div>

              <div className="boxs-inputs">
                <div className="box-input">
                  <input type="text" required/>
                  <span></span>
                  <label>Edición</label>
                </div>
                <div className="box-input">
                  <input type="text" required/>
                  <span></span>
                  <label>Idioma</label>
                </div> 
                <div className="box-input">
                  <input type="text" required/>
                  <span></span>
                  <label>Palabras Clave</label>
                </div>
              </div>

              <div className="boxs-inputs">
                <div className="box-input">
                  <input type="text" required/>
                  <span></span>
                  <label>N° Paginas</label>
                </div>
                <div className="box-input">
                  <input type="text" required/>
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
                      <option value="" selected>Estado</option>
                      <option value="">Activo</option>
                      <option value="">Inactivo                 
                      </option>
                  </select>
                </div>
                <div className="box-textarea">
                  <textarea placeholder='Mensaje' name="mensaje" id=""></textarea>
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
