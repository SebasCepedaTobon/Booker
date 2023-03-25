import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Slider2 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../slick.css";
import { Libros } from "../../UI/Libros/Libros";
import { CardsSlider } from "../../UI/CardsSlider/CardsSlider";
import { Spinner } from "../../UI/Spinner/Spinner";
import { Eventos } from "../../UI/Eventos/Eventos";
import { Libromv } from "../../UI/LibroMV/Libromv";
import { VentanaReserva } from "../../UI/VentanaReserva/VentanaReserva";
import axios from "axios";
import { Alertafavoritos } from "../../UI/VentanaReserva/Alertafavoritos";

//checkoutCard

export const MainHome = () => {
  const settings = {
    //dots: true,
    //infinite: true,
    slidesToShow: 2,
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
          dots: true,
        },
      },
      {
        breakpoint: 748,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings2 = {
    dots: true,
    //infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    //autoplay: true,
    speed: 2000,
    //autoplaySpeed: 8000,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [libros, setLibros] = useState([]);
  const [librosEdu, setLibrosEdu] = useState([]);
  const [cargando, setCargando] = useState(true);

  let url = "https://bookerapi.onrender.com/modulos/libros/";

  const PedirDatos = () => {
    axios
      .get(url)
      .then((response) => {
        setLibrosEdu(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    PedirDatos();
  }, []);

  useEffect(() => {
    setCargando(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLibros(data);
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <Spinner />;
  }

  return (
    <div className="main">
      <div className="contendor-cards-libros">
        <div id="titlulo-slider">Novedades</div>
        <div className="cards">
          <Slider2 {...settings2}>
            {libros.map((libro) => (
              <Libros key={libro.id_libro} libro={libro} />
            ))}
          </Slider2>
        </div>
      </div>
      <Eventos />

      <div className="contendor-cards">
        <div id="titlulo-slider">Libros Educativos</div>
        <div className="cards">
          <Slider {...settings}>
            {librosEdu.map((libro) => (
              <CardsSlider key={libro.id_libro} libro={libro} />
            ))}
          </Slider>
        </div>
      </div>
      <Libromv />
      <VentanaReserva />
      <Alertafavoritos />
    </div>
  );
};
