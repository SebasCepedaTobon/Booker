import React, {useState, useEffect, version} from 'react';
import { Imagenes } from '../../../UI/Imagenes/Imagenes';
import Swal from 'sweetalert2'
import axios from 'axios';
import { AdminHeader } from '../../../UI/NavegadorAdmin/AdminHeader'
import { AdminNavegador } from '../../../UI/NavegadorAdmin/AdminNavegador'
import '../../../../Static/Admin.css'
import '../../../../Static/MediaQueriesAdmin.css'
import '../../../../Static/TablasLibro.css'
import { NavLink } from 'react-router-dom';



let c = []

let a = []

let cate_idM = []
let cate_nombreM = []
let cate = []

let auto_idM = []
let auto_nombreM = []
let auto = []



export const TablaLibros = () => {

  let url="https://bookerbackapi.herokuapp.com/modulos/libros/";
  const [libros, setLibros] = useState([])
  const [categorias, setCategorias] = useState()
  const [autores, setAutores] = useState()
  const [idioma, setIdioma] = useState()
  const [editorial, setEditorial] = useState()
 

  let imagen_libro=""
  let setearImg

  const [form2, setForm2] = useState({})

  const peticionGet=()=>{
    axios.get(url).then(response=>{
      setLibros(response.data);
      
    }).catch(error=>{
      console.log(error.message);
    })
  }

  const peticionGetNoDisponible=()=>{

    axios.get("https://bookerbackapi.herokuapp.com/modulos/libros/?estado=I").then(response=>{
      setLibros(response.data);
      
    }).catch(error=>{
      console.log(error.message);
    })    
  }

  const peticionGetDisponible=()=>{

    axios.get("https://bookerbackapi.herokuapp.com/modulos/libros/?estado=A").then(response=>{
      setLibros(response.data);
      
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


  const modalForm  = (idioma_id, editorial_id,estado_id) => {

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
  const idioma = document.getElementById('selectIdioma')
  const id_editorial = document.getElementById('selectEdito')
  const estado =  document.getElementById('selectEstado')

  if(estado.value !==""){
    estado.style.border = '2px solid #2691D9'
  }else{
    estado.style.border = '2px solid #adadad'
  }

  if(idioma.value !==""){
    idioma.style.border = '2px solid #2691D9'
  }else{
    idioma.style.border = '2px solid #adadad'
  }

  if(id_editorial.value !==""){
    id_editorial.style.border = '2px solid #2691D9'
  }else{
    id_editorial.style.border = '2px solid #adadad'
  }



  const inputAuto = document.getElementById('inputAuto')
    const labelAuto = document.getElementById('labelAuto')
    if(inputAuto.value!==""){
      inputAuto.style.border = "2px solid #2691D9"
      labelAuto.style.marginBottom = "80px"
      labelAuto.style.color = "#2691D9"
    }else{
      inputAuto.style.border = "2px solid #adadad"
      labelAuto.style.marginBottom = "25px"
      labelAuto.style.color = "#adadad"
    }

    const inputCate = document.getElementById('inputCate')
    const labelCate = document.getElementById('labelCate')
    if(inputCate.value!==""){
      inputCate.style.border = "2px solid #2691D9"
      labelCate.style.marginBottom = "80px"
      labelCate.style.color = "#2691D9"
    }else{
      inputCate.style.border = "2px solid #adadad"
      labelCate.style.marginBottom = "25px"
      labelCate.style.color = "#adadad"
    }

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

  const idioma = document.getElementById('selectIdioma')
  const id_editorial = document.getElementById('selectEdito')
  const estado =  document.getElementById('selectEstado')

  if(estado.value !==""){
    estado.style.border = '2px solid #2691D9'
  }else{
    estado.style.border = '2px solid #adadad'
  }

  if(idioma.value !==""){
    idioma.style.border = '2px solid #2691D9'
  }else{
    idioma.style.border = '2px solid #adadad'
  }

  if(id_editorial.value !==""){
    id_editorial.style.border = '2px solid #2691D9'
  }else{
    id_editorial.style.border = '2px solid #adadad'
  }

  const inputAuto = document.getElementById('inputAuto')
    const labelAuto = document.getElementById('labelAuto')
    if(inputAuto.value!==""){
      inputAuto.style.border = "2px solid #2691D9"
      labelAuto.style.marginBottom = "80px"
      labelAuto.style.color = "#2691D9"
    }else{
      inputAuto.style.border = "2px solid #adadad"
      labelAuto.style.marginBottom = "25px"
      labelAuto.style.color = "#adadad"
    }

    const inputCate = document.getElementById('inputCate')
    const labelCate = document.getElementById('labelCate')
    if(inputCate.value!==""){
      inputCate.style.border = "2px solid #2691D9"
      labelCate.style.marginBottom = "80px"
      labelCate.style.color = "#2691D9"
    }else{
      inputCate.style.border = "2px solid #adadad"
      labelCate.style.marginBottom = "25px"
      labelCate.style.color = "#adadad"
    }

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
    handleChange(e)
  }).catch(error=>{
    console.log(error.message);
  })

}

const peticionGetAutoLibro=(e)=>{
  const autores = document.getElementById('selecAuto')
  const inputAuto = document.getElementById('inputAuto')
  axios.get("https://bookerbackapi.herokuapp.com/modulos/autores/" + autores.value).then(response=>{
    auto = response.data;

    auto_idM.push(auto.id_autor)

    auto_nombreM.push( " " + auto.nombres + " " + auto.apellidos)
    inputAuto.value = auto_nombreM
    handleChange(e)
  }).catch(error=>{
    console.log(error.message);
  })

  
}


const handleSubmit = (e) =>{
  handleChange(e)
  e.preventDefault()
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

const handleSubmitEstado = (libro) =>{

  libro.id_editorial = libro.id_editorial.id_editorial
  libro.id_idioma = libro.id_idioma.id_idioma

  let id_cate = []
  let id_auto = []

  libro.categorias.forEach(element => {
    id_cate.push(element.id_categoria)
  });

  libro.autores.forEach(element => {
    id_auto.push(element.id_autor)
  })

  libro.categorias = id_cate
  libro.autores = id_auto
  if (libro.estado === 'A') {    
    libro.estado = 'IV'
  }else{
    libro.estado = 'A'
  }
  
  Swal.fire({
    title: '¿Esta seguro de guardar los cambios?',
    icon: 'warning',
    confirmButtonText: 'Si, Guardar',
    showCancelButton: true,
    cancelButtonText: 'No, cancelar',
    reverseButtons: true
  }).then((resultado) => {
    if (resultado.isConfirmed) {
      updateData2Estado(libro)
    }
  })
  
}



const updateData2 = () =>{

  console.log(form2 + " form22222");
  let endpoint = url+form2.id_libro+'/'
  axios.put(endpoint, form2)
  .then((res) => {
    peticionGet()
    modalCerrar()
    console.log(res);
  })
}

const updateData2Estado = (libro) =>{

  let endpoint = url+ libro.id_libro +'/'
  axios.put(endpoint, libro)
  .then((res) => {
    peticionGet()
    console.log(res);
  })
}


const updateEstado = (libro) =>{
  handleSubmitEstado(libro)
}

useEffect(()=>{

  peticionGet()
  fetchCate()
  fetchAutores()
  fetchEditorial()
  fetchIdioma()

  

},[])

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
      
    }).catch(error=>{
      console.log(error.message);
    })    
}

/*#################################TEMA DE EJEMPLARES###############################*/

const [ejeplaresInfo, setEjemplparesInfo] = useState([])

const ejemplares =(data)=>{

    axios.get("https://bookerbackapi.herokuapp.com/modulos/ejemplares/?estado=&id_libro__id_libro=" + data.id_libro).then(response=>{
      setEjemplparesInfo(response.data);
      
    }).catch(error=>{
      console.log(error.message);
    })

    abrirEjemplares()
}

const abrirEjemplares = () =>{

  const overlayEjem = document.getElementById('overlayEjem')
  const from_tablasEjem = document.querySelector('.box-ejemplares2')
  overlayEjem.style.visibility = "visible"
  from_tablasEjem.style.transform="scale(1)"
  from_tablasEjem.style.opacity="2"
}

const cerrarEjemplares = () =>{

  const overlayEjem = document.getElementById('overlayEjem')
  const from_tablasEjem = document.querySelector('.box-ejemplares2')

  overlayEjem.style.visibility = "hidden"
  from_tablasEjem.style.transform="scale(0.6)"
  from_tablasEjem.style.opacity="0"

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
          <div className='btnMulta' onClick={peticionGetDisponible} >
            <div className='contenidoMultas' >
              <p>Libros Activos</p>
            </div>
          </div>
          <div className='btnMulta' onClick={peticionGetNoDisponible} >
            <div className='contenidoMultas' >
              <p>Libros Inactivos</p>
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
              <div className='td-2'><p>Categorias</p></div>
              <div className='td-3'><p>Autores</p></div>
              <div className='td-6'><p>Estado</p></div>
              <div className='td-5'><p>Opciones</p></div>
            </div>
            <div className='Tabla-Info' >
                  {libros.map((libro, index)=>{
                    c = libro.categorias
                    a = libro.autores
                                        
                    return(
                      <div key={index} className='tr-1'>
                        
                        <div className='td-0'>
                          <Imagenes clase='img' url={libro.imagen_libro} />
                        </div>
                        <div className='td-1'>
                          <p className='L1P'>{libro.nombre}</p>
                        </div>                        
                        <div className='td-2'>
                          <p>
                          {
                            c.map(element => element.nombre).join(', ')
                          }                         
                          </p>
                        </div>
                        
                        <div className='td-3'>
                          <p>
                          {
                            a.map(element => element.nombres).join(', ')
                          }                      
                          
                          </p>
                        </div>
                        
                        <div className="td-6">
                        {libro.estado === 'A'
                          ?<p className='pActivo'>Activo</p>                          
                          :<p className='pInactivo'>Inactivo</p>
                        }
                        </div>
                        { /*QUEDO EN LOS BOTONES*/ }
                        <div className='td-5'>
                          {libro.estado === 'A'
                          ?<div data-title='Inactivar Libro' className='prueba' onClick={()=>updateEstado(libro)} ></div>
                          :<div data-title='Activar Libro' className='prueba prueba2' onClick={()=>updateEstado(libro)} ></div>
                          }
                          <i data-title='Detalles Libro' onClick={()=>{ejemplares(libro)}} class="fa-solid fa-eye fa-eyeAdmin"></i>
                          
                          <i onClick={()=>updateData(libro)} data-title='Actualizar Libro'  class="fa-solid fa-pen-to-square"></i>
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

                <div className="box-input">
                  <input name='nombre' onChange={handleChange} value={form2.nombre} id='nombreLibro' type="text" required/>
                  <span></span>
                  <label>Nombre</label>
                </div>
                <div className="box-input">
                  <input type="number" name='numero_paginas' onChange={handleChange} value={form2.numero_paginas}  required/>
                  <span></span>
                  <label>N° Paginas</label>
                </div>

              </div>

              <div className="boxs-inputs">
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
                <div className="box-input">
                    <input type="text" name='anexos' onChange={handleChange} value={form2.anexos} required/>
                    <span></span>
                    <label>Anexos</label>
                </div>
                
              </div>

              <div className="boxs-inputs">

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
              </div>

            
              <div className="boxs-inputs">
              
                <div className="box-select">                  
                  <select id='selectEstado' onChange={handleChange}>
                      <option value="">Estado...</option>
                      <option value="A">Activo</option>
                      <option value="IV">Inactivo</option>
                  </select>
                </div>
                  <i class="fa-solid fa-xmark faEdit" onClick={vaciarCate} ></i>
                  <textarea className='texLibro texLibroCateAuto' readOnly='readOnly' id='inputCate' type="text"/>
                  <label id='labelCate' className='labelLibro labelLibroCate'>Categorias</label>
                  <select  id='selecCate' className='selectCategorias' onChange={(e)=>{peticionGetCateLibro(e)}}>
                    <option value="" selected></option>
                    {!categorias ?"":
                    categorias.map(element=>{
                      return(
                          <option className='holaOption' name={element.nombre} value={element.id_categoria}  >{element.nombre}</option>
                          )
                        })}            
                  </select>
                <i class="fa-solid fa-xmark fa-xmarkAuto faEdit " onClick={vaciarAuto} ></i>
                  <textarea className='texLibro texLibroCateAuto' readOnly='readOnly' id='inputAuto' type="text" />
                  <label id='labelAuto' className='labelLibro labelLibroAuto'>Autores</label>
                  <select  id='selecAuto' className='selectAutores' onChange={(e)=>{peticionGetAutoLibro(e)}}>
                  <option value="" selected></option>
                    {!autores ? "" :
                    autores.map((element, key)=>{
                      return(
                        <option key={key} value={element.id_autor}>{element.nombres} {element.apellidos}</option>
                      )
                        })}                  
                  </select>
              </div>

              <div className="boxs-inputs">
              <textarea className='texLibro texLibro1' required name='palabras_clave' onChange={handleChange} value={form2.palabras_clave}  ></textarea>
                <label className="labelLibro labelLibro1">Palabras Clave</label>
                <textarea required className='texLibro texLibro2' name="descripcion" onChange={handleChange} value={form2.descripcion}  ></textarea>
                <label className="labelLibro labelLibro2">Descripción</label>

                <div class="file-select" id="src-file1" >
                  <input 
                  type="file" name="imagen_libro" onChange= {(e)=>{
                    mostrarArchivo(e)
                    setearImagen(e)
                  }} />
                  <h5 className='nomImg'></h5>
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

      { /*------------------overlay ejemplares---------------*/}

      <div id='overlayEjem' className="overlay">
        <div id='box-ejeplar2' className="box-ejemplares2">
          <div className="boxTablaEjemplares">
          <div className='Tabla'>
            <div className="TituloLibro">
              <p>Ejemplares{" " + ejeplaresInfo.length}</p>     
                <i onClick={librosBusqueda} class="fa-solid fa-magnifying-glass"></i>
              <i onClick={cerrarEjemplares} class="fa-solid fa-xmark"></i>              
            </div>
            <div className='tr'>
              <div className='td-0'><p>Imagen</p></div>
              <div className='td-1'><p>Nombre</p></div>
              <div className='td-2'><p>N° Ejemplar</p></div>
              <div className='td-3'><p>Autores</p></div>
              <div className='td-6'><p>Estado</p></div>
              <div className='td-5'><p>Opciones</p></div>
            </div>
            <div className="scrollEjemplares">
            <div className='Tabla-Info' >
                  {ejeplaresInfo.map((libro, index)=>{
                    /* c = libro.categorias
                    a = libro.autores */
                                        
                    return(
                      <div key={index} className='tr-1'>
                        <div className='td-0'>
                          <Imagenes clase='img' url={libro.id_libro.imagen_libro} />
                        </div>
                        <div className='td-1'>
                          <p className='L1P'>{libro.id_libro.nombre}</p>
                        </div>                        
                        <div className='td-2'>
                          <p>{libro.num_ejemplar}</p>
                        </div>
                        
                        <div className='td-3'>
                          <p>
                          {
                            a.map(element => element.nombres).join(', ')
                          }                      
                          
                          </p>
                        </div>
                        
                        <div className="td-6">
                        {libro.estado === 'D'
                          ?<p className='pActivo'>Disponible</p>                          
                          :<p className='pInactivo'>No Disponible</p>
                        }
                        </div>
                        { /*QUEDO EN LOS BOTONES*/ }
                        <div className='td-5'>
                          <i class="fa-solid fa-pen-to-square"></i>
                        </div>
                      </div>
                    )
                  })}
              
                </div>
            </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    )
}
