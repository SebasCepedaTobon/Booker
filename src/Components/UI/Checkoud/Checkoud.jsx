import React, { useEffect, useState } from "react";
import { Imagenes } from "../Imagenes/Imagenes";
import { actionTypes } from "../../../reducer";
import axios from "axios";
import { useStateValue } from "../../../StateProvider";

export const Checkoud = ({ libro }) => {
  const { nombre, id_libro, imagen_libro } = libro;

  const [autores, setAutores] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [libros, setLibros] = useState({});
  const [idioma, setIdioma] = useState({});

  let url =
    "https://bookerapi.onrender.com/modulos/libros/" + id_libro + "/";

  const PedirDatos = () => {
    axios
      .get(url)
      .then((response) => {
        setAutores(response.data.autores);
        setLibros(response.data.id_editorial);
        setIdioma(response.data.id_idioma);
        setCategorias(response.data.categorias);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    PedirDatos();
  }, []);

  const [{ reservas }, dispatch] = useStateValue();

  const borrarLibro = () =>
    dispatch({
      type: actionTypes.BORRAR_LIBRO,
      id_libro: id_libro,
    });

  return (
    <>
      <div className="card-reserva">
        <div className="card-reserva2">
          <div className="imagen-reserva">
            <Imagenes clase="img-card-reserva" url={libro.imagen_libro} />
          </div>
          <div className="info-reserva">
            <h2>{nombre}</h2>
            <div className="p-h3">
              <h3>Autor:</h3>
              <p>{autores.map((autor) => autor.nombres).join(", ")}</p>
            </div>
            <div className="p-h3">
              <h3>Editorial:</h3>
              <p>{libros.nombre}</p>
            </div>
            <div className="p-h3">
              <h3>Categorias:</h3>
              <p>{categorias.map((cate) => cate.nombre).join(", ")}</p>
            </div>
            <div className="p-h3">
              <h3>Idioma:</h3>
              <p>{idioma.nombre}</p>
            </div>
          </div>
          <div className="icon-borrar-reserva">
            <i onClick={borrarLibro} class="fa-solid fa-trash-can"></i>
          </div>
        </div>
      </div>
    </>
  );
};
