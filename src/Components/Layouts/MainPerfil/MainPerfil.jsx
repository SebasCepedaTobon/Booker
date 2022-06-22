import React, { useEffect, useState } from 'react'
import { BotonesPerfil } from '../../UI/BotonesPerfil/BotonesPerfil'
import axios from 'axios';
import { VentanaReserva2 } from '../../UI/VentanaReserva/VantanaReserva2';
import { Navegacion3 } from '../../UI/Navegacion/Navegacion3';
import { Alerta } from '../../UI/Alerta/Alerta';




export const MainPerfil = () => {

    
  const id_estudiante = localStorage.getItem('id_estudiante')
  //const name_estudiante = localStorage.getItem('name')
  

  const [Estudiante, setEstudiante] = useState({}) 
  const [grupo, setGrupo] = useState([])
  const [grado, setGrado] = useState([])
  const [Documento, setDocumento] = useState({})
  const [alerta, setAlerta] = useState(false)
  

  

  const url = "https://bookerbackapi.herokuapp.com/modulos/estudiantes/" + id_estudiante+ '/'

  const PedirDatos = () =>{
    axios.get(url).then(response=>{
      setEstudiante(response.data);
      setGrupo(response.data.id_grupo)
      setGrado(response.data.id_grado)
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

    //const email = document.getElementById('email')
    //const name = document.getElementById('name')
   
    setEstudiante({
        ...Estudiante,
        [e.target.name]: e.target.value,
        id_grupo: grupo.id_grupo,
        id_grado: grado.id_grado,
    })



    console.log(Estudiante);
  }



  const recharge = (e) =>{
    e.preventDefault()
  }




  const btnEditar = () =>{

    console.log(Estudiante)

    axios.put(url, Estudiante)
    .then((res)=>{
      setAlerta(!alerta)
    })

  

  }





   

  return (
      <>
        <Alerta 
            estado={alerta} 
            cambiarEstado={setAlerta}>
            
            
            <p>¡Se han guardado los cambios!</p>

        </Alerta>
        <div className='contenedor-perfil'>
            <Navegacion3/>
            <BotonesPerfil/>
            <div className="datos-perfil">
                <h2 id='Tu-cuenta'>Tu cuenta</h2>
                <div className="p-hr">
                    <p>Información Personal</p>
                    <hr />
                </div>
                <div className="container-inputs">
                      <form onSubmit={recharge}>
                        <div className="container-inputs-input">
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
                              {/*<div className="box-input">
                                  <input type="text" name='name' onChange={change} required value={Documento.name} />
                                  <span></span>
                                  <label>Nombre de Usuario</label>
                              </div>
                              <div className="box-input">
                  
                                  <input type="text" name='email' onChange={change} required value={Documento.email} />
                                  <span></span>
                                  <label>Email</label>
                              </div>*/}
                              <div className="btnsFormulario">
                              <button className="btnFor2 btn-agregar" onClick={btnEditar}>Confirmar</button>
                          </div>

                        </div>
                         
                      </form>
                </div>
                    
            </div>
        </div>
        <VentanaReserva2/>
        

      </>
    
  )
}
