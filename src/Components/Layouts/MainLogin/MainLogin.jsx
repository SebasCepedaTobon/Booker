import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import logo from '../../../assets/Imagenes/logos/BookerSinNombre.png'
import whatsapp from '../../../assets/Imagenes/iconos/phone.svg'
import email from '../../../assets/Imagenes/iconos/mail.svg'
import axios from 'axios';

export const MainLogin = () => {


  const [state, setState] = useState({
    form:{
      "doc":"",
      "password":"",
    },
    error:false,
    errorMsg:""
  })

  const recharge=(e)=>{
    e.preventDefault()
  }


  const change = async (e)=>{

    await setState({

      form:{
        
        ...state.form,

        [e.target.name]: e.target.value
      }
    })
  }

  const btnIngresar = () =>{

    


    let url="https://bookerbackapi.herokuapp.com"
   
    axios.post(url, state.form)

    .then(res => {
      console.log(res)  
    

      if( res.status === 200 || res.status === 201 ){

        let tipoU = res.data.user.doc_bibliotecario
        console.log(tipoU)

        if( tipoU === res.data.user.doc_estudiante){
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('id_estudiante', res.data.user.id_estudiante)
          localStorage.setItem('tipo_usuario', res.data.user.doc_estudiante.tipo_usuario)
        }else if(tipoU === res.data.user.doc_bibliotecario){
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('id_estudiante', res.data.user.id_bibliotecario)
          localStorage.setItem('tipo_usuario', res.data.user.doc_bibliotecario.tipo_usuario)
        }
          
       
          

        
        

        

       
        window.location.href = "/Home"
      


      

        console.log("logueado correctamente")
        
      
      }else{
  
        setState({
          error:true,
          errorMsg:res.data.message,
          

        })

      }
      
    }).catch(error =>{
      console.log(error)
      setState({
        error:true,
        errorMsg:"Credenciales Invalidas"
      })
    })

  }


  
  return (
    <div className="Main-Login-Gmail">
      <div className="box-Informacion">        
        <div className='box-info'>
          <div className="LG-Info">
            <div className='LG-info' >
              <div className='LG-logo'>
                <Imagenes url={logo} clase={'logo'} />  
              </div>
              <div className='LG-Textos'>
                <h1>¡LA RESERVA DE TUS LIBROS AL ALCANCE DE TUS MANOS!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores beatae necessitatibus, repellendus odio modi iusto, repellendus odio modi iusto.</p>
              </div>
            </div>
            <div className="LG-Contactos">
              <NavLink to='/Email'><Imagenes url={email} clase='Login-Email' /></NavLink>
              <a href="https://wa.me/+573002536217" target={'_blank'} ><Imagenes url={whatsapp} clase='whatsapp'/></a>
            </div>
          </div>
        </div>
      </div>

      <div className="LG-boxFrom">
        <div className="LG-box-From" >
          <div className='LG-contenedor-From' >
            <h1>¡INICIAR SESIÓN!</h1>
            <form  onSubmit={recharge}>
              <div className='box-input'>
                <input type="text" required onChange={change} name='username'/>
                <span></span>
                <label>N° Documento</label>
              </div>
              <div className="box-input">
                <input type="password" required onChange={change} name='password'/>
                <span></span>
                <label>Contraseña</label>
              </div>
              <div className="pass">
              {state.error === true &&
                <div className="alerta">
                  <p>{state.errorMsg}</p>
                </div>
              }
              </div>
              <input type="submit" value="Ingresar" onClick={btnIngresar}/>
            </form>
          </div>
        </div>        
      </div>
    </div>
  )
}
