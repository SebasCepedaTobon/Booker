import React, {useState, useEffect} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../../slick.css'
import { Imagenes } from '../../UI/Imagenes/Imagenes'
import comics from '../../../assets/Imagenes/GIF/commics.gif'
import comedia from '../../../assets/Imagenes/GIF/comedia.gif'
import terror from '../../../assets/Imagenes/GIF/terror.gif'
import novelas from '../../../assets/Imagenes/GIF/novelas.gif'
import infantil from '../../../assets/Imagenes/GIF/infantil.gif'
import aventura from '../../../assets/Imagenes/GIF/aventura.gif'
import academico from '../../../assets/Imagenes/GIF/academicos.gif'
import { NavLink } from 'react-router-dom'
import { Libros } from '../../UI/Libros/Libros';
import { CardsSlider } from '../../UI/CardsSlider/CardsSlider';
import { Spinner } from '../../UI/Spinner/Spinner';
import { useLocation } from 'react-router';
//checkoutCard







export const MainHome = () => {



  const settings = {
    dots: true,
    infinite: true,
    slidesToShow:2,
    slidesToScroll: 2,
    autoplay: true,
    speed: 6000,
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
  //Estado de los libros con listado de libros
  const [libros, setLibros] = useState([])
  const [cargando, setCargando] = useState(true)
    /*{ id: 1, imagen: libro1 , nombre: 'Luis Miguel', Autor: 'Kevin Usama', isbn: 123454544},
    { id: 2, imagen: libro2 , nombre: 'Diario del fin del mundo', Autor: 'Mario Mendoza', isbn: 235454544},
    { id: 3, imagen: libro3 , nombre: 'Memorias de altagracia', Autor: 'Sebastian Cepeda', isbn: 456454544 },
    { id: 4, imagen: libro4 , nombre: 'Manual de auto defensa', Autor: 'Marlon Campo', isbn: 567454544},
    { id: 5, imagen: libro5 , nombre: 'Entre lagrimas y cintas', Autor: 'Elkin Mendez', isbn: 789454544 },
    { id: 6, imagen: libro6 , nombre: 'Satanas', Autor: 'Mario Mendoza', isbn: 435454544}*/



  useEffect(()=> {
    setCargando(true);
    fetch("https://rickandmortyapi.com/api/character/")
    .then(res => res.json())
    .then((data) =>{
      setLibros(data.results)
      setCargando(false);
    })
  }, []);

  if(cargando) {
    return (
      <Spinner />
    )
  }



  

  return (
    <div className='main'>
      <div className="contenedor-categorias">
        <div className="comics">
          <NavLink to='/Comics'><Imagenes url={comics} id="Academicos"/></NavLink>
          <p>Comics</p>
        </div>
        <div className="comedia">
          <NavLink to='/Comedia'><Imagenes url={comedia} id="categorias"/></NavLink>
          <p>Comedia</p>
        </div>
        <div className="terror">
          <NavLink to='/Terror'><Imagenes url={terror} id="categorias"/></NavLink>
          <p>Terror</p>
        </div>
        <div className="novelas">
          <NavLink to='/Novelas'><Imagenes url={novelas} id="categorias"/></NavLink>
          <p>Novelas</p>
        </div>
        <div className="infantil">
          <NavLink to='/Infantil'><Imagenes url={infantil} id="categorias"/></NavLink>
          <p>Infantil</p>
        </div>
        <div className="aventura">
          <NavLink to='/Aventura'><Imagenes url={aventura} id="categorias"/></NavLink>
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
            {libros.map((libro) => (
              <CardsSlider
                key={libro.id}
                libro={libro}
              />
            ))}
          </Slider>
        </div>
      </div>
      <div className="libros">
        {libros.map((libro)=> (
          <Libros
          key = {libro.id}
          libro = {libro}
          />
        ))}
      </div>
    </div>  
  )
  
}
