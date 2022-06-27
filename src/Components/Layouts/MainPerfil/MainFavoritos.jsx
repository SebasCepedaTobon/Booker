import React, { useEffect, useState } from 'react'
import { BotonesPerfil } from '../../UI/BotonesPerfil/BotonesPerfil'
import { Navegacion3 } from '../../UI/Navegacion/Navegacion3'
import axios from 'axios';
import { Imagenes } from '../../UI/Imagenes/Imagenes';


export const MainFavoritos = () => {


  const id_estudiante = localStorage.getItem('id_estudiante')

  const [favoritos, setFavoritos] = useState([])
  console.log(favoritos)

  let url = "https://bookerbackapi.herokuapp.com/modulos/favoritos/?id_estudiante=" + id_estudiante

  const PedirDatos = () => {
    axios.get(url).then(response => {
      setFavoritos(response.data);
    }).catch(error => {
      console.log(error.message);
    })


  }

  let url2 = "https://bookerbackapi.herokuapp.com/modulos/favoritos/"

  const peticionDeleteAuto = async () =>{

    

    let endpoint  = url2+ id_favo + "/"
    await axios.delete(endpoint)
    .then((res)=>{
      PedirDatos()
      console.log(res);
    })
  }
  useEffect(() => {
    PedirDatos()
  }, [])

  let id_favo

  let librosF = []
  return (
    <div className='contenedor-perfil'>
      <Navegacion3 />
      <BotonesPerfil />
      <div className="datos-perfil">
        <h2 id='Tu-cuenta'>Tus Favoritos</h2>
        {favoritos.map((favos) => {
          id_favo = favos.id_favorito
          librosF = favos.libros
          return (
            <div className="ejemplares">
              {librosF.map((favorito => (
                <Imagenes clase='img-card-res' url={favorito.imagen_libro} />

              )
                
            ))}
            {librosF.map((favorito)=>(
                    <div className='datos-reservados'>
                      <h2>{favorito.nombre}</h2>
                      <p>{favorito.isbn}</p>


                    </div>
        
                  ))
                  }
                   <button onClick={peticionDeleteAuto} className="btn-reser">Cancelar</button>
            </div>
          )
        })}
       
      </div>
    </div>
  )
}
