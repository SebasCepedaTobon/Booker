import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import '../../../../Static/borrador.css'
import '../../../../Static/formAutoCate.css'
import '../../../../Static/TEventos.css'
import { AdminHeader } from '../../../UI/NavegadorAdmin/AdminHeader.jsx'
import { AdminNavegador } from '../../../UI/NavegadorAdmin/AdminNavegador.jsx'
import { Imagenes } from '../../../UI/Imagenes/Imagenes';


export const initialForm = {
  "descripcion": "",
  "imagen_evento": "",
  "titulo": "",
  "fec_inicio": "",
  "fec_fin": "",
  "estado": "AV",
  "id_bibliotecario": 4
}

let edit

export const TablaEventos = () => {

  let imagen_evento=""
  let setearImg

  const url2 = "https://bookerbackapi.herokuapp.com/modulos/eventos/"
  const [eventos, setEventos] = useState([])
  const [form2, setForm2] = useState(initialForm)


  /*------FUNCIONES USADAS PARA CATEGORIAS-------*/

  /*------FIN DE LAS FUNCIONES USADAS PARA CATEGORIAS-------*/

  useEffect(() => {
    peticionGet()
  }, [])

  /*------FUNCIONES USADAS PARA AUTORES-------*/

  const peticionGet = ()=>{
    axios.get(url2)
    .then(response=>{
      setEventos(response.data);
    })
    console.log(eventos);
  }

  const peticionGetAutoBuscar = ()=>{
    const input = document.getElementById('elInputAuto')
    axios.get("https://bookerbackapi.herokuapp.com/modulos/eventos/?search=" + input.value)
    .then(response=>{
      setEventos(response.data);
    })
    console.log(eventos);
  }

  

  const handleSubmitAuto = (e) =>{
    e.preventDefault()
    if (edit === 1) {
      modificarAuto()    
    }else{
      peticionPostAuto()
    }
  }

  const peticionPostAuto = async () =>{
    console.log(form2);
    await axios.post(url2, form2)
    .then(res=>{
      peticionGet()
      modalCerrar2()
      console.log(res)
    })
    console.log(form2);
}

const updateData2Auto = async () =>{
  let endpoint = url2+form2.id_evento+'/'
  await axios.put(endpoint, form2)
  .then((res) => {
    peticionGet()
    modalCerrar2()
    console.log(res);
  })
}

const peticionDeleteAuto = async (data) =>{

  let endpoint  = url2+data.id_evento + "/"
  await axios.delete(endpoint)
  .then((res)=>{
    peticionGet()
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

const mostrarArchivo = (e) => {
  console.log(e);
  const images = e.target.files
  imagen_evento = images[0].name;


  const tituImagen = document.querySelector(".nomImg");
  console.log(tituImagen);
  tituImagen.innerText = imagen_evento;
  // setearImagen(e)
};

const setearImagen = (e) =>{
  setearImg=e.target.files[0]
  uploadImage()
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
  setForm2({
    ...form2,
    imagen_evento: data.url
  })
  console.log(form2);
  })
  .catch(err => console.log(err))
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

  const handleChange = (e) =>{
    setForm2({
      ...form2,
      [e.target.name]: e.target.value
    })
    console.log(form2);
  }

  const updateDataAuto = (data) =>{
    edit = 1
    setForm2(data)
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
      setForm2(initialForm)
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

          <div className='TablaEventos'>
            <div className="tituloEvento">
              <p className='cambioFiltro'>Eventos</p>
              <i className="fa-solid fa-folder-plus" onClick={modalAbrir2} data-title='Agregar Autor' ></i>
              <div id='buscador' className="buscador">
                  <input id='elInputAuto' onChange={peticionGetAutoBuscar} className='elInput' type="text" autoFocus placeholder='Buscar...'/>
                  <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div className='tr'>
              <div className='td-0'><p>Imagen</p></div>
              <div className='td-1' ><p>Titulo</p></div>
              <div className='td-3' ><p>Fecha Inicio</p></div>
              <div className='td-3' ><p>Fecha Finalización</p></div>
              <div className='td-6'><p>Opción</p></div>
            </div>

            <div className="overflowTabla">
            <div className='Tabla-Info' >
              {
                eventos.map((element, key)=>{
                  return(
                <div key={key} className='tr-1'>
                  <div className='td-0'>
                    <Imagenes url={element.imagen_evento} />
                  </div>
                  <div className='td-1'><p>{element.titulo}</p></div>
                  <div className='td-3'><p>{element.fec_inicio}</p></div>
                  <div className='td-3'><p>{element.fec_fin}</p></div>
                  <div className='td-6'>
                  <i className="fa-solid fa-pen-to-square" onClick={()=>updateDataAuto(element)}></i>
                  <i className="fa-solid fa-trash-can" onClick={()=>eliminacionAuto(element)} ></i>
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


      <div id='Auto' className='AutoresCategorias '>
        <div  id='Auto2' className="Auto2 CateAutoModal">
          <div className='Estudiantes-from ventanaEvento ' >
            <div className="from-Titulo">
              <div className="Desactivar-From">
                  <i className="fa-solid fa-xmark" onClick={modalCerrar2} ></i>
              </div>
              {form2.titulo === ""
              ?<h1>NUEVO EVENTO</h1>
              :<h1>ACTUALIZAR EVENTO</h1>
              }
                              
            </div>              
            <form onSubmit={handleSubmitAuto} >
              <div className="boxs-inputs">
                <div className="imgEventoBox">
                  {form2.imagen_evento === null
                  ?<img className="imgEvento" alt="" />
                  :<img src={form2.imagen_evento} className="imgEvento" alt="" />
                  }                  
                </div>
                <div class="file-select" id="src-file1" >
                  <input 
                  type="file" name="imagen_evento" onChange= {(e)=>{
                    mostrarArchivo(e)
                    setearImagen(e)
                  }} />
                  <h5 className='nomImg'></h5>
                </div>
              </div>

              <div className="boxs-inputs">
                <textarea required name='descripcion' value={form2.descripcion} onChange={handleChange}  ></textarea>
                <label className='label' >Descripción</label>
                <div className="box-input">
                  <input type="text"  name='titulo' value={form2.titulo} onChange={handleChange} required/>
                  <span></span>
                  <label>Titulo del Evento</label>
                </div>
              </div>

              <div className="boxs-inputs">
                <div className="box-input">
                  <input type="date" name='fec_inicio' value={form2.fec_inicio} onChange={handleChange} required/>
                  <span></span>
                  <label>Fecha de Inicio</label>
                </div>
                <div className="box-input">
                  <input type="date" name='fec_fin' value={form2.fec_fin} onChange={handleChange} required/>
                  <span></span>
                  <label>Fecha Finalización</label>
                </div>
              </div>
              
              <br />
              <div className="btnsFormulario">
                {form2.titulo === ""
                ?<button className="btnFor btn-agregar">NUEVO EVENTO</button>
                :<button className="btnFor btn-agregar">ACTUALIZAR EVENTO</button>
                }
                
              </div>   
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
