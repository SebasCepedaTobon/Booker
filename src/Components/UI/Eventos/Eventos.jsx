import React, { useState, useEffect } from "react";
import { Imagenes } from "../Imagenes/Imagenes";
import { NavLink } from "react-router-dom";

export const Eventos = () => {
  const [evento, setEvento] = useState([]);

  useEffect(() => {
    fetch("https://bookerapi.onrender.com/modulos/eventos/")
      .then((res) => res.json())
      .then((data) => {
        setEvento(data);
      });
  }, []);

  return (
    <>
      <div id="titlulo-eventos">Eventos</div>
      <div className="container-eventos">
        {evento.map((eventos) => {
          return (
            <div>
              <NavLink to={"/Eventos/" + eventos.id_evento + "/"}>
                <Imagenes url={eventos.imagen_evento} />
              </NavLink>
            </div>
          );
        })}
      </div>
    </>
  );
};
