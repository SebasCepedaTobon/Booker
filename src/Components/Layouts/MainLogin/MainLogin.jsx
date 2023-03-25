import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Imagenes } from "../../UI/Imagenes/Imagenes";
import logo from "../../../assets/Imagenes/logos/Booker1.png";
import whatsapp from "../../../assets/Imagenes/iconos/phone.svg";
import email from "../../../assets/Imagenes/iconos/mail.svg";
import axios from "axios";

export const MainLogin = () => {
  const [state, setState] = useState({
    form: {
      doc: "",
      password: "",
    },
    error: false,
    errorMsg: "",
  });

  const recharge = (e) => {
    e.preventDefault();
  };

  const change = async (e) => {
    await setState({
      form: {
        ...state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  const btnIngresar = () => {
    let url = "https://bookerapi.onrender.com";

    axios
      .post(url, state.form)
      .then((res) => {
        console.log(res);

        if (res.status === 200 || res.status === 201) {
          if (res.data.user.doc_estudiante) {
            localStorage.setItem("id_estudiante", res.data.user.id_estudiante);
            localStorage.setItem(
              "tipo_usuario",
              res.data.user.doc_estudiante.tipo_usuario
            );
            window.location.href = "/Home";
          } else if (res.data.user.doc_bibliotecario) {
            localStorage.setItem("id_bibliotecario",res.data.user.id_bibliotecario);
            localStorage.setItem("tipo_usuario",res.data.user.doc_bibliotecario.tipo_usuario);
            window.location.href = "/Admin";
          } else if (res.data.user.tipo_usuario === "A") {
            localStorage.setItem("doc_admin", res.data.user.doc);
            localStorage.setItem("tipo_usuario", res.data.user.tipo_usuario);
            window.location.href = "/TBibliotecarios";
          }

        } else {
          setState({
            error: true,
            errorMsg: res.data.message,
          });
        }
      })
      .catch((error) => {
        setState({
          error: true,
          errorMsg: "Credenciales Invalidas",
        });
        if (error.response.status === 401) {
          setState({
            error: true,
            errorMsg: "Usuario Inactivo",
          });
        } else if (error.response.status === 400) {
          setState({
            error: true,
            errorMsg: "Credenciales Invalidas",
          });
        }
      });
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
              <NavLink to="/Email">
                <Imagenes url={email} clase="Login-Email" />
              </NavLink>
              <a href="https://wa.me/+573002536217" target={"_blank"}>
                <Imagenes url={whatsapp} clase="whatsapp" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="LG-boxFrom">
        <Imagenes url={logo} clase={"logo-responsivo"} />
        <div className="LG-box-From">
          <div className="LG-contenedor-From">
            <h1>¡INICIAR SESIÓN!</h1>
            <form onSubmit={recharge}>
              <div className="box-input">
                <input
                  type="text"
                  autoComplete="off"
                  required
                  onChange={change}
                  name="username"
                />
                <span></span>
                <label>N° Documento</label>
              </div>
              <div className="box-input">
                <input
                  type="password"
                  required
                  onChange={change}
                  name="password"
                />
                <span></span>
                <label>Contraseña</label>
              </div>
              <div className="pass">
                {state.error === true && (
                  <div className="alerta">
                    <p>{state.errorMsg}</p>
                  </div>
                )}
              </div>
              <input type="submit" value="Ingresar" onClick={btnIngresar} />
            </form>
          </div>
        </div>
        <div className="LG-Contactos-Responsivo">
          <NavLink to="/Email">
            <Imagenes url={email} clase="Login-Email" />
          </NavLink>
          <a href="https://wa.me/+573002536217" target={"_blank"}>
            <Imagenes url={whatsapp} clase="whatsapp" />
          </a>
        </div>
      </div>
    </div>
  );
};
