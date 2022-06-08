import React from 'react'
import { NavLink } from 'reactstrap'
import '../../../Static/formAutoCate.css'
import { AdminHeader } from '../../UI/NavegadorAdmin/AdminHeader'
import { AdminNavegador } from '../../UI/NavegadorAdmin/AdminNavegador'

export const EditorialIdioma = () => {
  return (
    <div className="MainAutoresCate">
      <div className="box-AdminNavegador">
        <AdminNavegador/>
      </div>

      <div className="box-Cate-Autores">
      <AdminHeader/>

      <div className='box-Tabla' >
          <div className='Tabla'>
            <div className="TituloLibro">
              <p className='cambioFiltro'>Idiomas</p>
              <i class="fa-solid fa-folder-plus" data-title='Agregar Idioma' ></i>
              <div id='buscador' className="buscador">
                  <input id='elInput' className='elInput' type="text" autoFocus placeholder='Buscar...'/>
                  <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div className='tr'>
              <div className='td-0'><p>ID</p></div>
              <div className='td-1' ><p>Nombre Idioma</p></div>
              <div className='td-6'><p>Opción</p></div>
            </div>
            <div className='Tabla-Info' >
                <div className='tr-1'>
                  <div className='td-0'>
                    <img src="" alt="" />
                  </div>
                  <div className='td-1'><p>Holaaaotro</p>
                  </div>
                  <div className='td-6'>
                  <i class="fa-solid fa-pen-to-square"  ></i>
                  </div>
                </div>
            </div>
          </div>

          <div className='Tabla AutoresTabla'>
            <div className="TituloLibro">
              <p className='cambioFiltro'>Editorial</p>
              <i class="fa-solid fa-folder-plus" data-title='Agregar Editorial' ></i>
              <div id='buscador' className="buscador">
                  <input id='elInput' className='elInput' type="text" autoFocus placeholder='Buscar...'/>
                  <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div className='tr'>
              <div className='td-0'><p>ID</p></div>
              <div className='td-1' ><p>Nombre Editorial</p></div>
              <div className='td-6'><p>Opción</p></div>
            </div>

            <div className='Tabla-Info' >
                <div className='tr-1'>
                  <div className='td-0'>
                    <img src="" alt="" />
                  </div>
                  <div className='td-1'><p>Holaaaotro</p>
                  </div>
                  <div className='td-6'>
                  <i class="fa-solid fa-pen-to-square"></i>
                  </div>
                </div>
            </div>
            <div className='Tabla-Info' >
                <div className='tr-1'>
                  <div className='td-0'>
                    <img src="" alt="" />
                  </div>
                  <div className='td-1'><p>Holaaaotro</p>
                  </div>
                  <div className='td-6'>
                  <i class="fa-solid fa-pen-to-square"></i>
                  </div>
                </div>
            </div>
          </div>

          
          
        </div>
      

      
      </div>
      <div className='AutoresCategorias'>
        <div className='Estudiantes-from AutoCateAgregar' >
          <div className="from-Titulo">
            <div className="Desactivar-From">
              <NavLink to='/TEstudiantes' >
                <i class="fa-solid fa-xmark"></i>
              </NavLink>
            </div>
            <h1>NUEVO IDIOMA</h1>                
          </div>              
          <form >
            <div className="boxs-inputs">
              <div className="box-input">
                <input type="text" name='nombres'  required/>
                <span></span>
                <label>Nombre Idioma</label>
              </div>
            </div>
            <br />
            <div className="btnsFormulario">
              <button className="btnFor btn-agregar">NUEVO IDIOMA</button>
            </div>   
          </form>
        </div>
      </div>
      <div className='AutoresCategorias'>
        <div className='Estudiantes-from AutoCateAgregar AutoresForm' >
          <div className="from-Titulo">
            <div className="Desactivar-From">
              <NavLink to='/TEstudiantes' >
                <i class="fa-solid fa-xmark"></i>
              </NavLink>
            </div>
            <h1>NUEVO EDITORIAL</h1>                
          </div>              
          <form >
            <div className="boxs-inputs">
              <div className="box-input">
                <input type="text" name='nombres'  required/>
                <span></span>
                <label>Nombre Editorial</label>
              </div>
            </div>
            <br />
            <div className="btnsFormulario">
              <button className="btnFor btn-agregar">NUEVO EDITORIAL</button>
            </div>   
          </form>
        </div>
      </div>
    </div>
  )
}
