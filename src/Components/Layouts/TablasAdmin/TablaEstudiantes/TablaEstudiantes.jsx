import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import { Imagenes } from '../../../UI/Imagenes/Imagenes';
import usuario from '../../../../assets/Imagenes/Admin/usuario.png'
import { AdminHeader } from '../../../UI/NavegadorAdmin/AdminHeader';
import { AdminNavegador } from '../../../UI/NavegadorAdmin/AdminNavegador';
import { NavLink } from 'react-router-dom';


export const TablaEstudiantes = () => {

  const url = "https://bookerbackapi.herokuapp.com/modulos/estudiantes/"

  const eliminacion = () => {
    Swal.fire({
      title: '¿Esta seguro de eliminar a el estudiante?',
      icon: 'warning',
      confirmButtonText: 'Si, Eliminar',
      showCancelButton: true,
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        Swal.fire(
          'Eliminado',
          'Estudiante eliminado correctamente',
          'success'
        )
      }
    })
  }


  const [cerrar, setCounter] = useState(true)
  const [estudiantes, setEstudiantes] = useState([])

  const [grupo, setGrupo] = useState()
  const [grado, setGrado] = useState()
  const [form2, setForm2] = useState({})

  const peticionGet = () => {
    axios.get(url).then(response => {
      setEstudiantes(response.data);
    }).catch(error => {
      console.log(error.message);
    })
  }
  const peticionGetInactivo = () => {
    axios.get("https://bookerbackapi.herokuapp.com/modulos/estudiantes/?doc_estudiante__usuario_activo=false").then(response => {
      setEstudiantes(response.data);
    }).catch(error => {
      console.log(error.message);
    })
  }

  const fetchGrupo = async () => {
    const response = await fetch("https://bookerbackapi.herokuapp.com/modulos/grupos/")
    const responseJSON = await response.json()
    setGrupo(responseJSON)
  }

  const fetchGrado = async () => {
    const response = await fetch("https://bookerbackapi.herokuapp.com/modulos/grados/")
    const responseJSON = await response.json()
    setGrado(responseJSON)
  }

  const updateData2 = async () => {
    let endpoint = url + form2.id_estudiante + '/'
    await axios.put(endpoint, form2)
      .then((res) => {
        window.location.href = "/TEstudiantes"
        console.log(res);
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateData2()
  }

  const handleChange = (e) => {
    const doc = document.getElementById('doc')
    const email = document.getElementById('email')
    const tipoDoc = document.getElementById('tipoDoc')
    const grupo = document.getElementById('grupo')
    const grado = document.getElementById('grado')

    /* console.log(grupo.value);
    let grupoFin        
    if(grupo.value === null){
      grupoFin = "null"
    }else{
      grupoFin = Number(grupo.value)
    } */

    setForm2({
      ...form2,
      [e.target.name]: e.target.value,
      tipodoc: tipoDoc.value,
      id_grupo: Number(grupo.value),
      id_grado: Number(grado.value),
      doc_estudiante: {
        doc: doc.value,
        email: email.value,
        usuario_activo: true
      }
    })
    console.log(form2);
  }

  const updateData = (data) => {

    console.log(data.doc_estudiante.usuario_activo);

    console.log(data.doc_estudiante.password);

    let numDocumento = data.doc_estudiante.doc
    let gmail = data.doc_estudiante.email
    let tipoDoc1 = data.tipodoc
    let grupo1 = data.id_grupo.id_grupo
    let grado1 = data.id_grado.id_grado
    console.log(tipoDoc1);
    setForm2(data)
    llenarSelect(numDocumento, gmail, tipoDoc1, grupo1, grado1)
    ventanaFlotante()
  }

  const llenarSelect = (numDocumento, gmail, tipoDoc1, grupo1, grado1) => {

    const doc = document.getElementById('doc')
    doc.value = numDocumento


    const email = document.getElementById('email')
    email.value = gmail

    const tipoDoc = document.getElementById('tipoDoc')
    tipoDoc.value = tipoDoc1

    const grupo = document.getElementById('grupo')
    grupo.value = grupo1

    const grado = document.getElementById('grado')
    grado.value = grado1
  }

  const ventanaFlotante = () => {
    setCounter(!cerrar)
  }

  useEffect(() => {
    peticionGet()
    fetchGrupo()
    fetchGrado()


    const overlay = document.getElementById('overlay')
    const from_tablas = document.querySelector('.from-tablas')

    if (cerrar === true) {
      overlay.style.visibility = "hidden"
      from_tablas.style.transform = "scale(0.6)"
      from_tablas.style.opacity = "0"
    } else {
      overlay.style.visibility = "visible"
      from_tablas.style.transform = "scale(1)"
      from_tablas.style.opacity = "2"
    }

  }, [cerrar]);


  const peticionGetBusqueda = () => {
    const inputBuscar = document.getElementById('elInput')

    axios.get("https://bookerbackapi.herokuapp.com/modulos/estudiantes/?search=" + inputBuscar.value).then(response => {
      setEstudiantes(response.data);
    }).catch(error => {
      console.log(error.message);
    })
  }

  const handleSubmitEstado = (estudiantes) => {
    estudiantes.id_grupo = estudiantes.id_grupo.id_grupo
    estudiantes.id_grado = estudiantes.id_grado.id_grado

    if (estudiantes.doc_estudiante.usuario_activo === true) {
      estudiantes.doc_estudiante.usuario_activo = false
    } else {
      estudiantes.doc_estudiante.usuario_activo = true
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
        updateEstadoData(estudiantes)
      }
    })

  }
  const updateEstadoData = (estudiantes) => {
    console.log(estudiantes);
    let endpoint = url + estudiantes.id_estudiante + '/'
    axios.put(endpoint, estudiantes)
      .then((res) => {
        //window.location.href="/TEstudiantes"
        console.log(res);
      })
    peticionGet()
  }

  const updateEstado = (estudiantes) => {
    handleSubmitEstado(estudiantes)
  }





  return (
    <div className='MainAdministrativo'>
      <div className="box-AdminNavegador">
        <AdminNavegador />
      </div>
      <div className="box-Header-Admin">
        <AdminHeader />
        <div className='box-Tabla' >
          <div className='Tabla'>
            <div className='categoriasMN'  >
              <div className='btnMulta' onClick={peticionGet}  >
                <div className='contenidoMultas'  >
                  <p>Estudiantes</p>
                </div>
              </div>
              <div className='btnMulta' onClick={peticionGetInactivo} >
                <div className='contenidoMultas' >
                  <p>Estudiantes Inactivos</p>
                </div>
              </div>
            </div>
            <div className="TituloLibro">
              <p>Estudiantes</p>
              <div id='buscador' className="buscador">
                <input onChange={peticionGetBusqueda} id='elInput' className='elInput' type="text" autoFocus placeholder='Buscar...' />
                <i onClick={peticionGetBusqueda} class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div className='tr'>
              <div className='td-0'><p>Imagen</p></div>
              <div className='td-1' ><p>Documento</p></div>
              <div className='td-2' ><p>Nombre Completo</p></div>
              <div className='td-6'><p>Grado</p></div>
              <div className='td-6'><p>Grupo</p></div>
              <div className='td-6'><p>Estado</p></div>
              <div className='td-5'><p>Opciones</p></div>
            </div>
            <div className='Tabla-Info' >
              {
                estudiantes.map((estudiantes, _) => {
                  return (
                    <div className='tr-1'>
                      <div className='td-0'>
                        <div className='perfil' >
                          {estudiantes.doc_estudiante.imagen === null
                            ? <Imagenes url={usuario} />
                            : <Imagenes clase='icono' url={estudiantes.doc_estudiante.imagen} />
                          }

                        </div>
                        {estudiantes.doc_estudiante.usuario_activo === true
                          ? <div className='UsuarioActivo'></div>
                          : <div className='UsuarioInactivo'></div>
                        }
                      </div>
                      <div className='td-1'>
                        <p className='L1P'>{estudiantes.doc_estudiante.doc}</p>
                      </div>
                      <div className='td-2'>{estudiantes.nombres} {estudiantes.apellidos}</div>
                      <div className='td-6'>{estudiantes.id_grado.nombre}</div>
                      <div className='td-6'>{estudiantes.id_grupo.letra_grupo}</div>
                      <div className='td-6'>
                        {estudiantes.doc_estudiante.usuario_activo === true
                          ? <p className='activoEstudiantes' >Activo</p>
                          : <p className='inactivoEstudiantes'>Inactivo</p>
                        }
                      </div>
                      <div className='td-5'>
                        {estudiantes.doc_estudiante.usuario_activo === true
                          ? <i className="fa-solid fa-user" data-title='Inactivar Estudiante' onClick={() => updateEstado(estudiantes)}></i>
                          : <i onClick={() => updateEstado(estudiantes)} class="fa-solid fa-user-large-slash"></i>
                        }
                        <i onClick={() => updateData(estudiantes)} class="fa-solid fa-pen-to-square"></i>

                      </div>
                    </div>
                  )
                }

                )
              }

            </div>
          </div>
          <NavLink to='/NuevoEstudiante'  >
            <div id='Activar-From' className='Activar-From'>
              <i class="fa-solid fa-folder-plus"></i>
            </div>
          </NavLink>
        </div>
      </div>

      <div id='overlay' className='overlay'>
        <div className="from-tablas">
          <div className='Estudiantes-from' >
            <div className="from-Titulo">
              <div className="Desactivar-From">
                <i onClick={ventanaFlotante} class="fa-solid fa-xmark"></i>
              </div>
              <h1>ACTUALIZAR ESTUDIANTE</h1>
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
                  <input type="text" onChange={handleChange} id='doc' required />
                  <span></span>
                  <label>N° Documento</label>
                </div>
                <div className="box-input">
                  <input type="text" name='telefono' onChange={handleChange} value={form2.telefono} required />
                  <span></span>
                  <label>N° Celular</label>
                </div>
              </div>

              <div className="boxs-inputs">
                <div className="box-input">
                  <input type="text" name='nombres' onChange={handleChange} value={form2.nombres} required />
                  <span></span>
                  <label>Nombres</label>
                </div>
                <div className="box-input">
                  <input type="text" name='apellidos' onChange={handleChange} value={form2.apellidos} required />
                  <span></span>
                  <label>Apellidos</label>
                </div>
                <div className="box-input">
                  <input type="text" name='direccion' onChange={handleChange} value={form2.direccion} required />
                  <span></span>
                  <label>Dirección</label>
                </div>
              </div>

              <div className="boxs-inputs">
                <div className="box-input">
                  <input type="text" onChange={handleChange} id='email' required />
                  <span></span>
                  <label>Gmail</label>
                </div>
                <div className="box-select">
                  <select onChange={handleChange} id='grupo'>
                    <option value="" selected>Grupo</option>
                    {!grupo ? "" :
                      grupo.map((element, _) =>
                        <option className='opciones' value={element.id_grupo}>{element.letra_grupo}</option>
                      )
                    }
                  </select>
                </div>
                <div className="box-select">
                  <select onChange={handleChange} id='grado'>
                    <option value="" selected>Grado</option>
                    {!grado ? "" :
                      grado.map((element, _) =>
                        <option className='opciones' value={element.id_grado}>{element.nombre}</option>
                      )
                    }
                  </select>
                </div>
              </div>
              <br />
              <div className="btnsFormulario">
                <button className="btnFor btn-agregar">ACTUALIZAR ESTUDIANTE</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
