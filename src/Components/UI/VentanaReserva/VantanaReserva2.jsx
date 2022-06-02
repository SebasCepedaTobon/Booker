import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { AbrirModal } from '../AbrirModal/AbrilModal'



export const VentanaReserva2 = () => {

  const id_estudiante = localStorage.getItem('id_estudiante')

  const [Estudiante, setEstudiante] = useState({})
  

  const url = "https://bookerbackapi.herokuapp.com/modulos/estudiantes/"

  const PedirDatos = () =>{
    axios.get(url + id_estudiante).then(response=>{
      setEstudiante(response.data);
    }).catch(error=>{
      console.log(error.message);
    })
       

  }


  
  useEffect(() => {
      PedirDatos() 
    }, [])

  

  const change = (e)=>{
  
    setEstudiante({
        ...Estudiante,
        [e.target.name]: e.target.value,
   
    })
  }




  const btnEditar = () =>{

    const url = "https://bookerbackapi.herokuapp.com/modulos/estudiantes/" 
     
    console.log(Estudiante)

    axios.put(url, Estudiante)
    .then(res => {
      console.log(res)  
    

      if( res.status === 200){

        console.log("Datos actualizados correctamente")
        
      
      }else{
  
        setEstudiante({
          error:true,
          errorMsg:res.data.message,
          

        })

      }
      
    }).catch(error =>{
      console.log(error)
      setEstudiante({
        error:true,
        errorMsg:"Error de actalizacion"
      })
    })

  }



  const {ocultarReserva} = AbrirModal()
 



  return (
    <div id='overlay' className='overlay2'>
      <div className="from-tablas2">
          <p>Holaa</p>
          <a className='btn-vermas2' onClick={ocultarReserva} >
            X
          </a>
          <div className="container-inputs">
            <input type="text" name="nombres" required onChange={change} value={Estudiante.nombres}/>
            <input type="text" name="apellidos" required onChange={change} value={Estudiante.apellidos}/>
            <input type="text" name="direccion" required onChange={change} value={Estudiante.direccion}/>
          </div>
          <div className="container-btn-editar">
            <button className='btn-confi' onClick={btnEditar}>confirmar</button>
          </div>
      </div>
    </div>
  )
}