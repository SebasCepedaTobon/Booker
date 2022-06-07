import React, {useState, useEffect, version} from 'react';
import { Imagenes } from '../../../UI/Imagenes/Imagenes';
import Swal from 'sweetalert2'
import axios from 'axios';
import { AdminHeader } from '../../../UI/NavegadorAdmin/AdminHeader'
import { AdminNavegador } from '../../../UI/NavegadorAdmin/AdminNavegador'
import '../../../../Static/Admin.css'
import '../../../../Static/MediaQueriesAdmin.css'
import { NavLink } from 'react-router-dom';



let j = []

let cate_idM = []
let cate_nombreM = []
let cate = []

let auto_idM = []
let auto_nombreM = []
let auto = []

let librosEstado = []

let librosEstadoCerar = {}



export const TablaLibros = () => {

  let url="https://bookerbackapi.herokuapp.com/modulos/libros/";
  const [libros, setLibros] = useState([])
  const [categorias, setCategorias] = useState()
  const [autores, setAutores] = useState()
  const [idioma, setIdioma] = useState()
  const [editorial, setEditorial] = useState()
  const [estado, setEstado] = useState()
 

  let imagen_libro=""
  let setearImg

  const [form2, setForm2] = useState({})

  const [formEstado, setFormEstado] = useState({})

  const peticionGet=()=>{
    axios.get(url).then(response=>{
      setLibros(response.data);

      librosEstado = response.data

      librosEstado.map((element,_) => {
        let id = element.id_libro
        let bootonEstado = document.getElementById(id)
        let estado = element.estado
        if (estado === 'A') {
          bootonEstado.style.backgroundColor = "#2fd319"
        }else{
          bootonEstado.style.backgroundColor = "#193193"
        }
      })
      
    }).catch(error=>{
      console.log(error.message);
    })

    
  }

  const peticionGetNoDisponible=()=>{

    axios.get("https://bookerbackapi.herokuapp.com/modulos/libros/?estado=I").then(response=>{
      setLibros(response.data);

      librosEstado = response.data
      
      librosEstado.map((element,_) => {
        console.log("Hola");
        let id = element.id_libro
        let bootonEstado = document.getElementById(id)
        console.log(bootonEstado.id)
        let estado = element.estado
        if (estado === 'A') {
          bootonEstado.style.backgroundColor = "#2fd319"
        }else{
          bootonEstado.style.backgroundColor = "#193193"
        }
    
        console.log(element)
      })
      
    }).catch(error=>{
      console.log(error.message);
    })    
  }

  const fetchCate=async()=>{
    const response = await fetch("https://bookerbackapi.herokuapp.com/modulos/categorias/")
    const responseJSON = await response.json()
    setCategorias(responseJSON)
}

const fetchAutores=async()=>{
  const response = await fetch("https://bookerbackapi.herokuapp.com/modulos/autores/")
  const responseJSON = await response.json()
  setAutores(responseJSON)
}

const fetchIdioma=async()=>{
  const response = await fetch("https://bookerbackapi.herokuapp.com/modulos/idiomas/")
  const responseJSON = await response.json()
  setIdioma(responseJSON)
}

const fetchEditorial=async()=>{
  const response = await fetch("https://bookerbackapi.herokuapp.com/modulos/editoriales/")
  const responseJSON = await response.json()
  setEditorial(responseJSON)
}

  const llenarSelect = (idioma_id, editorial_id, estado_id) =>{
    /* id_idiomaM = idioma_id
    id_editorialM = editorial_id */
    const idioma = document.getElementById('selectIdioma')
    const editorial = document.getElementById('selectEdito')
    const estado =  document.getElementById('selectEstado')
    idioma.value = idioma_id
    editorial.value = editorial_id
    estado.value = estado_id
  }


  const modalForm  = (idioma_id, editorial_id,estado_id, e) => {
    const overlay = document.getElementById('overlay')
    const from_tablas = document.querySelector('.from-tablas')
    overlay.style.visibility = "visible"
    from_tablas.style.transform="scale(1)"
    from_tablas.style.opacity="2"

    llenarSelect(idioma_id, editorial_id,estado_id)
    
  }

  const modalCerrar = (e) =>{
    const overlay = document.getElementById('overlay')
    const from_tablas = document.querySelector('.from-tablas')

    overlay.style.visibility = "hidden"
    from_tablas.style.transform="scale(0.6)"
    from_tablas.style.opacity="0"
    setTimeout(() => {
      vaciarCate(e)
      vaciarAuto(e)
    }, 500);
  }


const handleChange = (e) =>{

  console.log(e);

  const idioma = document.getElementById('selectIdioma')
  const id_editorial = document.getElementById('selectEdito')
  const estado =  document.getElementById('selectEstado')

  console.log(form2);
  
  setForm2({
  ...form2,
  [e.target.name]: e.target.value,
  id_idioma: Number(idioma.value),
  id_editorial: Number(id_editorial.value),
  categorias: cate_idM,
  autores: auto_idM,
  estado: estado.value
  })
  console.log(form2);
}


const updateData = (data) =>{

  console.log(data);

  categoriasSelecionadas(data)

  let idioma_id=data.id_idioma.id_idioma
  let editorial_id=data.id_editorial.id_editorial
  let estado_id=data.estado

  setForm2(data)
  console.log(form2)
  modalForm(idioma_id, editorial_id,estado_id)
}

/* const updateDataEstado = (data) =>{
  categoriasSelecionadas(data)

  let idioma_id=data.id_idioma.id_idioma
  let editorial_id=data.id_editorial.id_editorial
  let estado_id=data.estado

  setForm2(data)
  ventanaEstado()
} */



const deleteData = async (data) =>{
  console.log(data.id_libro);
  let isDelete = window.confirm(
      `Estas seguro de eliminar el registro con el id ` + data.id_libro
  )
  if(isDelete){
      let endpoint = url+data.id_libro+'/'
      await axios.delete(endpoint)
      .then((res) =>{
          window.location.href="/TLibros"
          console.log(res);
      })
      
  }
  
}

const vaciarCate = (e) => {
  
  cate_idM = []
  cate_nombreM = []
  const texCate = document.getElementById('inputCate')
  texCate.value = ""
  handleChange(e)
}
const vaciarAuto = (e) => {
  
  auto_idM = []
  auto_nombreM = []
  const texAuto = document.getElementById('inputAuto')
  texAuto.value = ""
  handleChange(e)
}

const categoriasSelecionadas = (data) =>{

  let cate_id = data.categorias
  cate_id.map(element => {
    cate_idM.push(element.id_categoria)
    cate_nombreM.push(element.nombre)    
  })
  const texCate = document.getElementById('inputCate')
  texCate.value = cate_nombreM
  console.log(cate_nombreM);

  let auto_id = data.autores
  auto_id.map(element => {
    auto_idM.push(element.id_autor)
    auto_nombreM.push(element.nombres)
  })
  console.log(auto_nombreM);
  const texAuto = document.getElementById('inputAuto')
  texAuto.value = auto_nombreM

}

const peticionGetCateLibro=(e)=>{
  const categorias = document.getElementById('selecCate')
  const inputCate = document.getElementById('inputCate')

  console.log(categorias.value);
  axios.get("https://bookerbackapi.herokuapp.com/modulos/categorias/" + categorias.value).then(response=>{
    cate = response.data;

    cate_idM.push(cate.id_categoria)

    cate_nombreM.push(" " + cate.nombre)

    inputCate.value = cate_nombreM
    console.log(cate_idM);
  }).catch(error=>{
    console.log(error.message);
  })

  handleChange(e)
}

const peticionGetAutoLibro=(e)=>{
  const autores = document.getElementById('selecAuto')
  const inputAuto = document.getElementById('inputAuto')
  axios.get("https://bookerbackapi.herokuapp.com/modulos/autores/" + autores.value).then(response=>{
    auto = response.data;

    auto_idM.push(auto.id_autor)

    auto_nombreM.push( " " + auto.nombres + " " + auto.apellidos)

    inputAuto.value = auto_nombreM
  }).catch(error=>{
    console.log(error.message);
  })

  handleChange(e)
}


const handleSubmit = (e) =>{
  handleChange(e)
  e.preventDefault()
  updateData2()
}

const handleSubmitEstado = () =>{
  librosEstadoCerar.id_editorial = librosEstadoCerar.id_editorial.id_editorial
  librosEstadoCerar.id_idioma = librosEstadoCerar.id_idioma.id_idioma

  let id_cate = []
  let id_auto = []

  librosEstadoCerar.categorias.forEach(element => {
    id_cate.push(element.id_categoria)
  });

  librosEstadoCerar.autores.forEach(element => {
    id_auto.push(element.id_autor)
  })

  librosEstadoCerar.categorias = id_cate
  librosEstadoCerar.autores = id_auto
  librosEstadoCerar.estado = 'I'

  updateData2Estado()
}



const updateData2 = () =>{

  console.log(form2 + " form22222");
  let endpoint = url+form2.id_libro+'/'
  axios.put(endpoint, form2)
  .then((res) => {
      window.location.href="/TLibros"
      console.log(res);
  })
}

const updateData2Estado = () =>{
  let endpoint = url+ formEstado.id_libro +'/'
  axios.put(endpoint, formEstado)
  .then((res) => {
      window.location.href="/TLibros"
      console.log(res);
  })
}


const updateEstado = (libro) =>{

  librosEstadoCerar = libro
  setFormEstado(libro)
  ventanaEstado()
}

const ventanaEstado  = () => {
  const canbioEstado = document.getElementById('estadoCambio')
  canbioEstado.style.visibility = "visible"
  canbioEstado.style.transform="scale(1)"
  canbioEstado.style.opacity="2"

  /* actualizarEstado(libro) */
}

console.log(formEstado);

useEffect(()=>{

  peticionGet()
  fetchCate()
  fetchAutores()
  fetchEditorial()
  fetchIdioma()

  setEstado("hola") 

},[])

const cerrarEstado = () => {
  
  console.log(librosEstadoCerar);
  const canbioEstado = document.getElementById('estadoCambio')

  canbioEstado.style.visibility = "hidden"
  canbioEstado.style.transform="scale(0.6)"
  canbioEstado.style.opacity="0"
}


const setearImagen = (e) =>{
  setearImg=e.target.files[0]
  uploadImage(e)
}

const uploadImage = (e) => {
  const data = new FormData()
  data.append("file", setearImg)
  data.append("upload_preset", "booker")
  data.append("cloud_name","bookerimg")
  fetch("  https://api.cloudinary.com/v1_1/bookerimg/image/upload",{
  method:"post",
  body: data
  })
  .then(resp => resp.json())
  .then(data => {
    console.log(data.url);
  setForm2({
    ...form2,
    imagen_libro: data.url
  })
  console.log(form2);
  })
  .catch(err => console.log(err))

  handleChange(e)
}

const mostrarArchivo = (e) => {
  console.log(e);
  const images = e.target.files
  imagen_libro = images[0].name;


  const tituImagen = document.querySelector(".nomImg");
  console.log(tituImagen);
  tituImagen.innerText = imagen_libro;
  // setearImagen(e)
};

const librosBusqueda=()=>{
  const inputBuscar = document.getElementById('elInput')

  axios.get("https://bookerbackapi.herokuapp.com/modulos/libros/?search=" + inputBuscar.value).then(response=>{
      setLibros(response.data);

      librosEstado = response.data
      
      librosEstado.map((element,_) => {
        console.log("Hola");
        let id = element.id_libro
        let bootonEstado = document.getElementById(id)
        console.log(bootonEstado.id)
        let estado = element.estado
        if (estado === 'A') {
          bootonEstado.style.backgroundColor = "#2fd319"
        }else{
          bootonEstado.style.backgroundColor = "#193193"
        }
    
        console.log(element)
      })
      
    }).catch(error=>{
      console.log(error.message);
    })    
}

  return(

    <div className='MainAdministrativo'>
      <div className="box-AdminNavegador">
        <AdminNavegador/>
      </div>
      <div className="box-Header-Admin">
        <AdminHeader/>
        <div className='box-Tabla' >
          <div className='Tabla'>
          <div className='categoriasMN'  >
          <div className='btnMulta' onClick={peticionGet} >
            <div className='contenidoMultas' >
              <p>Libros</p>
            </div>
          </div>
          <div className='btnMulta' onClick={peticionGetNoDisponible} >
            <div className='contenidoMultas' >
              <p>Libros Inactivos</p>
            </div>
          </div>
          <div className='btnMulta' >
            <div className='contenidoMultas'>
              <p>Prestados</p>
            </div>
          </div>
        </div>
            <div className="TituloLibro">
              <p>Libros</p>
              
              <div id='buscador' className="buscador">
                  <input onChange={librosBusqueda} id='elInput' className='elInput' type="text" autoFocus placeholder='Buscar...'/>
                  <i onClick={librosBusqueda} class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div className='tr'>
              <div className='td-0'><p>Imagen</p></div>
              <div className='td-1'><p>Nombre</p></div>
              <div className='td-2'><p>Ejemplares</p></div>
              <div className='td-3'><p>Categorias</p></div>
              <div className='td-6'><p>Estado</p></div>
              <div className='td-5'><p>Opciones</p></div>
            </div>
            <div className='Tabla-Info' >              
                  {libros.map((libro, index)=>{
                    j = libro.categorias
                    
                    return(
                      <div key={index} className='tr-1'>
                        
                        <div className='td-0'>
                          <Imagenes clase='img' url={libro.imagen_libro} />
                        </div>
                        <div className='td-1'>
                          <p className='L1P'>{libro.nombre}</p>
                        </div>                        
                        <div className='td-2'>{libro.numero_paginas}</div>
                        
                        <div className='td-3'>
                          <p>                          
                          {
                            j.map(element => element.nombre).join(', ')
                          }
                          </p>
                        </div>
                        
                        <div className="td-6">
                        <input
                        id={libro.id_libro}
                        type='button'
                        onClick={()=>updateEstado(libro)}
                        className='inputCheckbox'
                        />
                        </div>
                        { /*QUEDO EN LOS BOTONES*/ }
                        <div className='td-5'>
                          <i onClick={()=>updateData(libro)}  class="fa-solid fa-pen-to-square"></i>
                          <i  onClick={()=>deleteData(libro)} class="fa-solid fa-trash-can" ></i>
                        </div>
                      </div>
                    )
                  })}
              
                </div>
              </div>

        <div id='Activar-From' className="Activar-From">
        <NavLink to='/AgregarLibro' className='vinculo' activeclassname="active"> 
        <i class="fa-solid fa-folder-plus"></i>
        </NavLink>
        </div> 
        </div>
      </div>
      <div id='overlay' className='overlay'>
        <div className="from-tablas">            
          <div className='Libros-from' >
            <div className="from-Titulo">
            <div className="Desactivar-From">
              <i onClick={modalCerrar} class="fa-solid fa-xmark"></i>
            </div>
              <h1 className="btn btn-primary">
                      ACTUALIZAR LIBRO
              </h1>             
            </div>
            <form onSubmit={handleSubmit}>
              <div className='boxs-inputs'>          
                <div className="box-input">
                  <input name='isbn' type="number" onChange={handleChange} value={form2.isbn} required/>
                  <span></span>
                  <label>ISBN</label>
                </div>

                <img src={form2.imagen_libro} className="imgEditar" alt="" />
                <div class="file-select" id="src-file1" >
                  <input 
                  type="file" name="imagen_libro" onChange= {(e)=>{
                    mostrarArchivo(e)
                    setearImagen(e)
                  }} />
                  <h5 className='nomImg'></h5>
                </div>
                  
                
           
                <div className="box-input">
                  <input name='nombre' onChange={handleChange} value={form2.nombre} id='nombreLibro' type="text" required/>
                  <span></span>
                  <label>Nombre</label>
                </div>

               {/*  <div className="box-input">
                  <input id='NumEmplares' type='number' name='cant_ejemplares' onChange={handleChange} value={form2.cant_ejemplares} required/>
                  <span></span>
                  <label>Cantidad Ejemplares</label>
                </div>  */}


              </div>

              <div className="boxs-inputs">
                <div className="box-input">
                  <input type="number" name='numero_paginas' onChange={handleChange} value={form2.numero_paginas}  required/>
                  <span></span>
                  <label>N° Paginas</label>
                </div>

                <div className="box-input">
                  <input type="number" name='numero_capitulos' onChange={handleChange} value={form2.numero_capitulos} required/>
                  <span></span>
                  <label>Numero Capitulos</label>
                </div>

                <div className="box-input">
                  <input type="text" name='edicion' onChange={handleChange} value={form2.edicion} required/>
                  <span></span>
                  <label>Edicion</label>
                </div>
                
              </div>

              <div className="boxs-inputs">
                <div className="box-input">
                    <input type="text" name='anexos' onChange={handleChange} value={form2.anexos} required/>
                    <span></span>
                    <label>Anexos</label>
                </div>

                <div className="box-input">
                  <input name='presentacion' onChange={handleChange} value={form2.presentacion} type="text" required/>
                  <span></span>
                  <label>Presentación</label>
                </div> 

                <div className="box-select">
                  <select id='selectEdito' onChange={handleChange}  >
                    <option className='' value="">Editorial...</option>
                    {!editorial? "" :
                    editorial.map((element, key)=>{
                      return(
                        <option className='optionSelecionar' key={key} value={element.id_editorial}>{element.nombre}</option>
                      )
                      })}
                  </select>
                </div>
              </div>

            
              <div className="boxs-inputs">

                <div className="box-select">
                  <select id='selectIdioma' onChange={handleChange} >
                    <option value="">Idioma...</option>
                    {!idioma? "" :
                    idioma.map((element, key)=>{
                      return(
                        <option key={key} value={element.id_idioma}>{element.nombre}</option>
                      )
                      })}
                  </select>
                </div>
 
                <div className="box-select">                  
                  <select id='selectEstado' onChange={handleChange}>
                      <option value="">Estado...</option>
                      <option value="A">Activo</option>
                      <option value="I">Inactivo</option>
                  </select>
                </div>


                <div className="box-textareaa">
                  <textarea placeholder='Palabras Clave...' name='palabras_clave' onChange={handleChange} value={form2.palabras_clave}  ></textarea>
                  
                </div>                
              </div>


              <div className="boxs-inputs">
              <div className="box-select">
                  <p onClick={vaciarAuto} >X</p>
                  <textarea className='textareaCate' readOnly='readOnly' id='inputAuto' type="text" />
                  <select  id='selecAuto' onChange={peticionGetAutoLibro}>
                  <option value="" selected>Autores...</option>
                    {!autores ? "" :
                    autores.map((element, key)=>{
                      return(
                        <option key={key} value={element.id_autor}>{element.nombres} {element.apellidos}</option>
                      )
                        })}                  
                  </select>
                </div>

                <div className="box-select">
                  <p onClick={vaciarCate}>X</p>
                  <textarea className='textareaCate' readOnly='readOnly' id='inputCate' type="text"/>
                  <select  id='selecCate' onChange={peticionGetCateLibro}>
                    <option value="" selected>Categorias...</option>
                    {!categorias ?"":
                    categorias.map(element=>{
                      return(
                          <option className='holaOption' name={element.nombre} value={element.id_categoria}  >{element.nombre}</option>
                          )
                        })}                  
                  </select>
                </div>

                
                <div className="box-textareaa box-textareaDescripcion">
                  <textarea placeholder='Descripción...' name="descripcion" onChange={handleChange} value={form2.descripcion}  ></textarea>
                  
                </div>               
              </div> 

              <div className="btnsFormulario">
                <button className="btnFor btn-actializar">
                    Actualizar
                  </button>
                
              </div>
            </form>
          </div>
        </div>
      </div>

      <div id='estadoCambio' className="cambioEstado">
        <p>Confirmar Reserva</p>
        <div className="boxBtnEstado">
          <button onClick={cerrarEstado} >Cancelar</button>
          <button onClick={handleSubmitEstado} >Confirmar</button>
        </div>
      </div>
    </div>
    )
}
