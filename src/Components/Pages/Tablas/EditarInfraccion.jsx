import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import '../../../Static/borrador.css'
import '../../../Static/formAutoCate.css'
import '../../../Static/TEventos.css'

export const EditarInfraccion = ({id}) => {

    const url = "https://bookerbackapi.herokuapp.com/modulos/infracciones/"

    const [editarInfraciones, setEditarInfraciones] = useState({})
    const [estudiante, setEstudiante] = useState({})
    const [prestamo, setPrestamo] = useState({})

    const id_bibliotecario = localStorage.getItem('id_bibliotecario')

    const peticionInfra = () => {

        console.log(id)

        axios.get(url + id)
      .then(response => {
        console.log(response.data)
        setEditarInfraciones(response.data)
        setEstudiante(response.data.id_estudiante.id_estudiante)
        setPrestamo(response.data.id_prestamo.id_prestamo)
      }).catch(error => { 
        console.log(error.message);
      })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        updateInfraccion()
    }
    const updateInfraccion = () =>{

        let endpoint = url + editarInfraciones.id_infraccion + "/"
        axios.put(endpoint, editarInfraciones)
        .then((res) => {
            console.log(res)
            window.location.href = "/TablaInfraciones"
        }).catch(error => {
          console.log(error);
        })
                
    }
    const handleChange = (e) =>{

        const tex = document.getElementById('tex')

        console.log();

        setEditarInfraciones({
            ...editarInfraciones,
            id_estudiante : estudiante,
            id_bibliotecario : id_bibliotecario,
            id_prestamo : prestamo,
            id_tipo_infraccion : 1,
            descripcion: tex.value
        })

        console.log(editarInfraciones);
        
    }

    

    useEffect(() => {
      peticionInfra()
    }, []) 
    

  return (
    <div className='AutoresCategorias modalInfracion'>
        <div id='Auto2' className="Auto23 CateAutoModal">
          <div className='Estudiantes-from boxAuto AutoCateAgregar AutoresForm cambioPass2' >
            <div className="from-Titulo">
              <div className="Desactivar-From">
              </div>
              <h1>DESCRIPCIÓN DE LA INFRACCIÓN</h1>
            </div>
            <form onSubmit={handleSubmit} >
              <div className="boxs-inputs">
              <textarea id='tex' className='texareaEditarInfraccion' onChange={handleChange} required ></textarea>
              <label className='labelInfra' >Descripción</label>
              </div>
              <br />
              <div className="btnsFormulario">
                <button className="btnFor btn-agregar">ACTUALIZAR INFRACIÓN</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}
