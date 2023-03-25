import React, { useState, useEffect } from "react";
import { Imagenes } from "../../UI/Imagenes/Imagenes";
import { useParams } from "react-router";
import { Spinner } from "../../UI/Spinner/Spinner";

export const MainEventos = () => {
  const { id_evento } = useParams();

  const [cargando, setCargando] = useState(true);

  const [evento, setEvento] = useState([]);
  console.log(evento);

  useEffect(() => {
    setCargando(true);
    fetch("https://bookerapi.onrender.com/modulos/eventos/" + id_evento + "/")
      .then((res) => res.json())
      .then((data) => {
        setEvento(data);
        setCargando(false);
      });
  }, [id_evento]);

  if (cargando) {
    return <Spinner />;
  }

  return (
    <div className="container-event">
      <h2 className="titulo-event">{evento.titulo}</h2>
      <div className="fechas">
        <i className="fa fa-calendar" aria-hidden="true"></i>
        <p>
          {evento.fec_inicio} - {evento.fec_fin}
        </p>
      </div>
      <div className="card2">
        <Imagenes url={evento.imagen_evento} />
      </div>
      <div className="descripcion-evento">
        <p>{evento.descripcion}</p>
      </div>
    </div>
  );
};
