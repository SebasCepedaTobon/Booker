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
    "doc_bibliotecario": {
        "doc": "",
        "name": "",
        "email": "",
        "password": "",
        "imagen": null,
        "usuario_activo": true
    }
  }


export const NuevoBibliotecario = () => {


  const url = "https://bookerbackapi.herokuapp.com/modulos/bibliotecarios/"
  const [formEstudiantes, setEstudiantes] = useState(initialForm)


  const handleChange = (e) =>{

    const doc = document.getElementById('doc')
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const tipoDoc = document.getElementById('tipoDoc')

    setEstudiantes({
      ...formEstudiantes,
      [e.target.name]: e.target.value,
      tipodoc: tipoDoc.value,
      doc_bibliotecario:{
        doc : doc.value,
        name: name.value,
        imagen: null,
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
      window.location.href="/TBibliotecarios"
        console.log(res)
    })
    console.log(formEstudiantes);
}
 

  return (
      <div id='AgregarLibros' className='AgregarLibros'>          
          <div className="from-tablas">  
            <div className='Estudiantes-from NBibliotecario '  >
              <div className="from-Titulo">
                <div className="Desactivar-From">
                  <NavLink to='/TBibliotecarios' >
                    <i class="fa-solid fa-xmark"></i>
                  </NavLink>
                </div>
                <h1>NUEVO BIBLIOTECARIO</h1>                
              </div>              
              <form onSubmit={handleSubmit}>
                <div className='boxs-inputs'>          
                  <div className="box-select">
                    <select id='tipoDoc' className='tipoDocBibliotecario' onChange={handleChange}>
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
                </div>
                <div className="boxs-inputs">
                    <div className="box-input">
                    <input type="text" name='direccion' onChange={handleChange} value={formEstudiantes.direccion} required/>
                    <span></span>
                    <label>Dirección</label>
                  </div>
                  <div className="box-input">
                    <input type="text" name='telefono' onChange={handleChange} value={formEstudiantes.telefono} required/>
                    <span></span>
                    <label>N° Celular</label>
                  </div>
                </div>
                <div className="boxs-inputs">
                  <div className="box-input">
                    <input type="text" onChange={handleChange} id='name' required/>
                    <span></span>
                    <label>Nombre de Usuario</label>
                  </div>
                  <div className="box-input">
                    <input type="text" onChange={handleChange} id='email' required/>
                    <span></span>
                    <label>Gmail</label>
                  </div>
                </div>
                <br />
                <div className="btnsFormulario">
                    <button className="btnFor btn-agregar">NUEVO BIBLIOTECARIO</button>
                </div>   
            </form>
          </div>
        </div>
      </div>
  )
}
