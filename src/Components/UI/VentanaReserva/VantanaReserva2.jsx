import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { AbrirModal } from '../AbrirModal/AbrilModal'



export const VentanaReserva2 = () => {

  const id_estudiante = localStorage.getItem('id_estudiante')
  //const name_estudiante = localStorage.getItem('name')
  

  const [Estudiante, setEstudiante] = useState({}) 
  const [grupo, setGrupo] = useState([])
  const [Documento, setDocumento] = useState({})
  

  

  const url = "https://bookerbackapi.herokuapp.com/modulos/estudiantes/" + id_estudiante+ '/'

  const PedirDatos = () =>{
    axios.get(url).then(response=>{
      setEstudiante(response.data);
      setGrupo(response.data.id_grupo)
      setDocumento(response.data.doc_estudiante)
    }).catch(error=>{
      console.log(error.message);
    })
       

  }


  
  useEffect(() => {
      PedirDatos() 
      //llenarInputs()

    }, [])


  

  const change = (e)=>{
    console.log(Documento.email);

    //const email = document.getElementById('email')
    //const name = document.getElementById('name')
   
    setEstudiante({
        ...Estudiante,
        [e.target.name]: e.target.value,
        id_grupo: grupo.id_grupo,
        id_grado: 2,
        
    })

    console.log(Estudiante);
  }

  const recharge = (e) =>{
    e.preventDefault()
  }




  const btnEditar = () =>{

    console.log(Estudiante)

    axios.put(url, Estudiante)

    reload()

  }

  const reload = () => {
    window.location.reload(true);
}




const {ocultarReserva} = AbrirModal()


  return (
    <div id='overlay' className='overlay2'>
      <div className='Estudiantes-from3' >
        <div className="from-Titulo">
          <div className="Desactivar-From">
            <i class="fa-solid fa-xmark" onClick={ocultarReserva}></i>
          </div>
          <h1>EDITAR PERFIL</h1>
        </div>
        <form onSubmit={recharge}>
          <div className='boxs-inputs'>
            <div className="box-input">
              <input type="text" name="nombres" required onChange={change} value={Estudiante.nombres} />
              <span></span>
              <label>Nombres</label>
            </div>

            <div className="box-input">
              <input type="text" name="apellidos" required onChange={change} value={Estudiante.apellidos} />
              <span></span>
              <label>Apellidos</label>
            </div>

          </div>

          <div className="boxs-inputs">
            <div className="box-input">
              <input type="text" name='telefono' onChange={change} value={Estudiante.telefono} required />
              <span></span>
              <label>Celular</label>
            </div>

            <div className="box-input">
              <input type="text" name='direccion' onChange={change} required value={Estudiante.direccion} />
              <span></span>
              <label>Dirección</label>
            </div>
          </div>


          <div className="boxs-inputs">
          </div>
          <br />
          <div className="btnsFormulario">
            <button className="btnFor btn-agregar" onClick={btnEditar}>Confirmar</button>
          </div>
        </form>
      </div>

    </div>
  )
}