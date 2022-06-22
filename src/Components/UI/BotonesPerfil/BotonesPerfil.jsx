import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import { Imagenes } from '../Imagenes/Imagenes'
import axios from 'axios'
import { Logout } from '../../../Logout'
import { Alerta } from '../Alerta/Alerta'




export const BotonesPerfil = () => {

    
    const id_estudiante = localStorage.getItem('id_estudiante')
    const [form2, setForm2] = useState({})
    const [imagen, setImagen] = useState([])
    const [alerta, setAlerta] = useState(false)


    const [Estudiante, setEstudiante] = useState({}) 

    const url = "https://bookerbackapi.herokuapp.com/modulos/estudiantes/" + id_estudiante+ '/'

  const PedirDatos = () =>{
    axios.get(url).then(response=>{
      setEstudiante(response.data);
      setImagen(response.data.doc_estudiante)
    }).catch(error=>{
      console.log(error.message);
    })
       
  }


  
  useEffect(() => {
      PedirDatos() 
    }, [])


   

    let image


    const setImage = (e) =>{
        image = e.target.files[0]
        updateImg(e)

    }

    const updateImg =(e)=>{
        const data = new FormData()
  data.append("file", image)
  data.append("upload_preset", "booker")
  data.append("cloud_name","bookerimg")
  fetch("https://api.cloudinary.com/v1_1/bookerimg/image/upload",{
  method:"post",
  body: data
  })
  .then(resp => resp.json())
  .then(data => {
    console.log(data.url);

    setForm2(Estudiante)
 setForm2({
    ...form2,
    apellidos: Estudiante.apellidos,
    direccion: Estudiante.direccion,
    doc_estudiante: {doc: imagen.doc, last_login: null, name: imagen.name, email: imagen.email, imagen: data.url},
    id_estudiante: id_estudiante,
    id_grado: Estudiante.id_grado.id_grado,
    id_grupo: Estudiante.id_grupo.id_grupo,
    nombres: Estudiante.nombres,
    telefono: Estudiante.telefono,
    tipodoc: Estudiante.tipodoc
  })
  
  })
  .catch(err => console.log(err))

    }



    const PeticionPut = () =>{
        
        
        axios.put(url,form2)
        .then(res=>{
          reload()
            
        })

       
        
    }

    const reload = () => {
        window.location.reload(true);
    }

    const abrir = () =>{
        document.querySelector('.botones-perfil').classList.toggle('show')
        document.querySelector('.flecha-desplegar').classList.toggle('show')
    }
    

  return (
    <>

    <div className="botones-perfil">

          <div className="img-nombre">
            <div className="container-avatar1">

                <Imagenes url={imagen.imagen}/>
                
                <input className="input-img"  type="file" onChange={(e)=>{
                setImage(e)
               
                }}/>
            </div>
            <button className='btn-confirmar' onClick={PeticionPut}>confirmar</button>

              <div className="usu">
                  <h2>{imagen.name}</h2>
                  <p id='Bienvenido'>Bienvenido a tu cuenta</p>
              </div>
          </div>
          <div className="container-scroll">
            <div className='conatiner-btn-perfil'>
              <p className='p-perfil'>PERFIL</p>
              <NavLink to='/Perfil' >
                <div className='btn-perfil'>
                  <i class="fa-solid fa-book"></i>
                  <p>Mis Datos</p>
                  <span></span>
                </div>
              </NavLink>
              <p className='p-perfil'>RESERVAS Y RESERVADOS</p>
              <NavLink to='/Historial'>
                <div className='btn-perfil'>
                  <i class="fa-solid fa-calendar-check"></i>
                  <p>Reservas</p>
                  <span></span>
                </div>
              </NavLink>
              <NavLink to='/Reservados'>
                <div className='btn-perfil'>
                  <i class="fa-solid fa-file-circle-plus"></i>
                  <p>Reservados</p>
                  <span></span>
                </div>
              </NavLink>
              <p className='p-perfil'>PRESTADOS</p>
              <NavLink to='/Prestados'>
                <div className='btn-perfil'>
                  <i class="fa-solid fa-calendar-check"></i>
                  <p>Prestados</p>
                  <span></span>
                </div>
              </NavLink>
              <p className='p-perfil'>INFRACCIONES</p>
              <NavLink to='/Infracciones'>
                <div className='btn-perfil'>
                  <i class="fa-solid fa-bullhorn"></i>
                  <p>Infracciones</p>
                </div>
              </NavLink>
              <p className='p-perfil'>FAVORITOS</p>
              <NavLink to='/Favoritos'>
                <div className='btn-perfil'>
                  <i class="fa-solid fa-heart"></i>
                  <p>Favoritos</p>
                </div>
              </NavLink>
              <p className='p-perfil'>CERRAR SESION</p>
              <NavLink to='/' onClick={Logout}>
                <div className='btn-perfil' >
                  <i class="fa-solid fa-chalkboard-user"></i>
                  <p>Salir</p>
                </div>
              </NavLink>

            </div>

          </div>
        <div className="flecha-desplegar" onClick={abrir}>
            <i class="fa-solid fa-arrow-right"></i>
        </div>   
         
      </div>
    </>
      
    
  )
}
