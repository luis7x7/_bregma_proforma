import { useState } from "react";
import Switch from "./components/Switch.jsx";
import "./parte-2.css";
import img_calendario from "./assets/img/image5.png";

function parte_2() {
  return (
    <article className="pf-pt2">
      <div className="pf-pt2-fecha">
        <h3 className="fecha">Fecha de inicio de la facturación </h3>
        <img className="img-btn" alt="calendario" src={img_calendario} />
      </div>
      <div className="servicios">
        <h3 className="serv-off">Finalizar servicio</h3>
        <Switch />

        <h3 className="serv-on">Iniciar servicio</h3>
        <Switch />
      </div>
    </article>
  );
}

export default parte_2;
