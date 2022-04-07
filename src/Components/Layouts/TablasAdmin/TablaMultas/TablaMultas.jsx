import React, {useState, useEffect} from 'react'

import { Imagenes } from '../../../UI/Imagenes/Imagenes'
import { NavLink } from 'react-router-dom'
import { AiFillDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';
import { BiBookAdd } from 'react-icons/bi';
import { MdAttachMoney } from 'react-icons/md';
import swal from 'sweetalert';
import booker from '../../../../assets/Imagenes/logos/Booker1.png'
import search from '../../../../assets/Imagenes/iconos/search.png'

export const TablaMultas = () => {

const [cerrar, setCounter] = useState(true)
const FormFlotante  = () => {setCounter(!cerrar)}

useEffect(() => {
  const overlay = document.getElementById('overlay')
  const fromMultas = document.querySelector('.fromMultas')

  if(cerrar === true){
    overlay.style.visibility = "hidden"
    fromMultas.style.transform="scale(0.6)"
    fromMultas.style.opacity="0"
  }else{
    overlay.style.visibility = "visible"
    fromMultas.style.transform="scale(1)"
    fromMultas.style.opacity="2"
  }

},[cerrar]);


const mostrarAlerta=()=>{
  swal({
    title: "Agregado",
    text: "Se agrego correctamente",
    icon: "success",
    button: "OK"
  });
}

const alertaEliminar=()=>{
  swal({
    title: "Eliminado",
    text: "Se elimino corectamente",
    icon: "error",
    
  });
}

  return (
   
    <div className='MainTablaLibros'>
        <div className="bannerLibros">
            <Imagenes url={booker} />
            <div className='BTLibros'>
                <p>Lista de Multas</p>
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
              <div className='L1' ><p>Nombre Libro</p></div>
              <div className='L2' ><p>Nombre Estudiante</p></div>
              <div className='L33'><p>Fecha Esperada</p></div>
              <div className='L4'><p>Fecha Entrega</p></div>
              <div className='L5'><p>Opciones</p></div>
            </div>
            <div className='TablaLibros' >

            <div className='LL'>
              <div className='L0'>
              <MdAttachMoney className='img'/>
              </div>
              <div className='L1'>
                <p className='L1P'>Principito</p>
              </div>
              <div className='L2'><p>Sebastian Andres Tobon Cepeda</p></div>
              <div className='L3'><p>10/10/2022</p></div>
              <div className='L4'><p>22/10/2022</p></div>
              <div className='L5'>
                <FaEdit className='edit'/>
                <AiFillDelete onClick={alertaEliminar}  className='delete'/>     
              </div>
            </div>

            <div className='LL2'>
              <div className='L0'>
              <MdAttachMoney className='img'/>
              </div>
              <div className='L1'>
                  <p className='L1P'>Cien años de soledad</p>
              </div>
              <div className='L2'><p>Santiago Rincon Cortes</p></div>
              <div className='L3'><p>10/10/202</p></div>
              <div className='L4'><p>22/10/2022</p></div>
              <div className='L5'>
                <FaEdit className='edit'/>
                <AiFillDelete onClick={alertaEliminar} className='delete'/>   
              </div>
            </div>

            </div>            
         </div>

         <div id='add' className="add">
            <BiBookAdd onClick={FormFlotante} id='btnAgregarL' className='addd'/>
          </div>     
        </div>

        <div id='overlay' className='overlay'>
          <div className="fromMultas">
            <div className="XX">
              <TiDelete onClick={FormFlotante } className='X'/>
            </div>
            <div className='centerMultas' >
              <h1>NUEVA MULTA</h1>
              <form method="post">
                <div className="txt_field">
                  <input type="text" required/>
                  <span></span>
                  <label>Documento Estudiante</label>
                </div>
                <div className="txt_field">
                    <input type="text" required/>
                    <span></span>
                    <label>Documento Administrador</label>
                </div>
                <div className="txt_fieldSelec">
                  <select>
                      <option value="" selected>Seleccionar</option>
                      <option value="">Multa</option>
                      <option value="">Novedad</option>
                  </select>
                </div>

                <div className="txt_fieldSelec">
                  <select>
                      <option value="" selected>Estado</option>
                      <option value="">Activo</option>
                      <option value="">Inactivo                 
                      </option>
                  </select>
                </div>
                <div className="txt_fieldMultas">
                  <textarea placeholder='Mensaje' name="mensaje" id=""></textarea>
                  <span></span>
                  <label htmlFor=""></label>
                </div>
                <NavLink to='/Multas'>
                <input type="submit" value="Agregar"/>
                <div className="signup_link"></div>
                </NavLink>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
