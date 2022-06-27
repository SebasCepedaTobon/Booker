import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { AbrirContraseña } from '../../UI/AbrirModal/AbrirContraseña';


let docEstudiante
export const VentanaReserva2 = () => {

  const id_estudiante = localStorage.getItem('id_estudiante')
  //const name_estudiante = localStorage.getItem('name')
  

  //const [Estudiante, setEstudiante] = useState({}) 

  

  

  const url = "https://bookerbackapi.herokuapp.com/modulos/estudiantes/" + id_estudiante+ '/'
  const urlUsuario = "https://bookerbackapi.herokuapp.com/modulos/usuarios/";
  const [usuario, setUsuario] = useState()

  const PedirDatos = () =>{
    axios.get(url).then(response=>{
      docEstudiante = response.data.doc_estudiante.doc
      peticionUsuario(docEstudiante)
    }).catch(error=>{
      console.log(error.message);
    })
       

  }

  const peticionUsuario = (docEstudiante) => {

    axios
      .get(urlUsuario + docEstudiante + "/")
      .then((response) => {
        console.log(response.data);
        setUsuario(response.data)
      })
      .catch((error) => {
        console.log(error.message);
      });

  }


  
  useEffect(() => {
      PedirDatos() 
      //llenarInputs()

    }, [])


    const [state, setState] = useState({
      form: {
        "username": "",
        "password": "",
      },
      error: false,
      errorMsg: ""
    })

  
    const recharge = (e) => {
      e.preventDefault()
    }
  
  
    const change = async (e) => {
  
      await setState({
  
        form: {
  
          ...state.form,
          username: docEstudiante,
          [e.target.name]: e.target.value,
          

        }
      })

      console.log(state.form)
    }
  
    const btnIngresar = () => {
  
  
  
  
      let url = "https://bookerbackapi.herokuapp.com"
  
      axios.post(url, state.form)
  
        .then(res => {
          console.log(res)
  
  
          if (res.status === 200 || res.status === 201) {
            document.querySelector('.formulario-confirmar').classList.toggle('show')
            document.querySelector('.formulario-contraseña').classList.toggle('show')
            document.querySelector('.container-contraseña').classList.toggle('show')
           


  
  
          } else {
  
            setState({
              error: true,
              errorMsg: res.data.message,
  
  
            })
  
          }
  
        }).catch(error => {
          console.log(error)
          setState({
            error: true,
            errorMsg: "Contraseña incorrecta"
          })
        })
  
    }

    const handleSutmitUsuario = (e) => {
      e.preventDefault()
      const inputPassword1 = document.getElementById('inputPassword1')
      const inputPassword2 = document.getElementById('inputPassword2')
  

      if (inputPassword1.value === inputPassword2.value) {
        updateUsuario()
      }else(
        setState({
          error: true,
          errorMsg: "Las contraseñas no coinciden"
        })
      )
    }

    const handleChangeEstudiante = () => {
      const inputPassword2 = document.getElementById('inputPassword2')
      setUsuario({
        ...usuario,
        password : inputPassword2.value
      })
    }


    const updateUsuario = () => {

      let endpoint = urlUsuario + usuario.doc + '/'
      axios.put(endpoint, usuario)
        .then((res) => {
          setTimeout(() => {
            window.location.reload()
            
          }, 2000);
          setState({
            error: false,
            errorMsg: "Cambio de contraseña exitoso!!"
          })
          
          console.log(res);
        })
    }


  







const {ocultarContraseña} = AbrirContraseña()


  return (
    <div id='overlay3' className='overlay3'>
      <div className='container-contraseña' >
        <div className="from-Titulo">
          <div className="Desactivar-From">
            <i class="fa-solid fa-xmark" onClick={ocultarContraseña}></i>
          </div>
          <h1>EDITAR CONTRASEÑA</h1>
        </div>
        <form onSubmit={recharge} className="formulario-contraseña">
          <div className='boxs-inputs'>
            <div className="box-input">
                <input type="password" required onChange={change} name='password' />
                <span></span>
                <label>Contraseña Actual</label>
            </div>
          </div>
          <div className="pass">
                {state.error === true &&
                  <div className="alerta">
                    <p>{state.errorMsg}</p>
                  </div>
                }
          </div>
          <div className="btnsFormulario">
            <button className="btn-confirmar" onClick={btnIngresar}>Confirmar</button>
          </div>
        </form>
        <form onSubmit={handleSutmitUsuario} className="formulario-confirmar">
          <div className="box-input">
            <input type="password" id='inputPassword1' required />
            <span></span>
            <label>Nueva Contraseña</label>
          </div>
          <div className="box-input ">
            <input type="password" id='inputPassword2' onChange={handleChangeEstudiante} required />
            <span></span>
            <label>Confirmar Contraseña</label>
          </div>
          <div className="pass2">
                {state.error === true &&
                  <div className="alerta">
                    <p>{state.errorMsg}</p>
                  </div>
                }
          </div>
          <div className="pass3">
                {state.error === false &&
                  <div className="alerta">
                    <p>{state.errorMsg}</p>
                  </div>
                }
          </div>
          <div className="btnsFormulario">
            <button className="btn-confirmar">Confirmar</button>
          </div>
        </form>

      </div>


    </div>
  )
}