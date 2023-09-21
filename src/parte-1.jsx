import { useState } from "react";

import "./parte-1.css";

import img_proforma from "./assets/img/image.png";
import img_calendario from "./assets/img/image2.png";
import img_butom from "./assets/img/image4.png";

function parte_1() {
  return (
    <article className="pf-pt1">
      <h2 className="titulo">Proforma</h2>
      <p className="subtitulo">
        En este módulo usted podra visualizar las proformas
      </p>
      <div className="pf-pt-1-bt">
        <img className="img-btn-pt1" alt="regresar" src={img_butom} />
        <button className="regresar">Ir a ventana anterior</button>
      </div>
      
      <div className="clinicas">
        <div className="cont-img">
          <img className="img-proforma" alt="proforma" src={img_proforma} />
        </div>

        <div className="cont-cli">
          <h2 className="cli-title">Alicorp</h2>
          <h3 className="cli-ruc">RUC 2045679801</h3>
          <div className="cont-cli-img">
            <img
              className="img-calendario"
              alt="proforma"
              src={img_calendario}
            />
            <h3 className="cli-fecha">Fecha de creación: 14/02/2023</h3>
          </div>
        </div>
      </div>
    </article>
  );
}

export default parte_1;
