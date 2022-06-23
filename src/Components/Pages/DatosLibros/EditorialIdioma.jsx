import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import '../../../Static/borrador.css'
import '../../../Static/formAutoCate.css'
import { AdminHeader } from '../../UI/NavegadorAdmin/AdminHeader'
import { AdminNavegador } from '../../UI/NavegadorAdmin/AdminNavegador'

export const initialFormEditorial = {
  "nombre": ""
}

export const initialFormIdioma = {
  "nombre": "",
}

let edit

export const EditorialIdioma = () => {

  const url = "https://bookerbackapi.herokuapp.com/modulos/editoriales/"
  const url2 = "https://bookerbackapi.herokuapp.com/modulos/idiomas/"
  const [editorial, setEditorial] = useState([])
  const [idioma, setIdioma] = useState([])
  const [form2, setForm2] = useState(initialFormEditorial)
  const [form2Idioma, setForm2Idioma] = useState(initialFormIdioma)


  /*------FUNCIONES USADAS PARA CATEGORIAS-------*/
  const peticionGetEditorial = ()=>{
    axios.get(url)
    .then(response=>{
      setEditorial(response.data);
    })

    console.log(editorial);
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
      window.location.href="/EditorialIdioma"
        console.log(res)
    })
    console.log(form2);
}

const updateData2 = async () =>{
  let endpoint = url+form2.id_editorial+'/'
  await axios.put(endpoint, form2)
  .then((res) => {
      window.location.href="/EditorialIdioma"
      console.log(res);
  })
}

const peticionDelete = async (data) =>{

  let endpoint  = url+data.id_editorial + "/"
  await axios.delete(endpoint)
  .then((res)=>{
    window.location.href="/EditorialIdioma"
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
    title: '¿Esta seguro de eliminar el editorial?',
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

  const handleChange = (e) =>{
    setForm2({
      ...form2,
      [e.target.name]: e.target.value
    })
    console.log(form2);
  }

  const peticionGetEditorialesBuscar = ()=>{
    const input = document.getElementById('elInputCate')
    axios.get("https://bookerbackapi.herokuapp.com/modulos/editoriales/?search=" + input.value)
    .then(response=>{
      setEditorial(response.data);
    })

    console.log(editorial);
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
      setForm2(initialFormEditorial)
    }, 500);
    const Cate = document.getElementById('Cate')
    const Cate2 = document.querySelector('.Cate2')
    Cate.style.visibility = "hidden"
    Cate2.style.transform="scale(0.6)"
    Cate2.style.opacity="0"
  }

  /*------FIN DE LAS FUNCIONES USADAS PARA CATEGORIAS-------*/

  useEffect(() => {
    peticionGetEditorial()
    peticionGetIdioma()
  }, [])

  /*------FUNCIONES USADAS PARA IDIOMAS-------*/

  const peticionGetIdioma = ()=>{
    axios.get(url2)
    .then(response=>{
      setIdioma(response.data);
    })

    console.log(idioma);
  }

  const peticionGetIdiomaBuscar = ()=>{
    const input = document.getElementById('elInputIdioma')
    axios.get("https://bookerbackapi.herokuapp.com/modulos/idiomas/?search=" + input.value)
    .then(response=>{
      setIdioma(response.data);
    })
    console.log(idioma);
  }

  

  const handleSubmitIdioma = (e) =>{
    e.preventDefault()
    console.log(edit);
    if (edit === 1) {
      modificarIdioma()    
    }else{
      peticionPostIdioma()
    }
  }

  const peticionPostIdioma = async () =>{
    console.log(form2Idioma);
    await axios.post(url2, form2Idioma)
    .then(res=>{
      window.location.href="/EditorialIdioma"
        console.log(res)
    })
    console.log(form2Idioma);
}

const updateData2Idioma = async () =>{
  let endpoint = url2+form2Idioma.id_idioma+'/'
  await axios.put(endpoint, form2Idioma)
  .then((res) => {
      window.location.href="/EditorialIdioma"
      console.log(res);
  })
}



const peticionDeleteIdioma = async (data) =>{

  let endpoint  = url2+data.id_idioma + "/"
  await axios.delete(endpoint)
  .then((res)=>{
    window.location.href="/EditorialIdioma"
    console.log(res);
  })
}



const eliminacionIdioma = (data) =>{
  Swal.fire({
    title: '¿Esta seguro de eliminar la idioma?',
    icon: 'warning',
    confirmButtonText: 'Si, Eliminar',
    showCancelButton: true,
    cancelButtonText: 'No, cancelar',
    reverseButtons: true
  }).then((resultado) => {
    if (resultado.isConfirmed) {
      peticionDeleteIdioma(data)
    }
  })
}



const modificarIdioma = () =>{
  Swal.fire({
    title: '¿Esta seguro de guardar los cambios?',
    icon: 'warning',
    confirmButtonText: 'Si, Guardar',
    showCancelButton: true,
    cancelButtonText: 'No, cancelar',
    reverseButtons: true
  }).then((resultado) => {
    if (resultado.isConfirmed) {
      modalCerrar2()
      updateData2Idioma()
    }
  })
}



  const handleChangeAuto = (e) =>{
    setForm2Idioma({
      ...form2Idioma,
      [e.target.name]: e.target.value
    })
    console.log(form2Idioma);
  }

  const updateDataIdioma = (data) =>{
    edit = 1
    setForm2Idioma(data)
    modalAbrir2()
  }

  const modalAbrir2 = ()=>{

    const Idio = document.getElementById('Idio')
    const Idio2 = document.getElementById('Idio2')
    Idio.style.visibility = "visible"
    Idio2.style.opacity="2"
    Idio2.style.transform="scale(1)"

  }

  const modalCerrar2 = ()=>{
    edit = ""
    setTimeout(() => {
      setForm2Idioma(initialFormIdioma)
    }, 500);

    const Idio = document.getElementById('Idio')
    const Idio2 = document.getElementById('Idio2')
    Idio.style.visibility = "hidden"
    Idio2.style.opacity="0"
    Idio2.style.transform="scale(0.6)"
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
              <p className='cambioFiltro'>Editoriales</p>
              <i class="fa-solid fa-folder-plus" onClick={modalAbrir} data-title='Agregar Editorial' ></i>
              <div id='buscador' className="buscador">
                  <input id='elInputCate' className='elInput' onChange={peticionGetEditorialesBuscar} type="text" autoFocus placeholder='Buscar...'/>
                  <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div className='tr'>
              <div className='td-0'><p>ID</p></div>
              <div className='td-1' ><p>Nombre del Editorial</p></div>
              <div className='td-4'><p>Opción</p></div>
            </div>
            <div className="overflowTabla">
              <div className='Tabla-Info' >
                {
                  editorial.map((element,_) => {
                    return(

                  <div className='tr-1'>
                    <div className='td-0'>
                      <p>{element.id_editorial}</p>
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
              <p className='cambioFiltro'>Idiomas</p>
              <i class="fa-solid fa-folder-plus" onClick={modalAbrir2} data-title='Agregar Autor' ></i>
              <div id='buscador' className="buscador">
                  <input id='elInputIdioma' onChange={peticionGetIdiomaBuscar} className='elInput' type="text" autoFocus placeholder='Buscar...'/>
                  <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div className='tr'>
              <div className='td-0'><p>ID</p></div>
              <div className='td-1' ><p>Nombre Idioma</p></div>
              <div className='td-4'><p>Opción</p></div>
            </div>

            <div className="overflowTabla">
            <div className='Tabla-Info' >
              {
                idioma.map((element,_)=>{
                  return(
                <div className='tr-1'>
                  <div className='td-0'>
                    <p>{element.id_idioma}</p>
                  </div>
                  <div className='td-1'><p>{element.nombre}</p>
                  </div>
                  <div className='td-4'>
                  <i class="fa-solid fa-pen-to-square" onClick={()=>updateDataIdioma(element)}></i>
                  <i class="fa-solid fa-trash-can" onClick={()=>eliminacionIdioma(element)} ></i>
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
              ?<h1>MODIFICAR EDITORIAL</h1>
              :<h1>NUEVO EDITORIAL</h1>
              }           
            </div>              
            <form onSubmit={handleSubmit} >
              <div className="boxs-inputs">
                <div className="box-input">
                  <input type="text" name='nombre' value={form2.nombre} onChange={handleChange}  required/>
                  <span></span>
                  <label>Nombre del Editorial</label>
                </div>
              </div>
              <br />
              <div className="btnsFormulario">
              {edit === 1
              ?<button className="btnFor btn-agregar">MODIFICAR EDITORIAL</button>
              :<button className="btnFor btn-agregar">NUEVO EDITORIAL</button>
              }
              </div>   
            </form>
          </div>
        </div>
      </div>

      <div id='Idio' className='AutoresCategorias'>
        <div id="Idio2" className='Auto2 CateAutoModal'>
          <div className='Estudiantes-from boxIdioma AutoCateAgregar AutoresForm' >
            <div className="from-Titulo">
              <div className="Desactivar-From">
                  <i onClick={modalCerrar2} class="fa-solid fa-xmark"></i>
              </div>
              {edit === 1
              ?<h1>MODIFICAR IDIOMA</h1>
              :<h1>NUEVO IDIOMA</h1>
              }           
            </div>              
            <form onSubmit={handleSubmitIdioma} >
              <div className="boxs-inputs">
                <div className="box-input">
                  <input type="text" name='nombre' value={form2Idioma.nombre} onChange={handleChangeAuto}  required/>
                  <span></span>
                  <label>Nombre del Idioma</label>
                </div>
              </div>
              <br />
              <div className="btnsFormulario">
              {edit === 1
              ?<button className="btnFor btn-agregar">MODIFICAR IDIOMA</button>
              :<button className="btnFor btn-agregar">NUEVA IDIOMA</button>
              }
              </div>   
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}
