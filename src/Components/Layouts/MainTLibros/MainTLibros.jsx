import React, { useState, useEffect } from "react";
import { Navegacion3 } from "../../UI/Navegacion/Navegacion3";
import { Libros } from "../../UI/Libros/Libros";
import { Spinner } from "../../UI/Spinner/Spinner";
import { VentanaReserva } from "../../UI/VentanaReserva/VentanaReserva";
import { Alertafavoritos } from "../../UI/VentanaReserva/Alertafavoritos";

export const MainTLibros = () => {
  const [cargando, setCargando] = useState(true);

  const [libros, setLibros] = useState([]);

  const [busqueda, setBusqueda] = useState("");

  const buscar = (e) => {
    e.preventDefault();
    fetch("https://bookerapi.onrender.com/modulos/libros/?search=" + busqueda)
      .then((res) => res.json())
      .then((data) => {
        setLibros(data);
      });
  };

  const cambiarState = (e) => {
    setBusqueda(e.target.value);
  };

  useEffect(() => {
    setCargando(true);
    fetch(
      "https://bookerapi.onrender.com/modulos/libros/?estado=AV&ordering=-id_libro"
    )
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
    <>
      <Navegacion3 />
      <div className="contendor-cards-busquedas">
        <form className="barra-busqueda" onSubmit={buscar}>
          <input
            type="text"
            placeholder="BUSCAR"
            id="Buscador"
            onChange={cambiarState}
          />
        </form>
        <div className="cards-busquedas">
          {libros.map((libro) => (
            <Libros key={libro.id_libro} libro={libro} />
          ))}
        </div>
      </div>
      <VentanaReserva />
      <Alertafavoritos />
    </>
  );
};
