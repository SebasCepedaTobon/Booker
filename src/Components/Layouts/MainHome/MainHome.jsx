import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../../slick.css'
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import libro1 from '../../../assets/Imagenes/libro1.jpg'
import comics from '../../../assets/Imagenes/GIF/commics.gif'
import comedia from '../../../assets/Imagenes/GIF/comedia.gif'
import terror from '../../../assets/Imagenes/GIF/terror.gif'
import novelas from '../../../assets/Imagenes/GIF/novelas.gif'
import infantil from '../../../assets/Imagenes/GIF/infantil.gif'
import aventura from '../../../assets/Imagenes/GIF/aventura.gif'
import academico from '../../../assets/Imagenes/GIF/academicos.gif'
import { NavLink } from 'react-router-dom'



export const MainHome = () => {



  const settings = {
    dots: true,
    infinite: true,
    slidesToShow:2,
    slidesToScroll: 2,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <div className='main'>
      <div className="contenedor-categorias">
        <div className="comics">
         <Imagenes url={comics} id="Academicos"/>
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
          <NavLink to='/Academicos'><Imagenes url={academico} id="categorias"/></NavLink>
          <p>Academicos</p>
        </div>
      </div>
      <div className="contendor-cards">
        <div className='cards'>
          <Slider {...settings}>
            <div className='carta'>
              <Imagenes url={libro1} id="libro"/>
              <div className="card">
                <div className='info2'>
                  <h2 id='titulo'>LUIS MIGUEL</h2>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nihil harum adipisci 
                    placeat laudantium quam quo in voluptates corporis,.</p>
                    <NavLink to='/Libro'><button className='btnMas'>Ver mas...</button></NavLink>
                </div>
              </div>
            </div>
            <div className='carta'>
              <Imagenes url={libro1} id="libro"/>
              <div className="card">
                <div className='info2'>
                  <h2 id='titulo'>LUIS MIGUEL</h2>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nihil harum adipisci 
                    placeat laudantium quam quo in voluptates corporis,.</p>
                    <NavLink to='/Libro'><button className='btnMas'>Ver mas...</button></NavLink>
                </div>
              </div>
            </div>
            <div className='carta'>
              <Imagenes url={libro1} id="libro"/>
              <div className="card">
                <div className='info2'>
                  <h2 id='titulo'>LUIS MIGUEL</h2>
                  <p id='des'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nihil harum adipisci 
                    placeat laudantium quam quo in voluptates corporis,.</p>
                    <NavLink to='/Libro'><button className='btnMas'>Ver mas...</button></NavLink>
                </div>
              </div>
            </div>
            <div className='carta'>
              <Imagenes url={libro1} id="libro"/>
              <div className="card">
                <div className='info2'>
                  <h2 id='titulo'>LUIS MIGUEL</h2>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nihil harum adipisci 
                    placeat laudantium quam quo in voluptates corporis,.</p>
                    <NavLink to='/Libro'><button className='btnMas'>Ver mas...</button></NavLink>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="libros">
        <div className="cardss">
          <div className="contenedor-libro">
              <div className="libro">
                <Imagenes url={libro1} id="libro"/>
              </div>
              <div className="btn-card">
                <div className="container_vacio">

                </div>
                <div className="container_botones">
                  <button className='btnMas'>Ver mas...</button>
                  <button>Reservar</button>
                </div>
              </div>
          </div>
          <div className="blanco">
          </div>
        </div>
        <div className="cardss">
          <div className="contenedor-libro">
              <div className="libro">
                <Imagenes url={libro1} id="libro"/>
              </div>
              <div className="btn-card">
                <div className="container_vacio">

                </div>
                <div className="container_botones">
                  <button id='btnMas'>Ver mas...</button>
                  <button>Reservar</button>
                </div>
              </div>
          </div>
          <div className="blanco">
          </div>
        </div>
        <div className="cardss">
          <div className="contenedor-libro">
              <div className="libro">
                <Imagenes url={libro1} id="libro"/>
              </div>
              <div className="btn-card">
                <div className="container_vacio">

                </div>
                <div className="container_botones">
                  <button id='btnMas'>Ver mas...</button>
                  <button>Reservar</button>
                </div>
              </div>
          </div>
          <div className="blanco">
          </div>
        </div>
        <div className="cardss">
          <div className="contenedor-libro">
              <div className="libro">
                <Imagenes url={libro1} id="libro"/>
              </div>
              <div className="btn-card">
                <div className="container_vacio">
                </div>
                <div className="container_botones">
                  <button id='btnMas'>Ver mas...</button>
                  <button>Reservar</button>
                </div>
              </div>
          </div>
          <div className="blanco">
          </div>
        </div>
        <div className="cardss">
          <div className="contenedor-libro">
              <div className="libro">
                <Imagenes url={libro1} id="libro"/>
              </div>
              <div className="btn-card">
                <div className="container_vacio">
                </div>
                <div className="container_botones">
                  <button id='btnMas'>Ver mas...</button>
                  <button>Reservar</button>
                </div>
              </div>
          </div>
          <div className="blanco">
          </div>
        </div>
        <div className="cardss">
          <div className="contenedor-libro">
              <div className="libro">
                <Imagenes url={libro1} id="libro"/>
              </div>
              <div className="btn-card">
                <div className="container_vacio">
                </div>
                <div className="container_botones">
                  <button id='btnMas'>Ver mas...</button>
                  <button>Reservar</button>
                </div>
              </div>
          </div>
          <div className="blanco">
          </div>
        </div>
        <div className="cardss">
          <div className="contenedor-libro">
              <div className="libro">
                <Imagenes url={libro1} id="libro"/>
              </div>
              <div className="btn-card">
                <div className="container_vacio">
                </div>
                <div className="container_botones">
                  <button id='btnMas'>Ver mas...</button>
                  <button>Reservar</button>
                </div>
              </div>
          </div>
          <div className="blanco">
          </div>
        </div>
        <div className="cardss">
          <div className="contenedor-libro">
              <div className="libro">
                <Imagenes url={libro1} id="libro"/>
              </div>
              <div className="btn-card">
                <div className="container_vacio">
                </div>
                <div className="container_botones">
                  <button id='btnMas'>Ver mas...</button>
                  <button>Reservar</button>
                </div>
              </div>
          </div>
          <div className="blanco">
          </div>
        </div>
      </div>
    </div>  
  )
  
}
