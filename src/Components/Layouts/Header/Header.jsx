import React, { useState } from 'react'
import { Navegacion } from '../../UI/Navegacion/Navegacion'







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
          <h1 className="poema">¡BUSCA LOS MEJORES LIBROS!</h1>
          <form className="barra-busqueda" onSubmit={buscar}>
            <input 
              type="text" 
              placeholder='BUSCAR' 
              id='buscar' 
              value={buscarText} 
              onChange= {(e) => setBuscartext(e.target.value)}
            />
            <button type='submit' className='btn-search'><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>
        </div>
      </div>
      <div className="banner-degrade"></div>
    </div>
  )
}
