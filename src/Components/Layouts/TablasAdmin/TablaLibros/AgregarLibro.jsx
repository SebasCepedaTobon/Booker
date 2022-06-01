import React, {useState, useEffect, Component} from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import '../../../../Static/Admin.css'
import '../../../../Static/MediaQueriesAdmin.css'


export const initialForm = {
  isbn: "",
  imagen_libro: null,
  nombre: "",
  edicion: "",
  descripcion: "",
  numero_paginas: null,
  presentacion: "",
  cant_ejemplares: "",
  anexos: "",
  palabras_clave: "",
  estado: "A",
  idioma: 1,
  id_editorial: 2,
  autores: [1],
  categorias: [1]
}



export const AgregarLibro = () => {
  
  const url="https://bookerbackapi.herokuapp.com/modulos/libros/";
  const [formLibros, setformLibros] = useState(initialForm)
  /* const [image, setImage] = useState(""); */

  const [categorias, setCategorias] = useState()
  const [autores, setAutores] = useState()
  const [idioma, setIdioma] = useState()
  const [editorial, setEditorial] = useState()
 /*  const [nuevoForm, setNuevoForm] = useState() */
  let imagen_libro=""

/*   const uploadImage = () => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "ebanisteria")
    data.append("cloud_name","Ebanisteria")
    fetch("  https://api.cloudinary.com/v1_1/Ebanisteria/image/upload",{
    method:"post",
    body: data
    })
    .then(resp => resp.json())
    .then(data => {
    let imagen_producto2=data.url
    mandarImagen(imagen_producto2)
    })
    .catch(err => console.log(err))
  } */

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

/*   const mostrarArchivo = (e) => {
    const images = e.target.files
    imagen_producto = images[0].name;


    const inputFile = document.getElementById("imagen");
    const tituImagen = document.querySelector(".tituImagen");
    tituImagen.innerText = inputFile.files[0].name;

  }; */

  const handleSubmit = (e) =>{
    e.preventDefault()
    //uploadImage()
    peticionPost()
  }

  const handleChange = (e) =>{
    setformLibros({
      ...formLibros,
      [e.target.name]: e.target.value,
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

          // window.location.href="/Admin/TableProducts"
            console.log(res)
        })
        console.log(formLibros);
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
                  <input id='NumEmplares' type='number' name='cant_ejemplares' onChange={handleChange} value={formLibros.cant_ejemplares} required/>
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

                {/* <div className="box-select">
                  <select id='selectEdito' onChange={handleChange} value={formLibros.id_editorial} >
                    
                    {editorial.map((element, key)=>{
                      return(
                        <option className='optionSelecionar' key={key} value={element.id_editorial}>{element.nombre}</option>
                      )
                      })}
                  </select>
                </div> */}
              </div>

            
              <div className="boxs-inputs">

              {/* <div className="box-select">
                  <select id='selectIdioma' onChange={handleChange} value={formLibros.idioma}>
                    <option value="" selected >Idioma...</option>
                    {idioma.map((element, key)=>{
                      return(
                        <option key={key} value={element.id_idioma}>{element.nombre}</option>
                      )
                      })}
                  </select>
                </div> */}

                <div className="box-textareaa">
                  <textarea placeholder='Palabras Clave...' name='palabras_clave' onChange={handleChange} value={formLibros.palabras_clave}  ></textarea>
                  
                </div>                
              </div>


              <div className="boxs-inputs">
              {/* <div className="box-select">
                   <textarea className='textareaCate' readOnly='readOnly' id='inputAuto' type="text" /> 
                  <select onChange={handleChange} value={formLibros.autores}  id='selecAuto'>
                  <option value="" selected>Autores...</option>
                    {autores.map((element, key)=>{
                      return(
                        <option key={key} value={element.id_autor}>{element.nombres} {element.apellidos}</option>
                      )
                        })}                  
                  </select>
                </div> */}

                {/* <div className="box-select">
                  <textarea className='textareaCate' readOnly='readOnly' id='inputCate' type="text"/>
                  <select id='selecCate' onChange={handleChange} value={formLibros.categorias}>
                    <option value="" selected>Categorias...</option>
                    {categorias.map((element, key)=>{
                      return(
                          <option className='holaOption' key={key} name={element.nombre} value={element.id_categoria}  >{element.nombre}</option>
                          )
                        })}                  
                  </select>
                </div> */}

                
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
