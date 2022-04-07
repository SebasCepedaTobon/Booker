import React, {useState, useEffect} from 'react'
import { Imagenes } from '../../../UI/Imagenes/Imagenes'
import { AiTwotoneEdit, AiFillDelete } from 'react-icons/ai';
import booker from '../../../../assets/Imagenes/logos/Booker1.png'
import search from '../../../../assets/Imagenes/iconos/search.png'
import Swal from 'sweetalert2'
import { TiDelete } from 'react-icons/ti';
import { BiBookAdd } from 'react-icons/bi';
import cienAños from '../../../../assets/Imagenes/cienAños.jpg'
import { BotonesCrud } from '../../../UI/Botones/BotonesCrud';


export const TablaLibros = () => {


  const eliminacion = () =>{
    Swal.fire({
      title: '¿Esta seguro de eliminar este libro?',
      icon: 'warning',
      confirmButtonText: 'Si, Eliminar',
      showCancelButton: true,
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        Swal.fire(
          'Eliminado',
          'El libro se elimino correctamente',
          'success'
        )
      }
    })
  }

  const [cerrar, setCounter] = useState(true)

  const ventanaFlotante  = () => {setCounter(!cerrar)}

  useEffect(() => {
    const overlay = document.getElementById('overlay')
    const fromLibros = document.querySelector('.fromLibros')

    if(cerrar === true){
      overlay.style.visibility = "hidden"
      fromLibros.style.transform="scale(0.6)"
      fromLibros.style.opacity="0"
    }else{
      overlay.style.visibility = "visible"
      fromLibros.style.transform="scale(1)"
      fromLibros.style.opacity="2"
    }

  },[cerrar]);


  return (
    <div className='MainTablaLibros'>
        <div className="bannerLibros">
            <Imagenes url={booker} />
            <div className='BTLibros'>
                <p>Lista de Libros</p>
                <div className="barra-busquedaa">
                    <input type="text" placeholder='BUSCAR' id='buscarr' />
                    <a href=""><Imagenes url={search} id="searchh"/></a>
                </div>
            </div>                  
        </div>
        <div className='tablasLibros' >
          <div className='tablaIncio'>
            <div className='L'>
              <div className='L0'><p>Imagen</p></div>
              <div className='L1' ><p>Nombre</p></div>
              <div className='L2' ><p>Idioma</p></div>
              <div className='L3'><p>Categoria</p></div>
              <div className='L5'><p>Opciones</p></div>
            </div>
            <div className='TablaLibros' >

            <div className='LL'>
              <div className='L0'>
                <Imagenes clase='img' url={cienAños} />
              </div>
              <div className='L1'>
                <p className='L1P'>Cien años de soledad</p>
              </div>
              <div className='L2' >Grabriel García</div>
              <div className='L3'>Literatura</div>
              <div className='L5'>
                <AiTwotoneEdit onClick={ventanaFlotante} className='edit'/>
                <AiFillDelete className='delete'/>
              </div>
            </div>

            <div className='LL2'>
              <div className='L0'>
                <Imagenes clase='img' url={cienAños} />
              </div>
              <div className='L1'>
                <p className='L1P'>Cien años de soledad</p>
              </div>
              <div className='L2' >Grabriel García</div>
              <div className='L3'>Literatura</div>
              <div className='L5'>
                <AiTwotoneEdit onClick={ventanaFlotante} className='edit'/>
                <AiFillDelete onClick={eliminacion} className='delete'/>  
              </div>
            </div>

            <div className='LL'>
              <div className='L0'>
                <Imagenes clase='img' url={cienAños} />
              </div>
              <div className='L1'>
                <p className='L1P'>Cien años de soledad</p>
              </div>
              <div className='L2' >Grabriel García</div>
              <div className='L3'>Literatura</div>
              <div className='L5'>
                <AiTwotoneEdit onClick={ventanaFlotante} className='edit'/>
                <AiFillDelete className='delete'/>
              </div>
            </div>

            <div className='LL2'>
              <div className='L0'>
                <Imagenes clase='img' url={cienAños} />
              </div>
              <div className='L1'>
                <p className='L1P'>Cien años de soledad</p>
              </div>
              <div className='L2' >Grabriel García</div>
              <div className='L3'>Literatura</div>
              <div className='L5'>
                <AiTwotoneEdit onClick={ventanaFlotante} className='edit'/>
                <AiFillDelete onClick={eliminacion} className='delete'/>  
              </div>
            </div>


            <div className='LL'>
              <div className='L0'>
                <Imagenes clase='img' url={cienAños} />
              </div>
              <div className='L1'>
                <p className='L1P'>Cien años de soledad</p>
              </div>
              <div className='L2' >Grabriel García</div>
              <div className='L3'>Literatura</div>
              <div className='L5'>
                <AiTwotoneEdit onClick={ventanaFlotante} className='edit'/>
                <AiFillDelete className='delete'/>
              </div>
            </div>

            <div className='LL2'>
              <div className='L0'>
                <Imagenes clase='img' url={cienAños} />
              </div>
              <div className='L1'>
                <p className='L1P'>Cien años de soledad</p>
              </div>
              <div className='L2' >Grabriel García</div>
              <div className='L3'>Literatura</div>
              <div className='L5'>
                <AiTwotoneEdit onClick={ventanaFlotante} className='edit'/>
                <AiFillDelete onClick={eliminacion} className='delete'/>  
              </div>
            </div>


            </div>            
         </div>
          <div id='add' className="add">
            <BiBookAdd onClick={ventanaFlotante} id='btnAgregarL' className='addd'/>
          </div> 
        </div>
        <div id='overlay' className='overlay'>
          <div className="fromLibros">
            <div className="XX">
              <TiDelete onClick={ventanaFlotante } className='X'/>
            </div>
            <div className='centerLibros' >
              <h1>NUEVA LIBRO</h1>
              <form method="post">

                <div className='car_123'>
                  <div className="txt_field">
                    <input type="text" required/>
                    <span></span>
                    <label>ISBN</label>
                  </div>
                  <div className="txt_field">
                    <input type="text" required/>
                    <span></span>
                    <label>Nombre</label>
                  </div>
                  <div className="txt_field">
                    <input type="text" required/>
                    <span></span>
                    <label>N° Editorial</label>
                  </div>
                </div>

                <div className="car_123">
                  <div className="txt_field">
                    <input type="text" required/>
                    <span></span>
                    <label>Edición</label>
                  </div>
                  <div className="txt_field">
                    <input type="text" required/>
                    <span></span>
                    <label>Idioma</label>
                  </div> 
                  <div className="txt_field">
                    <input type="text" required/>
                    <span></span>
                    <label>Palabras Clave</label>
                  </div>
                </div>

                <div className="car_123">
                  <div className="txt_field">
                    <input type="text" required/>
                    <span></span>
                    <label>N° Paginas</label>
                  </div>
                  <div className="txt_field">
                    <input type="text" required/>
                    <span></span>
                    <label>N° Capitulos</label>
                  </div>
                  <div className="txt_field">
                    <input type="text" required/>
                    <span></span>
                    <label>Alto</label>
                  </div>
                </div>

                <div className="car_123">
                  <div className="txt_field">
                    <input type="text" required/>
                    <span></span>
                    <label>Ancho</label>
                  </div><div className="txt_field">
                    <input type="text" required/>
                    <span></span>
                    <label>Peso</label>
                  </div><div className="txt_field">
                    <input type="text" required/>
                    <span></span>
                    <label>Presentación</label>
                  </div>
                </div>
                
                <div className="car_123">
                  <div className="txt_field">
                    <input type="text" required/>
                    <span></span>
                    <label>Anexos</label>
                  </div>

                  <div className="txt_fieldLibro">
                    <textarea placeholder='Mensaje' name="mensaje" id=""></textarea>
                    <span></span>
                    <label htmlFor=""></label>
                  </div>
                  
                  <div className="txt_fieldSelecLibro">
                    <select>
                        <option value="" selected>Estado</option>
                        <option value="">Activo</option>
                        <option value="">Inactivo                 
                        </option>
                    </select>
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
