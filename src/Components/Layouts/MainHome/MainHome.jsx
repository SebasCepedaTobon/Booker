import React from 'react'
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import libro1 from '../../../assets/Imagenes/libro1.jpg'
import comics from '../../../assets/Imagenes/commics.gif'
import comedia from '../../../assets/Imagenes/comedia.gif'
import terror from '../../../assets/Imagenes/terror.gif'
import novelas from '../../../assets/Imagenes/novelas.gif'
import infantil from '../../../assets/Imagenes/infantil.gif'


export const MainHome = () => {
  return (
    <div className='main'>
      <div className="contenedor-categorias">
        <div className="comics">
          <Imagenes url={comics} id="categorias"/>
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
        
      </div>
      <div className='contenedor'>
        <div className="info">
        <h2 id='autor'>Luis Miguel</h2>
            <p id='descripcion'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aspernatur ex accusantium vitae sequi libero ab nostrum,
            emo cupiditate hic eveniet animi voluptatum ea pariatur dolores expedita, eaque iusto quod.</p>
            <button id='btn-Vermas'>Ver mas...</button>
        </div>
        <Imagenes url={libro1} id="fila-poster"/>
      </div>
      <div className="contenedor-libro">
        <Imagenes url={libro1} id="libro"/>
      </div>
    </div>
  )
}
