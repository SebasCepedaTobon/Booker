import React, { useState } from 'react'
import Typewriter from "typewriter-effect";
import { Imagenes } from '../../UI/Imagenes/Imagenes';
import { Navegacion } from '../../UI/Navegacion/Navegacion'
import imgHeader from '../../../assets/Imagenes/imgheader.png'
import imgbottom from '../../../assets/Imagenes/wave.svg'
import { Mainbusqueda } from '../Mainbusqueda/Mainbusqueda';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  
  const [libros, setLibros] = useState([])
  console.log(libros)

  const [busqueda, setBusqueda] = useState("");
  console.log(busqueda)


  const buscar = (e) => {
    e.preventDefault();
    fetch('https://bookerbackapi.herokuapp.com/modulos/libros/?search='+busqueda)
    .then(res => res.json())
    .then(data =>{
      setLibros(data)
    })


  }


  const cambiarState = (e) =>{
    setBusqueda(e.target.value)
  }

  return (
    <div>
      <Navegacion/>
      <div className="banner">
        <div className="banner-contenido">
          <div className="conatainer-texto-bsqueda">
            <div className="container-text">
              <p>ENCUENTRA AQUÍ</p>
              <div className="texto-estatico">
                <Typewriter
                  options={{
                    strings: ['Exposiciones', 'Literatura', 'Comics, historietas y manga'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
            
              <form className="barra-busqueda" onSubmit={buscar}>
                
                  <input 
                    type="text" 
                    placeholder='BUSCAR' 
                    id='buscar' 
                    onChange= {cambiarState}
                  />
                  <NavLink to={"/Busqueda/"+busqueda}><button type='submit' className='btn-search'>BUSCAR</button></NavLink>
              </form>
          </div>
          <div className="img-header">
            <Imagenes url={imgHeader}/>
          </div>
        </div>
      </div>
      <div className="container-img-bottom">
          <Imagenes url={imgbottom}/> 
      </div>
    </div>
  )
}
