import React, {useState, useEffect} from 'react'
import Slider from "react-slick";
import Slider2 from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../../slick.css'
import { Libros } from '../../UI/Libros/Libros';
import { CardsSlider } from '../../UI/CardsSlider/CardsSlider';
import { Spinner } from '../../UI/Spinner/Spinner';
import { Categorias } from '../../UI/Categorias/Categorias';
import { Eventos } from '../../UI/Eventos/Eventos';
import { Libromv } from '../../UI/LibroMV/Libromv';
import { VentanaReserva } from '../../UI/VentanaReserva/VentanaReserva';

//checkoutCard







export const MainHome = () => {



  const settings = {
    //dots: true,
    //infinite: true,
    slidesToShow:2,
    slidesToScroll: 2,
    //autoplay: true,
    speed: 2000,
    //autoplaySpeed: 8000,
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

  const settings2 = {
    dots: true,
    //infinite: true,
    slidesToShow:3,
    slidesToScroll: 3,
    //autoplay: true,
    speed: 2000,
    //autoplaySpeed: 8000,
    cssEase: "linear",
    initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
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

  const [libros, setLibros] = useState([])
  const [cargando, setCargando] = useState(true)



  useEffect(()=> {
    setCargando(true);
    fetch("https://bookerbackapi.herokuapp.com/modulos/libros/")
    .then(res => res.json())
    .then((data) =>{
      setLibros(data)
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
      <div className="contendor-cards-libros">
        <div id='titlulo-slider'>Novedades</div>
        <div className='cards'>
          <Slider2 {...settings2}>
            {libros.map((libro) => (
              <Libros
                key={libro.id_libro}
                libro={libro}
              />
            ))}
          </Slider2>
        </div>
      </div>
      <Eventos/>

      <div className="contendor-cards">
        <div id='titlulo-slider'>Recomendados</div>
        <div className='cards'>
          <Slider {...settings}>
            {libros.map((libro) => (
              <CardsSlider
                key={libro.id_libro}
                libro={libro}
              />
            ))}
          </Slider>
        </div>
      </div>
      <Libromv/>
      <VentanaReserva/>
    </div>  
  )
  
}
