import React from 'react'


export const Categorias = () => {
  return (
    <div className="contenedor-categorias">
    <div className="comics">
      <NavLink to='/Academicos'><Imagenes url={comics} id="Academicos"/></NavLink>
      <p>Comics</p>
    </div>
    <div className="comedia">
      <Imagenes url={comedia} id="categorias"/>
      <p>Comedia</p>
    </div>
    <div className="terror">
      <Imagenes url={terror} id="categorias"/>
      <p>Terror</p>
    </div>
    <div className="novelas">
      <Imagenes url={novelas} id="categorias"/>
      <p>Novelas</p>
    </div>
    <div className="infantil">
      <Imagenes url={infantil} id="categorias"/>
      <p>Infantil</p>
    </div>
    <div className="aventura">
      <Imagenes url={aventura} id="categorias"/>
      <p>Aventura</p>
    </div>
    <div className="academico">
      <Imagenes url={academico} id="categorias"/>
      <p>Academicos</p>
    </div>
  </div>
  )
}
