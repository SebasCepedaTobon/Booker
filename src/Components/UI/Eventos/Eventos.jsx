import React, { useState, useEffect } from 'react'
import { Imagenes } from '../Imagenes/Imagenes'
import { NavLink } from 'react-router-dom'


export const Eventos = () => {

  
  const [evento, setEvento] = useState([])
  console.log(evento)
  

  useEffect(() => {
      fetch("https://bookerbackapi.herokuapp.com/modulos/eventos/")
          .then(res => res.json())
          .then((data) => {
              setEvento(data)
           
          })
  }, []);

  


  return (
    <>
    <div id='titlulo-eventos'>Eventos</div>
      <div className='container-eventos'>
        {evento.map((eventos=>{
          return(
            <div>
              <NavLink to={"/Eventos/" + eventos.id_evento + "/"}>
                <Imagenes url={eventos.imagen_evento}/>
              </NavLink>
            </div>
          )
        }))}
        
         {/* <div className="evento1">

          <NavLink to={"/Libro/" + evento.id_libro}>
            <Imagenes url={evento.imagen_evento}/>
          </NavLink>
          </div>
        
        <div className="evento2">
          <Imagenes url={evento.imagen_evento}/>
        </div>
        <div className="evento3">
        <Imagenes url={evento.imagen_evento}/>
        </div>
        <div className="evento4">
        <Imagenes url={evento.imagen_evento}/>
          
      </div>*/}
      </div>
    </>

  )
}
