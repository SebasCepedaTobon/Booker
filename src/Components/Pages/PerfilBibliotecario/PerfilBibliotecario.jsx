import React, { useState, useEffect } from "react";
import { AdminHeader } from "../../UI/NavegadorAdmin/AdminHeader";
import { AdminNavegador } from "../../UI/NavegadorAdmin/AdminNavegador";
import "../../../Static/PerfilBibliotecario.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { Imagenes } from "../../UI/Imagenes/Imagenes";

let id_bibliotecario;
let imagen2;

export const PerfilBibliotecario = () => {
  let setearImg;
  const url = "https://bookerbackapi.herokuapp.com/modulos/bibliotecarios/";

  const peticionGetBibliotecario = () => {
    id_bibliotecario = localStorage.getItem("id_bibliotecario");

    axios
      .get(url + id_bibliotecario + "/")
      .then((response) => {
        console.log(response.data);
        setForm2(response.data);
        setBibliotecario(response.data.doc_bibliotecario);
        setImagen(response.data.doc_bibliotecario.imagen);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const [bibliotecario, setBibliotecario] = useState({});
  const [imagen, setImagen] = useState();
  const [cerrar, setCounter] = useState(true);
  const [form2, setForm2] = useState({});

  const ventanaFlotante = () => {
    const doc = document.getElementById("doc");
    doc.value = bibliotecario.doc;

    const name1 = document.getElementById("name");
    name1.value = bibliotecario.name;

    const email = document.getElementById("email");
    email.value = bibliotecario.email;
    setCounter(!cerrar);
  };

  useEffect(() => {
    peticionGetBibliotecario();

    const overlay = document.getElementById("overlay");
    const from_tablas = document.querySelector(".from-tablas");

    if (cerrar === true) {
      overlay.style.visibility = "hidden";
      from_tablas.style.transform = "scale(0.6)";
      from_tablas.style.opacity = "0";
    } else {
      overlay.style.visibility = "visible";
      from_tablas.style.transform = "scale(1)";
      from_tablas.style.opacity = "2";
    }
  }, [cerrar]);

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "¿Esta seguro de guardar los cambios?",
      icon: "warning",
      confirmButtonText: "Si, Guardar",
      showCancelButton: true,
      cancelButtonText: "No, cancelar",
      reverseButtons: true,
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        console.log("Se llamaba update2");
        updateData();
      }
    });
  };

  const updateData = async () => {
    let endpoint = url + form2.id_bibliotecario + "/";
    await axios.put(endpoint, form2).then((res) => {
      
      peticionGetBibliotecario();
      ventanaFlotante();
      console.log(res);
    });
  };

  const handleChange = (e) => {
    const doc = document.getElementById("doc");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const tipoDoc = document.getElementById("tipoDoc");

    setForm2({
      ...form2,
      [e.target.name]: e.target.value,
      tipodoc: tipoDoc.value,
      doc_bibliotecario: {
        doc: doc.value,
        name: name.value,
        email: email.value,
      },
    });
    console.log(form2);
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
    fetch("  https://api.cloudinary.com/v1_1/bookerimg/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        imagen2 = data.url;
        console.log(data.url);

        setForm2({
          ...form2,
          nombres: "jj",
          imagen: data.url,
        });
        console.log(form2);
        console.log(form2);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="MainAdministrativo">
      <div className="box-AdminNavegador">
        <AdminNavegador />
      </div>
      <div className="box-Header-Admin">
        <AdminHeader />
        <div className="TablaPerilUsuario">
          <div className="boxperfilbibliotecario">
            <div className="box1">
              <div className="datosBibliotecario">
                <div className="theDatos">
                  <div className="theDatosImg">
                    <Imagenes clase="icono" />
                    <input
                      type="file"
                      onChange={(e) => {
                        setearImagen(e);
                      }}
                    />
                  </div>

                  <div className="theDatosP">
                    <p className="N">{form2.nombres}</p>
                    <p className="C">Bibliotecario</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="box2">
              <div className="butonesPerfilBibliotecario">
                <div onClick={ventanaFlotante} className="card-Admin">
                  <div className="btn-perfilBibliotecario">
                    <p>Editar Perfil</p>
                    <span></span>
                  </div>
                </div>
                <NavLink className="card-Admin" to="/TEstudiantes">
                  <div className="btn-perfilBibliotecario btn-libroPerfil">
                    <p>Libros Favoritos</p>
                    <span></span>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="overlay" className="overlay">
        <div className="from-tablas">
          <div className="Estudiantes-from NBibliotecario">
            <div className="from-Titulo">
              <div className="Desactivar-From">
                <i onClick={ventanaFlotante} class="fa-solid fa-xmark"></i>
              </div>
              <h1>ACTUALIZAR PERFIL</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="boxs-inputs">
                <div className="box-select">
                  <select
                    value={form2.tipodoc}
                    id="tipoDoc"
                    onChange={handleChange}
                  >
                    <option selected>Tipo Documento...</option>
                    <option className="opciones" value="CC">
                      Cédula de Ciudadanía
                    </option>
                    <option className="opciones" value="TI">
                      Tarjeta de Identidad
                    </option>
                  </select>
                </div>
                <div className="box-input">
                  <input
                    type="text"
                    onChange={handleChange}
                    id="doc"
                    required
                  />
                  <span></span>
                  <label>N° Documento</label>
                </div>
              </div>

              <div className="boxs-inputs">
                <div className="box-input">
                  <input
                    type="text"
                    name="nombres"
                    onChange={handleChange}
                    value={form2.nombres}
                    required
                  />
                  <span></span>
                  <label>Nombres</label>
                </div>
                <div className="box-input">
                  <input
                    type="text"
                    name="apellidos"
                    onChange={handleChange}
                    value={form2.apellidos}
                    required
                  />
                  <span></span>
                  <label>Apellidos</label>
                </div>
              </div>
              <div className="boxs-inputs">
                <div className="box-input">
                  <input
                    type="text"
                    name="direccion"
                    onChange={handleChange}
                    value={form2.direccion}
                    required
                  />
                  <span></span>
                  <label>Dirección</label>
                </div>

                <div className="box-input">
                  <input
                    type="text"
                    name="telefono"
                    onChange={handleChange}
                    value={form2.telefono}
                    required
                  />
                  <span></span>
                  <label>N° Celular</label>
                </div>
              </div>
              <div className="boxs-inputs">
                <div className="box-input">
                  <input
                    type="text"
                    onChange={handleChange}
                    id="name"
                    required
                  />
                  <span></span>
                  <label>Nombre de Usuario</label>
                </div>
                <div className="box-input">
                  <input
                    type="text"
                    onChange={handleChange}
                    id="email"
                    required
                  />
                  <span></span>
                  <label>Gmail</label>
                </div>
              </div>
              <br />
              <div className="btnsFormulario">
                <button className="btnFor btn-agregar">
                  ACTUALIZAR PERFIL
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
