import React from 'react'
import { NavLink } from 'reactstrap'
import '../../../Static/formAutoCate.css'
import { AdminHeader } from '../../UI/NavegadorAdmin/AdminHeader'
import { AdminNavegador } from '../../UI/NavegadorAdmin/AdminNavegador'

export const AutoresCategorias = () => {
  return (
    <div className="MainAutoresCate">
      <div className="box-AdminNavegador">
        <AdminNavegador/>
      </div>

      <div className="box-Header-Admin">
      <AdminHeader/>
      </div>

   {/*  <div className='AutoresCategorias'>
      <div className='Estudiantes-from AutoCateAgregar' >
              <div className="from-Titulo">
                <div className="Desactivar-From">
                  <NavLink to='/TEstudiantes' >
                    <i class="fa-solid fa-xmark"></i>
                  </NavLink>
                </div>
                <h1>NUEVA CATEGORIA</h1>                
              </div>              
              <form >
                <div className="boxs-inputs">
                  <div className="box-input">
                    <input type="text" name='nombres'  required/>
                    <span></span>
                    <label>Nombre Categoria</label>
                  </div>
                </div>
                <br />
                <div className="btnsFormulario">
                    <button className="btnFor btn-agregar">NUEVA CATEGORIA</button>
                </div>   
            </form>
          </div>
    </div> */}
    </div>
  )
}
