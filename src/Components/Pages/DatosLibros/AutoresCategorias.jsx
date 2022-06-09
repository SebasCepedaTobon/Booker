import React, {useState, useEffect} from 'react'
import axios from 'axios';
import '../../../Static/borrador.css'
import '../../../Static/formAutoCate.css'
import { AdminHeader } from '../../UI/NavegadorAdmin/AdminHeader'
import { AdminNavegador } from '../../UI/NavegadorAdmin/AdminNavegador'

export const initialForm = {
  "nombre": ""
}

export const AutoresCategorias = () => {

  const url = "https://bookerbackapi.herokuapp.com/modulos/categorias/"
  const url2 = "https://bookerbackapi.herokuapp.com/modulos/autores/"
  const [categorias, setCategorias] = useState([])
  const [autores, setAutores] = useState([])
  const [form2, setForm2] = useState(initialForm)


  const peticionGetCate = ()=>{
    axios.get(url)
    .then(response=>{
      setCategorias(response.data);
    })

    console.log(categorias);
  }

  const peticionGetAuto = ()=>{
    axios.get(url2)
    .then(response=>{
      setAutores(response.data);
    })

    console.log(autores);
  }

  useEffect(() => {
    peticionGetCate()
    peticionGetAuto()
  }, [])

  const handleSubmit = (e) =>{
    e.preventDefault()
    peticionPost()
  }

  const peticionPost = async () =>{
    console.log(form2);
    await axios.post(url, form2)
    .then(res=>{
      window.location.href="/AutoresCategorias"
        console.log(res)
    })
    console.log(form2);
}

  const handleChange = (e) =>{
    setForm2({
      ...form2,
      [e.target.name]: e.target.value
    })
    console.log(form2);
  }

  const updateData = (data) =>{
    setForm2(data)
    modalAbrir()
  }

  const modalAbrir = ()=>{
    const Cate = document.getElementById('Cate')
    const Cate2 = document.querySelector('.Cate2')
    Cate.style.visibility = "visible"
    Cate2.style.transform="scale(1)"
    Cate2.style.opacity="2"

  }

  const modalCerrar = ()=>{
    setTimeout(() => {
      setForm2(initialForm)
    }, 500);
    const Cate = document.getElementById('Cate')
    const Cate2 = document.querySelector('.Cate2')
    Cate.style.visibility = "hidden"
    Cate2.style.transform="scale(0.6)"
    Cate2.style.opacity="0"
  }

  const modalAbrir2 = ()=>{

    const Auto = document.getElementById('Auto')
    const Auto2 = document.getElementById('Auto2')
    Auto.style.visibility = "visible"
    Auto2.style.opacity="2"
    Auto2.style.transform="scale(1)"

  }

  const modalCerrar2 = ()=>{

    const Auto = document.getElementById('Auto')
    const Auto2 = document.getElementById('Auto2')
    Auto.style.visibility = "hidden"
    Auto2.style.opacity="0"
    Auto2.style.transform="scale(0.6)"
  }


  return (
    <div className="MainAutoresCate">
      <div className="box-AdminNavegador">
        <AdminNavegador/>
      </div>

      <div className="box-Cate-Autores">
      <AdminHeader/>

      <div className='box-TablaCateAuto' >
          <div className='TablaCateAuto'>
            <div className="tituloCateAuto">
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
            <div className="overflowTabla">
              <div className='Tabla-Info' >
                {
                  categorias.map((element,_) => {
                    return(

                  <div className='tr-1'>
                    <div className='td-0'>
                      <p>{element.id_categoria}</p>
                    </div>
                    <div className='td-1'><p>{element.nombre}</p>
                    </div>
                    <div className='td-6'>
                    <i class="fa-solid fa-pen-to-square" onClick={()=>updateData(element)}  ></i>
                    </div>
                  </div>
                    )
                  })
                }
              </div>
            </div>
          </div>

          <div className='AutoresTabla'>
            <div className="tituloCateAuto">
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

            <div className="overflowTabla">
            <div className='Tabla-Info' >
              {
                autores.map((element,_)=>{
                  return(
                <div className='tr-1'>
                  <div className='td-0'>
                    <p>{element.id_autor}</p>
                  </div>
                  <div className='td-1'><p>{element.nombres} {element.apellidos}</p>
                  </div>
                  <div className='td-6'>
                  <i class="fa-solid fa-pen-to-square"></i>
                  </div>
                </div>
                  )
                })
              }
            </div>
            </div>

          </div>
        </div>
      

      
      </div>
      <div id='Cate' className='AutoresCategorias'>
        <div id="Cate2" className='Cate2 CateAutoModal'>
          <div className='AutoCateAgregar' >
            <div className="from-Titulo">
              <div className="Desactivar-From">
                  <i onClick={modalCerrar} class="fa-solid fa-xmark"></i>
              </div>
              {form2.nombre === ""
              ?<h1>NUEVA CATEGORIA</h1>
              :<h1>MODIFICAR CATEGORIA</h1>
              }           
            </div>              
            <form onSubmit={handleSubmit} >
              <div className="boxs-inputs">
                <div className="box-input">
                  <input type="text" name='nombre' value={form2.nombre} onChange={handleChange}  required/>
                  <span></span>
                  <label>Nombre Categoria</label>
                </div>
              </div>
              <br />
              <div className="btnsFormulario">
              {form2.nombre === ""
              ?<button className="btnFor btn-agregar">NUEVA CATEGORIA</button>
              :<button className="btnFor btn-agregar">MODIFICAR CATEGORIA</button>
              }
              </div>   
            </form>
          </div>
        </div>
      </div>

      <div id='Auto' className='AutoresCategorias '>
        <div  id='Auto2' className="Auto2 CateAutoModal">
          <div className='Estudiantes-from boxAuto AutoCateAgregar AutoresForm' >
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
    </div>
  )
}
