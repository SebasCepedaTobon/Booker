import React from "react";
import { NavLink } from "react-router-dom";
import { Imagenes } from "../../UI/Imagenes/Imagenes";
import logo from "../../../assets/Imagenes/logos/Booker1.png";
import home from "../../../assets/Imagenes/iconos/home.svg";
import emailjs from "@emailjs/browser";

export const Gmail = () => {
  const validarAlerta = () => {
    const inputUserGmail = document.querySelector("#inputUserGmail").value;
    const correoGmail = document.querySelector("#correoGmail").value;
    const mensajeGmail = document.querySelector("#mensajeGmail").value;

    if (inputUserGmail !== "" && correoGmail !== "" && mensajeGmail !== "") {
      alertaConfirmar();
    }
  };

  const alertaConfirmar = () => {
    // Swal.fire({
    //   title: 'ENVIADO',
    //   text: 'Mensaje enviado correctamente',
    //   icon: 'success',
    //   confirmButtonText: 'OK'
    // }).then((resultado) => {
    //   if (resultado.isConfirmed) {
    //     window.location.reload(true);
    //   }
    // })
  };

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_rqhk3is",
        "template_voi653l",
        event.target,
        "4mr02SX1o9lEj3s9Y"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div className="Main-Login-Gmail">
      <div className="box-Informacion">
        <div className="box-info">
          <div className="LG-Info">
            <div className="LG-info">
              <div className="LG-logo">
                <Imagenes url={logo} clase={"logo"} />
              </div>
            </div>
            <div className="LG-Contactos">
              <NavLink to="/home">
                <Imagenes url={home} clase="homeGmail" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="LG-boxFrom">
        <div className="LG-box-From">
          <div className="LG-contenedor-From">
            <h1>¡CONTACTANOS!</h1>
            <form onSubmit={sendEmail}>
              <div className="box-input">
                <input
                  type="text"
                  id="inputUserGmail"
                  name="usuario"
                  required
                />
                <span></span>
                <label>Nombre de usuario</label>
              </div>
              <div className="box-input">
                <input name="email" id="correoGmail" type="text" required />
                <span></span>
                <label>Dirección de correo</label>
              </div>
              <div className="box-textarea">
                <textarea
                  placeholder="Mensaje"
                  id="mensajeGmail"
                  name="mensaje"
                  required
                ></textarea>
                <span></span>
                <label htmlFor=""></label>
              </div>
              <input onClick={validarAlerta} type="submit" value="Enviar" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
