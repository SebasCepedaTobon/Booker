import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2';

let docBibliotecario

export const CambiarContrasena = () => {
  let id_bibliotecario
  id_bibliotecario = localStorage.getItem("id_bibliotecario");
  const url = "https://bookerbackapi.herokuapp.com/modulos/bibliotecarios/";
  const urlUsuario = "https://bookerbackapi.herokuapp.com/modulos/usuarios/";

  const [usuario, setUsuario] = useState()

  const [state, setState] = useState({
    form: {
      "username": "",
      "password": "",
    },
    error: false,
    errorMsg: ""
  })

  const peticionGetBibliotecario = async () => {
    await axios
      .get(url + id_bibliotecario + "/")
      .then((response) => {
        console.log(response.data);
        docBibliotecario = response.data.doc_bibliotecario.doc

        peticionUsuario(docBibliotecario)

        /* setImagen(response.data.doc_bibliotecario.imagen); */
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const peticionUsuario = (docBibliotecario) => {

    axios
      .get(urlUsuario + docBibliotecario + "/")
      .then((response) => {
        console.log(response.data);
        setUsuario(response.data)
      })
      .catch((error) => {
        console.log(error.message);
      });

  }


  const handleSutmit = (e) =>{
    e.preventDefault()
    peticionPost() 
  }

  const handleChange = async (e) => {

    console.log(e);

    console.log("Estro al handleChange");

    await setState({
      form: {
        ...state.form,
        [e.target.name]: e.target.value,
        username: docBibliotecario
      }
    })
    console.log(state.form);
  }


  const peticionPost = () => {
    let url = "https://bookerbackapi.herokuapp.com"

    console.log(state.form);
    axios.post(url, state.form)
      .then(res => {
        console.log(res)
        console.log('password correcto');
        modalAbrir2()

      }).catch(error => {
        console.log(error.response.status)
        if (error.response.status === 400) {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Contraseña Incorrecta',
            showConfirmButton: false,
            timer: 1600
          })          
        }
      })

  }

  useEffect(() => {
    peticionGetBibliotecario()
  }, [])

 
  const modalAbrir2 = ()=>{

    console.log("Entro a la modal");
    const Auto = document.getElementById('Auto11')
    const Auto2 = document.getElementById('Auto23')
    Auto.style.visibility = "visible"
    Auto2.style.opacity="2"
    Auto2.style.transform="scale(1)"

  }

  const modalCerrar2 = ()=>{
    const Auto = document.getElementById('Auto11')
    const Auto2 = document.getElementById('Auto23')
    Auto.style.visibility = "hidden"
    Auto2.style.opacity="0"
    Auto2.style.transform="scale(0.6)"
  }

  const handleSutmitUsuario = (e) => {
    e.preventDefault()
    const inputPassword1 = document.getElementById('inputPassword1')
    const inputPassword2 = document.getElementById('inputPassword2')

    console.log(inputPassword1.value);
    console.log(inputPassword2.value);
    if (inputPassword1.value === inputPassword2.value) {
      updateUsuario()
    }else(
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'La contraseña no coincide',
        showConfirmButton: false,
        timer: 1600
      })  
      
    )
  }

  const handleChangeEstudiante = () => {
    const inputPassword2 = document.getElementById('inputPassword2')
    console.log(inputPassword2.value);
    setUsuario({
      ...usuario,
      password : inputPassword2.value
    })
    console.log(usuario);
  }

  const updateUsuario = () => {

    let endpoint = urlUsuario + usuario.doc + '/'
    axios.put(endpoint, usuario)
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: 'Contraseña actualizada correctamente',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then((resultado) => {
          if (resultado.isConfirmed) {
            window.location.href = "/"
          }
        })           
      })
  }



  return (
    <div className="div">
      <div id='Auto' className='AutoresCategorias cambioPassword'>
        <div id='Auto2' className="Auto2 CateAutoModal">
          <div className='Estudiantes-from boxAuto AutoCateAgregar AutoresForm cambioPass2' >
            <div className="from-Titulo">
              <div className="Desactivar-From">
                <NavLink to='/PerfilBibliotecario'>
                  <i class="fa-solid fa-xmark" ></i>
                </NavLink>
              </div>
              <h1>ACTUALIZAR CONTRASEÑA</h1>
            </div>
            <form onSubmit={handleSutmit} >
              <div className="boxs-inputs">
                <div className="box-input">
                  <input type="password" onChange={handleChange} name='password' id='inputPassword' required />
                  <span></span>
                  <label>Contraseña Actual</label>
                </div>
              </div>
              <div className="btnsFormulario">
                <button className="btnFor btn-agregar">VALIDAR CONTRASEÑA</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div id='Auto11' className='AutoresCategorias'>
        <div id='Auto2' className="Auto23 CateAutoModal">
          <div className='Estudiantes-from boxAuto AutoCateAgregar AutoresForm cambioPass2' >
            <div className="from-Titulo">
              <div className="Desactivar-From">
                  <i class="fa-solid fa-xmark" onClick={modalCerrar2}></i>
              </div>
              <h1>ACTUALIZAR CONTRASEÑA</h1>
            </div>
            <form onSubmit={handleSutmitUsuario} >
              <div className="boxs-inputs">
                <div className="box-input">
                  <input type="password" id='inputPassword1' required />
                  <span></span>
                  <label>Nueva Contraseña</label>
                </div>
              </div>
              <div className="boxs-inputs">
                <div className="box-input ">
                  <input type="password" id='inputPassword2' onChange={handleChangeEstudiante} required />
                  <span></span>
                  <label>Confirmar Contraseña</label>
                </div>
              </div>
              <br />
              <div className="btnsFormulario">
                <button className="btnFor btn-agregar">ACTUALIZAR CONTRASEÑA</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

