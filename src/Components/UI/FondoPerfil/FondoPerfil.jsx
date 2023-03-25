import React, { useEffect, useState } from "react";
import { Imagenes } from "../Imagenes/Imagenes";
import fondo from "../../../assets/Imagenes/Banner/fondo.png";
import axios from "axios";
import UsuarioInactivo from "../../../assets/Imagenes/Admin/usuario.png";

export const FondoPerfil = () => {
  let id_estudiante;
  let imagen2;

  id_estudiante = localStorage.getItem("id_estudiante");
  let setearImg;
  const url = "https://bookerapi.onrender.com/modulos/estudiantes/";

  const [estudiante, setEstudiante] = useState({});
  const [formImg, setFormImg] = useState({});
  const [editImg, setEditImg] = useState(true);

  const peticionGetEstudiante = async () => {
    await axios
      .get(url + id_estudiante + "/")
      .then((response) => {
        console.log(response.data);
        setFormImg(response.data);
        setEstudiante(response.data.doc_estudiante);

        /* setImagen(response.data.doc_bibliotecario.imagen); */
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const setearImagen = (e) => {
    setearImg = e.target.files[0];
    uploadImage(e);
  };

  const uploadImage = (e) => {
    const data = new FormData();
    data.append("file", setearImg);
    data.append("upload_preset", "booker");
    data.append("cloud_name", "bookerimg");
    fetch("https://api.cloudinary.com/v1_1/bookerimg/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        imagen2 = data.url;
        setEstudiante({
          ...estudiante,
          imagen: imagen2,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    llenarImg();
  }, [estudiante]);

  const llenarImg = () => {
    setFormImg({
      ...formImg,
      doc_estudiante: estudiante,
    });
  };

  const updateDataImg = () => {
    let endpoint = url + formImg.id_estudiante + "/";
    axios.put(endpoint, formImg).then((res) => {
      console.log(res);
      setEditImg(true);
      window.location.href = "/Perfil";
    });
  };

  useEffect(() => {
    peticionGetEstudiante();
  }, []);

  return (
    <div className="fondo-perfil">
      <Imagenes url={fondo} />

      <div className="img-nombre">
        <div className="container-avatar1">
          <div className="conatiner-img-avatar">
            {estudiante.imagen === null ? (
              <Imagenes url={UsuarioInactivo} />
            ) : (
              <Imagenes url={estudiante.imagen} />
            )}
          </div>

          <input
            className="input-img"
            type="file"
            onChange={(e) => {
              setearImagen(e);
            }}
          />
        </div>
        {editImg === false ? updateDataImg() : ""}
      </div>
      <div className="usu">
        <h2>{formImg.nombres}</h2>
        <p>Estudiante</p>
      </div>
    </div>
  );
};
