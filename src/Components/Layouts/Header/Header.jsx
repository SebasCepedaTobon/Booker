import React, { useState } from 'react'
import Typewriter from "typewriter-effect";
import { Imagenes } from '../../UI/Imagenes/Imagenes';
import { Navegacion } from '../../UI/Navegacion/Navegacion'
import imgHeader from '../../../assets/Imagenes/imgheader.png'
import imgbottom from '../../../assets/Imagenes/wave.svg'
import imgbottom2 from '../../../assets/Imagenes/wave2.svg'







export const Header = () => {

  const [buscarText, setBuscartext] = useState("");

  

  const buscar = (e) => {
    e.preventDefault();
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
                    strings: ['Exposiciones digitales', 'Literatura Digital', 'Comics, Manga y libros con muchas aventuras'],
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
                value={buscarText} 
                onChange= {(e) => setBuscartext(e.target.value)}
              />
              <button type='submit' className='btn-search'>BUSCAR</button>
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
