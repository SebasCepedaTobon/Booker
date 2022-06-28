import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import '../../../Static/borrador.css'
import '../../../Static/formAutoCate.css'
import { AdminHeader } from '../../UI/NavegadorAdmin/AdminHeader'
import { AdminNavegador } from '../../UI/NavegadorAdmin/AdminNavegador'

export const initialForm = {
  "nombre": ""
}

export const initialFormAuto = {
  "nombres": "",
  "apellidos": ""
}

let edit

export const AutoresCategorias = () => {

  const url = "https://bookerbackapi.herokuapp.com/modulos/categorias/?ordering=-id_categoria"
  const url2 = "https://bookerbackapi.herokuapp.com/modulos/autores/?ordering=-nombres"
  const [categorias, setCategorias] = useState([])
  const [autores, setAutores] = useState([])
  const [form2, setForm2] = useState(initialForm)
  const [form2Auto, setForm2Auto] = useState(initialFormAuto)


  /*------FUNCIONES USADAS PARA CATEGORIAS-------*/
  const peticionGetCate = ()=>{
    axios.get(url)
    .then(response=>{
      setCategorias(response.data);
    })

    console.log(categorias);
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(edit);

    if (edit === 1) {
      modificar()
    }else{
      peticionPost()
    }
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

const updateData2 = async () =>{
  let endpoint = url+form2.id_categoria+'/'
  await axios.put(endpoint, form2)
  .then((res) => {
      window.location.href="/AutoresCategorias"
      console.log(res);
  })
}



const modificar = (data) =>{
  Swal.fire({
    title: '¿Esta seguro de guardar los cambios?',
    icon: 'warning',
    confirmButtonText: 'Si, Guardar',
    showCancelButton: true,
    cancelButtonText: 'No, cancelar',
    reverseButtons: true
  }).then((resultado) => {
    if (resultado.isConfirmed) {
      updateData2()
    }
  })
}

const eliminacion = (data) =>{
  Swal.fire({
    title: '¿Esta seguro de eliminar la categoria?',
    icon: 'warning',
    confirmButtonText: 'Si, Eliminar',
    showCancelButton: true,
    cancelButtonText: 'No, cancelar',
    reverseButtons: true
  }).then((resultado) => {
    if (resultado.isConfirmed) {
      peticionDelete(data)
    }
  })
}

const peticionDelete = async (data) =>{

  let endpoint  = url+data.id_categoria + "/"
  await axios.delete(endpoint)
  .then((res)=>{
    window.location.href="/AutoresCategorias"
    console.log(res);
  })
}

  const handleChange = (e) =>{
    setForm2({
      ...form2,
      [e.target.name]: e.target.value
    })
    console.log(form2);
  }

  const peticionGetCateBuscar = ()=>{
    const input = document.getElementById('elInputCate')
    axios.get("https://bookerbackapi.herokuapp.com/modulos/categorias/?search=" + input.value)
    .then(response=>{
      setCategorias(response.data);
    })

    console.log(categorias);
  }

  const updateData = (data) =>{
    edit = 1
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
    edit = ""
    setTimeout(() => {
      setForm2(initialForm)
    }, 500);
    const Cate = document.getElementById('Cate')
    const Cate2 = document.querySelector('.Cate2')
    Cate.style.visibility = "hidden"
    Cate2.style.transform="scale(0.6)"
    Cate2.style.opacity="0"
  }

  /*------FIN DE LAS FUNCIONES USADAS PARA CATEGORIAS-------*/

  useEffect(() => {
    peticionGetCate()
    peticionGetAuto()
  }, [])

  /*------FUNCIONES USADAS PARA AUTORES-------*/

  const peticionGetAuto = ()=>{
    axios.get(url2)
    .then(response=>{
      setAutores(response.data);
    })
    console.log(autores);
  }

  const peticionGetAutoBuscar = ()=>{
    const input = document.getElementById('elInputAuto')
    axios.get("https://bookerbackapi.herokuapp.com/modulos/autores/?search=" + input.value)
    .then(response=>{
      setAutores(response.data);
    })

    console.log(autores);
  }

  

  const handleSubmitAuto = (e) =>{
    e.preventDefault()
    console.log(edit);
    if (edit === 1) {
      modificarAuto()    
    }else{
      peticionPostAuto()
    }
  }

  const peticionPostAuto = async () =>{
    console.log(form2Auto);
    await axios.post(url2, form2Auto)
    .then(res=>{
      window.location.href="/AutoresCategorias"
        console.log(res)
    })
    console.log(form2Auto);
}

const updateData2Auto = async () =>{
  let endpoint = url2+form2Auto.id_autor+'/'
  await axios.put(endpoint, form2Auto)
  .then((res) => {
      window.location.href="/AutoresCategorias"
      console.log(res);
  })
}



const peticionDeleteAuto = async (data) =>{

  let endpoint  = url2+data.id_autor + "/"
  await axios.delete(endpoint)
  .then((res)=>{
    window.location.href="/AutoresCategorias"
    console.log(res);
  })
}



const eliminacionAuto = (data) =>{
  Swal.fire({
    title: '¿Esta seguro de eliminar el autor?',
    icon: 'warning',
    confirmButtonText: 'Si, Eliminar',
    showCancelButton: true,
    cancelButtonText: 'No, cancelar',
    reverseButtons: true
  }).then((resultado) => {
    if (resultado.isConfirmed) {
      peticionDeleteAuto(data)
    }
  })
}



const modificarAuto = () =>{
  Swal.fire({
    title: '¿Esta seguro de guardar los cambios?',
    icon: 'warning',
    confirmButtonText: 'Si, Guardar',
    showCancelButton: true,
    cancelButtonText: 'No, cancelar',
    reverseButtons: true
  }).then((resultado) => {
    if (resultado.isConfirmed) {
      updateData2Auto()
    }
  })
}



  const handleChangeAuto = (e) =>{
    setForm2Auto({
      ...form2Auto,
      [e.target.name]: e.target.value
    })
    console.log(form2Auto);
  }

  const updateDataAuto = (data) =>{
    edit = 1
    setForm2Auto(data)
    modalAbrir2()
  }

  const modalAbrir2 = ()=>{

    const Auto = document.getElementById('Auto')
    const Auto2 = document.getElementById('Auto2')
    Auto.style.visibility = "visible"
    Auto2.style.opacity="2"
    Auto2.style.transform="scale(1)"

  }

  const modalCerrar2 = ()=>{

    edit = ""
    setTimeout(() => {
      setForm2Auto(initialFormAuto)
    }, 500);

    const Auto = document.getElementById('Auto')
    const Auto2 = document.getElementById('Auto2')
    Auto.style.visibility = "hidden"
    Auto2.style.opacity="0"
    Auto2.style.transform="scale(0.6)"
  }

  /*------FIN DE LAS FUNCIONES USADAS PARA AUTORES-------*/


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
                  <input id='elInputCate' className='elInput' onChange={peticionGetCateBuscar} type="text" autoFocus placeholder='Buscar...'/>
                  <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div className='tr'>
              <div className='td-0'><p>ID</p></div>
              <div className='td-1' ><p>Nombre Categoria</p></div>
              <div className='td-4'><p>Opción</p></div>
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
                    <div className='td-4'>
                    <i class="fa-solid fa-pen-to-square" onClick={()=>updateData(element)}></i>
                    <i class="fa-solid fa-trash-can" onClick={()=>eliminacion(element)} ></i>
                    </div>
                  </div>
                    )
                  })
                }
              </div>
            </div>
          </div>

          <div className='TablaCateAuto'>
            <div className="tituloCateAuto">
              <p className='cambioFiltro'>Autores</p>
              <i class="fa-solid fa-folder-plus" onClick={modalAbrir2} data-title='Agregar Autor' ></i>
              <div id='buscador' className="buscador">
                  <input id='elInputAuto' onChange={peticionGetAutoBuscar} className='elInput' type="text" autoFocus placeholder='Buscar...'/>
                  <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div className='tr'>
              <div className='td-0'><p>ID</p></div>
              <div className='td-1' ><p>Nombre Autor</p></div>
              <div className='td-4'><p>Opción</p></div>
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
                  <div className='td-4'>
                  <i class="fa-solid fa-pen-to-square" onClick={()=>updateDataAuto(element)}></i>
                  <i class="fa-solid fa-trash-can" onClick={()=>eliminacionAuto(element)} ></i>
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
              {edit === 1
              ?<h1>MODIFICAR CATEGORIA</h1>
              :<h1>NUEVA CATEGORIA</h1>
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
              {edit === 1
              ?<button className="btnFor btn-agregar">MODIFICAR CATEGORIA</button>
              :<button className="btnFor btn-agregar">NUEVA CATEGORIA</button>
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
            <form onSubmit={handleSubmitAuto} >
              <div className="boxs-inputs">
                <div className="box-input">
                  <input type="text" name='nombres' value={form2Auto.nombres} onChange={handleChangeAuto}  required/>
                  <span></span>
                  <label>Nombres del Autor</label>
                </div>
              </div>

              <div className="boxs-inputs">
                <div className="box-input">
                  <input type="text" name='apellidos' value={form2Auto.apellidos} onChange={handleChangeAuto} required/>
                  <span></span>
                  <label>Apellidos del Autor</label>
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
