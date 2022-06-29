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

  let  a = []
  let  b = []
  return (
    <div className='contenedor-perfil'>
      <Navegacion3 />
      <BotonesPerfil />
      <div className="datos-perfil">
        <h2 id='Tu-cuenta'>Tus Favoritos</h2>
        {favoritos.length === 0 ? (<div>
                  <h3>No tienes favoritos por ahora...</h3>
                </div>) :
                    (
            <div className="tabla-reservados">
              <table className='tabla-libros-reservados'>
                <thead className='barra-titulos'>
                  <th className='th-imagen'>Imagen</th>
                  <th>Nombre</th>
                  <th>Autores</th>
                  <th>Editorial</th>
                  <th>Categorias</th>
                </thead>
                <tbody className='barra-libros'>
                  {favoritos.map((favos => {

                    id_favo = favos.id_favorito
                    librosF = favos.libros
                   
                    return (
                      <tr className='tr-libros'>
                        <td className='td-imagen'>
                          {librosF.map((favoritos => (


                            <Imagenes clase='img-card-res' url={favoritos.imagen_libro} />




                          )
                          ))}
                        </td>
                        <td className='td-nombres'>
                          {librosF.map((favoritos => (

                            <p>{favoritos.nombre}</p>

                          )
                          ))}
                        </td>

                        <td>
                          {librosF.map((libros => {
                            a = libros.autores
                            return(
                             
                                <p>
                                {
                                a.map(autor => autor.nombres).join(', ')
                                }
                                </p>
                           

                            )


                          }))}
                         
                         
                        </td>
                        <td>
                        {librosF.map((libros => (
                          <p> {
                            libros.id_editorial.nombre
                            }</p> 

                        )))}
                        </td>
                        <td>
                        {librosF.map((libros => {
                            b = libros.categorias
                            return(
                             
                                <p>
                                {
                                b.map(cate => cate.nombre).join(', ')
                                }
                                </p>
                           

                            )


                          }))}
                        
                        </td>
                        <td className='td-borrar'><i onClick={peticionDeleteAuto} class="fa-solid fa-trash-can"></i></td>
                      </tr>




                    )
                  }))}

                </tbody>
              </table>
            </div>

          )
        }
       
      </div>
    </div>
  )
}
