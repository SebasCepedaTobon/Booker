import React, { useEffect, useState } from 'react'
import { BotonesPerfil } from '../../UI/BotonesPerfil/BotonesPerfil'
import axios from 'axios';
import { VentanaReserva2 } from '../../UI/VentanaReserva/VantanaReserva2';
import { Navegacion3 } from '../../UI/Navegacion/Navegacion3';
import { Alerta } from '../../UI/Alerta/Alerta';
import { AbrirContraseña } from '../../UI/AbrirModal/AbrirContraseña';





export const MainPerfil = () => {

    
  const id_estudiante = localStorage.getItem('id_estudiante')

  const [estudiante, setEstudiante] = useState({});
  const [form2, setForm2] = useState({}); 
  const [grupo, setGrupo] = useState([])
  const [grado, setGrado] = useState([])
  const [alerta, setAlerta] = useState(false)
  const {VentanaContraseña} = AbrirContraseña()
  

  

  const url = "https://bookerbackapi.herokuapp.com/modulos/estudiantes/";

  const PedirDatos = async () =>{
    await axios
    .get(url + id_estudiante + "/")
    .then(response=>{
      setForm2(response.data);
      setGrupo(response.data.id_grupo)
      setGrado(response.data.id_grado)
      setEstudiante(response.data.doc_estudiante);
    }).catch(error=>{
      console.log(error.message);
    })

    
       

  }


  
  useEffect(() => {
      PedirDatos() 
    


    }, [])


    const ventanaFlotante = () => {
  
      const name1 = document.getElementById("name");
      name1.value = estudiante.name;
  
      const email = document.getElementById("email");
      email.value = estudiante.email;
    };


  

  const change = (e)=>{

    const name = document.getElementById("name");
    const email = document.getElementById("email");
   
    setForm2({
        ...form2,
        [e.target.name]: e.target.value,
        /*doc_estudiante:{
          name: name.value,
          email: email.value,
        },*/
        id_grupo: grupo.id_grupo,
        id_grado: grado.id_grado,
    })



 
  }



  const recharge = (e) =>{
    e.preventDefault()
  }




  const btnEditar = () =>{

    let endpoint = url + form2.id_estudiante + "/";

    axios.put(endpoint, form2)
    .then((res)=>{
      setAlerta(!alerta)
      setTimeout(() => {
        window.location.reload();
        
      }, [3000]);
      

    })

  

  }


  









   

  return (
      <>
        <VentanaReserva2/>
        <Alerta 
            estado={alerta} 
            cambiarEstado={setAlerta}>
            
            
            <p>¡Se han guardado los cambios!</p>

        </Alerta>
        <div className='contenedor-perfil'>
            <Navegacion3/>
            <BotonesPerfil/>
            <div className="datos-perfil2">
                <h2 id='Tu-cuenta'>Tu cuenta</h2>
                <div className="p-hr">
                    <p>Información Personal</p>
                    <hr />
                </div>
                {/*<button onClick={ventanaFlotante}>editar</button>*/}
                <div className="container-inputs">
                      <form onSubmit={recharge}>
                        <div className="container-inputs-input">
                        <div className="box-input">
                                  <input 
                                  type="text" 
                                  name="nombres" 
                                  required 
                                  onChange={change} 
                                  value={form2.nombres} />
                                  <span></span>
                                  <label>Nombres</label>
                              </div>

                              <div className="box-input">
                                  <input type="text" name="apellidos" required onChange={change} value={form2.apellidos} />
                                  <span></span>
                                  <label>Apellidos</label>
                              </div>

                        

                        
                              <div className="box-input">
                                  <input type="text" name='telefono' onChange={change} value={form2.telefono} required />
                                  <span></span>
                                  <label>Celular</label>
                              </div>

                              <div className="box-input">
                                  <input type="text" name='direccion' onChange={change} required value={form2.direccion} />
                                  <span></span>
                                  <label>Dirección</label>
                              </div>
                              <p  onClick={VentanaContraseña} className="btn-contraseña">cambiar contraseña</p>
                              
                              {/*<div className="box-input">
                                  <input 
                                  type="text" 
                                  name='name' 
                                  id="name"
                                  onChange={change} 
                                  required 
                                  />
                                  <span></span>
                                  <label>Nombre de Usuario</label>
                              </div>
                              <div className="box-input">
                  
                                  <input 
                                  type="text" 
                                  id="email"
                                  onChange={change} 
                                  required 
                                  />
                                  <span></span>
                                  <label>Email</label>
                              </div>*/}

                          
                              <div className="btnsFormulario">
                              <button className="btnFor2 btn-agregar" onClick={btnEditar}>Actualizar Perfil</button>
                          </div>
                        

                        </div>
                      
                         
                      </form>
                      
                </div>
                    
            </div>
        </div>
        

      </>
    
  )
}
