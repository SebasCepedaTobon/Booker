import React, {useState, useEffect} from 'react';
import '../../../../Static/Admin.css'
import '../../../../Static/MediaQueriesAdmin.css'
import { NavLink } from 'react-router-dom';
import axios from 'axios';


export const initialForm = {
    "tipodoc": "",
    "nombres": "",
    "apellidos": "",
    "telefono": "",
    "direccion": "",
    "doc_estudiante": {
        "doc": "",
        "name": "",
        "email": "",
        "password": "",
        "imagen": null,
        "usuario_activo": true
    },
    "id_grado": null,
    "id_grupo": null
  }

  let urlImagen

export const NuevoEstudiante = () => {

  const url = "https://bookerbackapi.herokuapp.com/modulos/estudiantes/"
  const [formEstudiantes, setEstudiantes] = useState(initialForm)

  const [grado, setGrado] = useState()
  const [grupo, setGrupo] = useState()




  const fetchGrado=async()=>{
      const response = await fetch("https://bookerbackapi.herokuapp.com/modulos/grados/")
      const responseJSON = await response.json()
      setGrado(responseJSON)
    }

  const fetchGrupo=async()=>{
    const response = await fetch("https://bookerbackapi.herokuapp.com/modulos/grupos/")
    const responseJSON = await response.json()
    setGrupo(responseJSON)
  }

  const handleChange = (e) =>{

    const doc = document.getElementById('doc')
    const email = document.getElementById('email')
    const tipoDoc = document.getElementById('tipoDoc')
    const grupo = document.getElementById('grupo')
    const grado = document.getElementById('grado')

    console.log(grupo.value);

    let grupoFin
        
    if(grupo.value === null){
      grupoFin = null
    }else{
      grupoFin = Number(grupo.value)
    }
    setEstudiantes({
      ...formEstudiantes,
      [e.target.name]: e.target.value,
      
      tipodoc: tipoDoc.value,
      id_grupo: grupoFin,
      id_grado: Number(grado.value),
      doc_estudiante:{
        doc : doc.value,
        imagen: urlImagen,
        email: email.value,
        password: doc.value,
        usuario_activo: true
      }
    })
    console.log(formEstudiantes);
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    peticionPost()
  }

  const peticionPost = async () =>{
    console.log(formEstudiantes);
    await axios.post(url, formEstudiantes)
    .then(res=>{

      window.location.href="/TEstudiantes"
        console.log(res)
    })
    console.log(formEstudiantes);
}

  useEffect(() => {
    fetchGrado()
    fetchGrupo()
  }, [])
      

  return (
      <div id='AgregarLibros' className='AgregarLibros'>          
          <div className="from-tablas">  
            <div className='Estudiantes-from' >
              <div className="from-Titulo">
                <div className="Desactivar-From">
                  <NavLink to='/TEstudiantes' >
                    <i class="fa-solid fa-xmark"></i>
                  </NavLink>
                </div>
                <h1>NUEVO ESTUDIANTE</h1>                
              </div>              
              <form onSubmit={handleSubmit}>
                <div className='boxs-inputs'>          
                  <div className="box-select">
                    <select id='tipoDoc' onChange={handleChange}>
                        <option value="" >Tipo Documento...</option>
                        <option className='opciones' value="CC">Cédula de Ciudadanía</option>
                        <option className='opciones' value="TI">Tarjeta de Identidad</option>
                    </select>
                  </div>          
                  <div className="box-input">
                    <input type="text" onChange={handleChange} id='doc' required/>
                    <span></span>
                    <label>N° Documento</label>
                  </div>

                  <div className="box-input">
                    <input type="text" name='telefono' onChange={handleChange} value={formEstudiantes.telefono} required/>
                    <span></span>
                    <label>N° Celular</label>
                  </div>

                </div>
                
                <div className="boxs-inputs">
                  <div className="box-input">
                    <input type="text" name='nombres' onChange={handleChange} value={formEstudiantes.nombres} required/>
                    <span></span>
                    <label>Nombres</label>
                  </div> 
                  <div className="box-input">
                    <input type="text" name='apellidos' onChange={handleChange} value={formEstudiantes.apellidos} required/>
                    <span></span>
                    <label>Apellidos</label>
                  </div>

                  <div className="box-input">
                    <input type="text" name='direccion' onChange={handleChange} value={formEstudiantes.direccion} required/>
                    <span></span>
                    <label>Dirección</label>
                  </div>
                </div>
                <div className="boxs-inputs">
                  <div className="box-input">
                    <input type="text" onChange={handleChange} id='email' required/>
                    <span></span>
                    <label>Gmail</label>
                  </div>
                  <div className="box-select">
                  <select onChange={handleChange} id='grado' >
                      <option className='opciones' value="" selected>Grado...</option>
                      {!grado? "" :
                      grado.map((element, key)=>{
                          return(
                              <option key={key} value={element.id_grado}>{element.nombre}</option>
                          )
                      })}
                    </select>
                  </div>
                  <div className="box-select">
                    <select id='grupo' onChange={handleChange} >
                      <option className='opciones' value='null' selected>Grupo...</option>
                      {!grupo? "" :
                      grupo.map((element, key)=>{
                          return(
                              <option key={key} value={element.id_grupo}>{element.letra_grupo}</option>
                          )
                      })}
                    </select>
                  </div>
                </div>
                <br />
                <div className="btnsFormulario">
                    <button className="btnFor btn-agregar">NUEVO ESTUDIANTE</button>
                </div>   
            </form>
          </div>
        </div>
      </div>
  )
}
