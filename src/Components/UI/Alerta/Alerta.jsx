import React from "react";

export const Alerta = ({ children, estado, cambiarEstado, color }) => {
  let info;

  const mostrarModal = () => {
    const time = setTimeout(() => {
      info.style.top = "-100px";
      cambiarEstado(false);
    }, 4000);

    setTimeout(() => {
      info.style.top = "-100px";
    }, 3000);
    return () => clearTimeout(time);
  };

  if (estado === true) {
    mostrarModal();
    setTimeout(() => {
      info = document.querySelector(".container-info-alerta");
      info.style.top = "20px";
      info.style.background = color;
      info.style.color = "#fff";
    }, 100);
  }
  return (
    <>
      {estado && (
        <div className="overlay-alerta">
          <div className="container-info-alerta">{children}</div>
        </div>
      )}
    </>
  );
};
