import React from 'react'
import { NavLink } from 'reactstrap'
import '../../../Static/formAutoCate.css'
import '../../../Static/borrador.css'
import { AdminHeader } from '../../UI/NavegadorAdmin/AdminHeader'
import { AdminNavegador } from '../../UI/NavegadorAdmin/AdminNavegador'

export const AutoresCategorias = () => {


  const modalAbrir = ()=>{

    const Cate = document.getElementById('Cate')
    const Cate2 = document.getElementById('Cate2')
    Cate.style.visibility = "visible"
    Cate2.style.transform="scale(1)"
    Cate2.style.opacity="2"

  }

  const modalCerrar = ()=>{

    const Cate = document.getElementById('Cate')
    const Cate2 = document.getElementById('Cate2')
    Cate.style.visibility = "hidden"
    Cate2.style.transform="scale(1)"
    Cate2.style.opacity="2"
  }

  const modalAbrir2 = ()=>{

    const Auto = document.getElementById('Auto')
    const Auto2 = document.getElementById('Auto2')
    Auto.style.visibility = "visible"
    Auto.style.opacity="2"
    Auto2.style.transform="scale(1)"

  }

  const modalCerrar2 = ()=>{

    const Auto = document.getElementById('Auto')
    const Auto2 = document.getElementById('Auto2')
    Auto.style.visibility = "hidden"
    Auto.style.opacity="2"
    Auto2.style.transform="scale(0.6)"
  }


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
              <p className='cambioFiltro'>Categorias</p>
              <i class="fa-solid fa-folder-plus" onClick={modalAbrir} data-title='Agregar Categoria' ></i>
              <div id='buscador' className="buscador">
                  <input id='elInput' className='elInput' type="text" autoFocus placeholder='Buscar...'/>
                  <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div className='tr'>
              <div className='td-0'><p>ID</p></div>
              <div className='td-1' ><p>Nombre Categoria</p></div>
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
              <p className='cambioFiltro'>Autores</p>
              <i class="fa-solid fa-folder-plus" onClick={modalAbrir2} data-title='Agregar Autor' ></i>
              <div id='buscador' className="buscador">
                  <input id='elInput' className='elInput' type="text" autoFocus placeholder='Buscar...'/>
                  <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div className='tr'>
              <div className='td-0'><p>ID</p></div>
              <div className='td-1' ><p>Nombre Autor</p></div>
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
      <div id='Cate' className='AutoresCategorias'>
        <div id='Cate2' className='Estudiantes-from AutoCateAgregar' >
          <div className="from-Titulo">
            <div className="Desactivar-From">
                <i onClick={modalCerrar} class="fa-solid fa-xmark"></i>
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
      </div>

      <div id='Auto' className='AutoresCategorias '>
        <div id='Auto2' className='Estudiantes-from boxAuto AutoCateAgregar AutoresForm' >
          <div className="from-Titulo">
            <div className="Desactivar-From">
                <i class="fa-solid fa-xmark" onClick={modalCerrar2} ></i>
            </div>
            <h1>NUEVO AUTOR</h1>                
          </div>              
          <form >
            <div className="boxs-inputs">
              <div className="box-input">
                <input type="text" name='nombres'  required/>
                <span></span>
                <label>Nombre Autor</label>
              </div>
            </div>

            <div className="boxs-inputs">
              <div className="box-input">
                <input type="text" name='nombres'  required/>
                <span></span>
                <label>Apellido Autor</label>
              </div>
            </div>
            <br />
            <div className="btnsFormulario">
              <button className="btnFor btn-agregar">NUEVO AUTOR</button>
            </div>   
          </form>
        </div>
      </div>
    </div>
  )
}
