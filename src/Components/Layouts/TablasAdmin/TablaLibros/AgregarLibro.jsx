import React, {useState, useEffect, Component} from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import '../../../../Static/Admin.css'
import '../../../../Static/MediaQueriesAdmin.css'
import { NavLink } from 'react-router-dom';


export const initialForm = {
  isbn: "",
  nombre: "",
  imagen_libro: "",
  edicion: "",
  descripcion: "",
  numero_paginas: null,
  presentacion: "",
  cant_ejemplares: "",
  anexos: "",
  palabras_clave: "",
  estado: "A",
  id_idioma: null,
  id_editorial: null,
  autores: [],
  categorias: []
}


let auto = []
let llenoAuto = []
let llenoInputAuto = []
let cate = []
let llenoCate = []
let llenoInputCate = []

export const AgregarLibro = () => {
  
  
  
  const url="https://bookerbackapi.herokuapp.com/modulos/libros/";
  const [formLibros, setformLibros] = useState(initialForm)
  
  
  const [categorias, setCategorias] = useState()
  const [autores, setAutores] = useState()
  const [idioma, setIdioma] = useState()
  const [editorial, setEditorial] = useState()
  let imagen_libro=""
  let setearImg
  


  const peticionGetAutoLibro=()=>{
    const autores = document.getElementById('selecAuto')
    const inputAuto = document.getElementById('inputAuto')
    axios.get("https://bookerbackapi.herokuapp.com/modulos/autores/" + autores.value).then(response=>{
      auto = response.data;
      console.log(auto);
      llenoAuto.push(auto.id_autor)
      console.log(llenoAuto);
      llenoInputAuto.push( " " + auto.nombres + " " + auto.apellidos)
      console.log(llenoInputAuto);
      inputAuto.value = llenoInputAuto
    }).catch(error=>{
      console.log(error.message);
    })
  }

  const peticionGetCateLibro=()=>{
    const categorias = document.getElementById('selecCate')
    const inputCate = document.getElementById('inputCate')
    console.log(categorias.value);
    axios.get("https://bookerbackapi.herokuapp.com/modulos/categorias/" + categorias.value).then(response=>{
      cate = response.data;
      console.log(cate.nombre);
      console.log(cate.id_categoria);
      llenoCate.push(cate.id_categoria)
      llenoInputCate.push(" " + cate.nombre)
      inputCate.value = llenoInputCate
      console.log(llenoCate);
    }).catch(error=>{
      console.log(error.message);
    })
  }

  const uploadImage = () => {
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
    setformLibros({
      ...formLibros,
      imagen_libro: data.url
    })
    console.log(formLibros);
    })
    .catch(err => console.log(err))
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

  const mostrarArchivo = (e) => {
    console.log(e);
    const images = e.target.files
    imagen_libro = images[0].name;


    const tituImagen = document.querySelector(".nomImg");
    console.log(tituImagen);
    tituImagen.innerText = imagen_libro;
    // setearImagen(e)
  };

  const handleSubmit = (e) =>{
    e.preventDefault()
    peticionPost()
  }

  const handleChange = (e) =>{
    const id_editorial = document.getElementById('selectEdito')
    const id_idioma = document.getElementById('selectIdioma')
    const cant_ejemplares = document.getElementById('NumEmplares')
    console.log(cant_ejemplares.value);

    console.log(llenoAuto);
                
    setformLibros({
      ...formLibros,
      [e.target.name]: e.target.value,
      id_editorial: Number(id_editorial.value),
      id_idioma: Number(id_idioma.value),
      autores: llenoAuto,
      categorias: llenoCate,
      cant_ejemplares: Number(cant_ejemplares.value)
    })
    console.log(formLibros);
  }

/*   const mandarImagen = (img) =>{
    console.log(img);
    setformLibros({
      ...formLibros,
      imagen_libro: img
    })
  } */

  /* useEffect(() => {
    setNuevoForm(formLibros)
  }, [formLibros]) */
  

  const peticionPost = async () =>{
        console.log(formLibros);
        await axios.post(url, formLibros)
        .then(res=>{

          window.location.href="/TLibros"
            console.log(res)
        })
        console.log(formLibros);
    }

    const setearImagen = (e) =>{
      setearImg=e.target.files[0]
      uploadImage()
    }

  useEffect(()=>{
    fetchCate()
    fetchAutores()
    fetchEditorial()
    fetchIdioma()
},[])

  return (
    <div className='AgregarLibros'>
        <div className="from-tablas"> 
          <div className='Libros-from' >
            <div className="from-Titulo">
              <div className="Desactivar-From">
                <NavLink to="/TLibros" >
                  <i class="fa-solid fa-xmark"></i>
                </NavLink>
              </div>
              <h1 className="btn btn-success" >
                NUEVO LIBRO
              </h1>
            </div>
            <form method="" onSubmit={handleSubmit}>
              <div className='boxs-inputs'>          
                <div className="box-input">
                  <input name='isbn' type="number" onChange={handleChange} value={formLibros.isbn} required/>
                  <span></span>
                  <label>ISBN</label>
                </div>
           
                <div className="box-input">
                  <input name='nombre' onChange={handleChange} value={formLibros.nombre} id='nombreLibro' type="text" required/>
                  <span></span>
                  <label>Nombre</label>
                </div>

                <div className="box-input">
                  <input id='NumEmplares' type='number' name='' onChange={handleChange} required/>
                  <span></span>
                  <label>Cantidad Ejemplares</label>
                </div> 
              </div>

              <div className="boxs-inputs">
                <div className="box-input">
                  <input type="number" name='numero_paginas' onChange={handleChange} value={formLibros.numero_paginas}  required/>
                  <span></span>
                  <label>N° Paginas</label>
                </div>

                <div className="box-input">
                  <input type="number" name='numero_capitulos' onChange={handleChange} value={formLibros.numero_capitulos} required/>
                  <span></span>
                  <label>Numero Capitulos</label>
                </div>

                <div className="box-input">
                  <input type="text" name='edicion' onChange={handleChange} value={formLibros.edicion} required/>
                  <span></span>
                  <label>Edicion</label>
                </div>
                
              </div>

              <div className="boxs-inputs">
                <div className="box-input">
                    <input type="text" name='anexos' onChange={handleChange} value={formLibros.anexos} required/>
                    <span></span>
                    <label>Anexos</label>
                </div>

                <div className="box-input">
                  <input name='presentacion' onChange={handleChange} value={formLibros.presentacion} type="text" required/>
                  <span></span>
                  <label>Presentación</label>
                </div> 

                <div className="box-select">
                  <select id='selectEdito' name='id_editorial' onChange={handleChange} value={formLibros.id_editorial} >
                  <option value="" selected >Editorial...</option>
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
                  <select id='selectIdioma' name='id_idioma' onChange={handleChange} value={formLibros.idioma}>
                    <option selected >Idioma...</option>
                    {!idioma? "" :
                    idioma.map((element, key)=>{
                      return(
                        <option key={key} value={element.id_idioma}>{element.nombre}</option>
                      )
                    })}
                  </select>
                </div>

                <div className="box-select">
                  <textarea className='textareaCate' readOnly='readOnly' id='inputCate' type="text"/>
                  <select id='selecCate' onChange={peticionGetCateLibro}>
                    <option value="" selected>Categorias...</option>
                    {!categorias? "":
                    categorias.map((element, key)=>{
                      return(
                          <option className='holaOption' key={key} name={element.nombre} value={element.id_categoria}  >{element.nombre}</option>
                          )
                        })}                  
                  </select>
                </div> 

                <div className="box-textareaa">
                  <textarea placeholder='Palabras Clave...' name='palabras_clave' onChange={handleChange} value={formLibros.palabras_clave}  ></textarea>
                  
                </div>                
              </div>


              <div className="boxs-inputs">
              <div className="box-select">
                   <textarea className='textareaCate' readOnly='readOnly' id='inputAuto' type="text" /> 
                  <select onChange={peticionGetAutoLibro}  id='selecAuto'>
                  <option value="" selected>Autores...</option>
                    {!autores? "" :
                    autores.map((element, key)=>{
                      return(
                        <option key={key} value={element.id_autor}>{element.nombres} {element.apellidos}</option>
                      )
                        })}                  
                  </select>
                </div>

                <div class="file-select" id="src-file1" >
                  <input 
                  type="file" name="imagen_libro" onChange= {(e)=>{
                    mostrarArchivo(e)
                    setearImagen(e)
                  }} />
                  <h5 className='nomImg'></h5>
                </div>                

                <div className="box-textareaa box-textareaDescripcion">
                  <textarea placeholder='Descripción...' name="descripcion" onChange={handleChange} value={formLibros.descripcion}  ></textarea>
                  
                </div>               
              </div> 

              <div className="btnsFormulario">
                <button className="btnFor btn-agregar">ANEXAR LIBRO</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}
