import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import '../../../Static/Admin.css'
import '../../../Static/MediaQueriesAdmin.css'
import axios from 'axios'


export const Botones = () => {

    const userName_estudiante = localStorage.getItem('name')
    const id_estudiante = localStorage.getItem('id_estudiante')
    const [form2, setForm2] = useState({})
    const [imagen, setImagen] = useState([])


    const [Estudiante, setEstudiante] = useState({}) 
    console.log(Estudiante)

    const url = "https://bookerapi.onrender.com/modulos/estudiantes/" + id_estudiante+ '/'

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
    doc_estudiante: {doc: '10052895', last_login: null, name: 'cr7', email: 'cristian@gmail.com', imagen: data.url},
    id_estudiante: 3,
    id_grado: Estudiante.id_grado.id_grado,
    id_grupo: Estudiante.id_grupo.id_grupo,
    nombres: "Cristiano Ronaldo",
    telefono: "3212084206",
    tipodoc: "CC"
  })
  
  })
  .catch(err => console.log(err))

  /* handleChange(e) */
    

  

    }






    console.log(form2);

    const PeticionPut = () =>{
        
        
        axios.put(url,form2).then(res=>{
            console.log(res)
        })

        reload()
        
    }

    const reload = () => {
        window.location.reload(true);
    }

    

  const [navegador, setCounter] = useState(true)

    const mostrarNavegador  = () => {setCounter(!navegador)}
  
    useEffect(() => {

      const config = document.getElementById('Admin-Navegador2')

      if(navegador === true){
        config.style.marginLeft = "0"

      }else{
        config.style.marginLeft = "-260px"
        config.style.transition = "all 0.5s"
      }
  
    },[navegador]);

  return (    
    <div id='Admin-Navegador2' className='Admin-Navegador'>
      <div className='Menu-Padre'>
        <div className='box-menu' >
            <p className='LyE'>PERFIL</p>
            <NavLink to='/Perfil' className='vinculo'>              
              <div className='box-vinculos'>
                <i class="fa-solid fa-book"></i>
                <p>Mis Datos</p>
                <span></span>
              </div>
            </NavLink>         
            <p className='LyE'>RESERVAS Y RESERVADOS</p>
            <NavLink to='/Historial' className='vinculo'>
              <div className='box-vinculos'>
                <i class="fa-solid fa-calendar-check"></i>
                <p>Reservas</p>
                <span></span>
              </div>
            </NavLink>
            <NavLink to='/Historial' className='vinculo'>
              <div className='box-vinculos'>
              <i class="fa-solid fa-file-circle-plus"></i>
                <p>Reservados</p>                
                <span></span>
              </div>
            </NavLink>
            <p className='LyE' id='infra'>INFRACCIONES</p>
              <NavLink to='/Infracciones' className='vinculo'>              
                <div className='box-vinculos'>
                  <i class="fa-solid fa-bullhorn"></i>
                  <p>Infracciones</p>                
                </div>
              </NavLink>
            <p className='LyE'>CERRAR SESION</p>
              <NavLink to='/' className='vinculo'>              
                <div className='box-vinculos'>
                  <i class="fa-solid fa-chalkboard-user"></i>
                  <p>Salir</p>                
                </div>
              </NavLink>
        </div>              
      </div>
      <div onClick={mostrarNavegador} className='config'>
        <div id='config' className='spinnerAdmin'></div>
      </div>
    </div>
  )
}