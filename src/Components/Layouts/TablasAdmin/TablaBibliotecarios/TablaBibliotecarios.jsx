import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import { Imagenes } from '../../../UI/Imagenes/Imagenes';
import usuario from '../../../../assets/Imagenes/Admin/usuario.png'
import { AdminHeader } from '../../../UI/NavegadorAdmin/AdminHeader';
import { AdminNavegador } from '../../../UI/NavegadorAdmin/AdminNavegador';
import { NavLink } from 'react-router-dom';


export const TablaBibliotecarios = () => {

  const url = "https://bookerbackapi.herokuapp.com/modulos/bibliotecarios/"



  const [cerrar, setCounter] = useState(true)
  const [bibliotecarios, setBibliotecario] = useState([])

  const [form2, setForm2] = useState({})

  const peticionGet=()=>{
    axios.get(url).then(response=>{
        setBibliotecario(response.data);      
    }).catch(error=>{
      console.log(error.message);
    })    
  }
  const peticionGetInactivo=()=>{
    axios.get("https://bookerbackapi.herokuapp.com/modulos/bibliotecarios/?doc_bibliotecario__usuario_activo=false").then(response=>{
        setBibliotecario(response.data);      
    }).catch(error=>{
      console.log(error.message);
    })    
  }
  const peticionGetActivos=()=>{
    axios.get("https://bookerbackapi.herokuapp.com/modulos/bibliotecarios/?doc_bibliotecario__usuario_activo=true").then(response=>{
        setBibliotecario(response.data);      
    }).catch(error=>{
      console.log(error.message);
    })    
  }



const updateData2 = async () =>{

  let endpoint = url+form2.id_bibliotecario+'/'
  await axios.put(endpoint, form2)
  .then((res) => {
      peticionGet()
      ventanaFlotante()
      console.log(res);
  })
}

  const handleSubmit = (e) =>{
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

  const handleChange = (e) =>{
    const doc = document.getElementById('doc')
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const tipoDoc = document.getElementById('tipoDoc')
        
    setForm2({
    ...form2,
    [e.target.name]: e.target.value,
    tipodoc: tipoDoc.value,

    doc_estudiante:{
      doc : doc.value,
      name: name.value,
      email: email.value,
      usuario_activo: true
    }
    })
    console.log(form2);
}

  const updateData = (data) =>{

    console.log(data.doc_bibliotecario.usuario_activo);

    console.log(data.doc_bibliotecario.password);

    let numDocumento = data.doc_bibliotecario.doc
    let name = data.doc_bibliotecario.name
    let gmail = data.doc_bibliotecario.email
    let tipoDoc1 = data.tipodoc
    console.log(tipoDoc1);
    setForm2(data)
    llenarSelect(numDocumento, name, gmail,  tipoDoc1)
    ventanaFlotante()
}

const llenarSelect = (numDocumento, name, gmail,  tipoDoc1) =>{

  const doc = document.getElementById('doc')
  doc.value = numDocumento

  const name1 = document.getElementById('name')
  name1.value = name

  const email = document.getElementById('email')
  email.value = gmail

  const tipoDoc = document.getElementById('tipoDoc')
  tipoDoc.value = tipoDoc1

}

  const ventanaFlotante  = () => {
    setCounter(!cerrar)
  }

  useEffect(() => {
    peticionGet()
    const overlay = document.getElementById('overlay')
    const from_tablas = document.querySelector('.from-tablas')

    if(cerrar === true){
      overlay.style.visibility = "hidden"
      from_tablas.style.transform="scale(0.6)"
      from_tablas.style.opacity="0"
    }else{
      overlay.style.visibility = "visible"
      from_tablas.style.transform="scale(1)"
      from_tablas.style.opacity="2"
    }

  },[cerrar]);


  const peticionGetBusqueda=()=>{
    const inputBuscar = document.getElementById('elInput')

    axios.get("https://bookerbackapi.herokuapp.com/modulos/bibliotecarios/?search=" + inputBuscar.value).then(response=>{
        setBibliotecario(response.data);      
    }).catch(error=>{
      console.log(error.message);
    })    
  }

  const handleSubmitEstado = (bibliotecarios)=>{
    
    if(bibliotecarios.doc_bibliotecario.usuario_activo === true){
        bibliotecarios.doc_bibliotecario.usuario_activo = false
    }else{
        bibliotecarios.doc_bibliotecario.usuario_activo = true
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
        updateEstadoData(bibliotecarios)
      }
    })
    
  }
  const updateEstadoData = (bibliotecarios) =>{
    console.log(bibliotecarios);
    let endpoint = url+bibliotecarios.id_bibliotecario+'/'
    axios.put(endpoint, bibliotecarios)
    .then((res) => {
      console.log(res);
      peticionGet()    
  })
  }

  const updateEstado = (bibliotecarios)=>{
    handleSubmitEstado(bibliotecarios)
  }



 

  return (
    <div className='MainAdministrativo'>
      <div className="box-AdminNavegador">
        <AdminNavegador/>
      </div>
      <div className="box-Header-Admin">
        <AdminHeader/>  
        <div className='box-Tabla' >
          <div className='Tabla'>
          <div className='categoriasMN'  >
          <div className='btnMulta' onClick={peticionGet}  >
            <div className='contenidoMultas'  >
              <p>Bibliotecarios</p>
            </div>
          </div>
          <div className='btnMulta' onClick={peticionGetActivos}  >
            <div className='contenidoMultas'  >
              <p>Bibliotecarios Activos</p>
            </div>
          </div>
          <div className='btnMulta' onClick={peticionGetInactivo} >
            <div className='contenidoMultas' >
              <p>Bibliotecarios Inactivos</p>
            </div>
          </div>
        </div>
            <div className="TituloLibro">
              <p>Bibliotecarios</p>
              <div id='buscador' className="buscador">
                  <input onChange={peticionGetBusqueda} id='elInput' className='elInput' type="text" autoFocus placeholder='Buscar...'/>
                  <i onClick={peticionGetBusqueda} class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div className='tr'>
              <div className='td-0'><p>Imagen</p></div>
              <div className='td-1' ><p>Documento</p></div>
              <div className='td-2' ><p>Nombre Completo</p></div>
              <div className='td-6'><p>Celular</p></div>        
              <div className='td-6'><p>Estado</p></div>
              <div className='td-5'><p>Opciones</p></div>
            </div>
            <div className='Tabla-Info' >
              {
                bibliotecarios.map((bibliotecario,_) => {
                  return(
                    <div className='tr-1'>
                  <div className='td-0'>
                    <div className='perfil' >
                     {bibliotecario.doc_bibliotecario.imagen === null
                      ?<Imagenes url={usuario} />
                      :<Imagenes clase='icono' url={bibliotecario.doc_bibliotecario.imagen}/>
                      }
                         
                    </div>
                    {bibliotecario.doc_bibliotecario.usuario_activo === true
                      ?<div className='UsuarioActivo'></div>
                      :<div className='UsuarioInactivo'></div>
                      }
                  </div>
                  <div className='td-1'>
                    <p className='L1P'>{bibliotecario.doc_bibliotecario.doc}</p>
                  </div>
                  <div className='td-2'>{bibliotecario.nombres} {bibliotecario.apellidos}</div>
                  <div className='td-6'>{bibliotecario.telefono}</div>
                  <div className='td-6'>
                  {bibliotecario.doc_bibliotecario.usuario_activo===true
                  ?<p className='activoEstudiantes' >Activo</p>
                  :<p className='inactivoEstudiantes'>Inactivo</p>                  
                  }
                  </div>
                  <div className='td-5'>
                    {bibliotecario.doc_bibliotecario.usuario_activo === true
                    ?<i data-title='Inactivar Bibliotecario' class="fa-solid fa-user-graduate" onClick={()=>updateEstado(bibliotecario)} ></i>
                    :<div className='activoStuden' onClick={()=>updateEstado(bibliotecario)} ></div>
                    }
                    <i onClick={()=>updateData(bibliotecario)} class="fa-solid fa-pen-to-square"></i>
                    
                  </div>
                </div>
                  )
                }
                
                ) 
              }

            </div>            
          </div>
          <NavLink to='/NBibliotecarios'  >
          <div id='Activar-From' className='Activar-From'>
              <i class="fa-solid fa-folder-plus"></i>
          </div> 
          </NavLink>
        </div>
      </div>

        <div id='overlay' className='overlay'>          
          <div className="from-tablas">  
            <div className='Estudiantes-from NBibliotecario'  >
              <div className="from-Titulo">
                <div className="Desactivar-From">
                  <i onClick={ventanaFlotante} class="fa-solid fa-xmark"></i>
                </div>
                <h1>ACTUALIZAR BIBLIOTECARIO</h1>                
              </div>              
              <form onSubmit={handleSubmit}>
                <div className='boxs-inputs'>          
                  <div className="box-select">
                    <select id='tipoDoc' onChange={handleChange}>
                        <option value="" selected>Tipo Documento...</option>
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
                    <input type="text" name='nombres' onChange={handleChange} value={form2.nombres} required/>
                    <span></span>
                    <label>Nombres</label>
                  </div> 
                  <div className="box-input">
                    <input type="text" name='apellidos' onChange={handleChange} value={form2.apellidos} required/>
                    <span></span>
                    <label>Apellidos</label>
                  </div>
                </div>
                <div className="boxs-inputs">
                  <div className="box-input">
                    <input type="text" name='direccion' onChange={handleChange} value={form2.direccion} required/>
                    <span></span>
                    <label>Dirección</label>
                  </div>

                  <div className="box-input">
                    <input type="text" name='telefono' onChange={handleChange} value={form2.telefono} required/>
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
                    <button className="btnFor btn-agregar">ACTUALIZAR BIBLIOTECARIO</button>
                </div>   
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
