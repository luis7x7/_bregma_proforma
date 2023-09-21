import React from "react";
import iconFolder from "./assets/img/folder-open.jpeg";
import iconOptions from "./assets/img/icon-options.jpeg";

import "./lista-detalle-solicitud.css";

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show-menu");
}

export function Card({ id, codigoProforma, solicitud }) {
  return (
    <div className="conteiner-details">
      <div className="conteiner-solicitud">
        <div className="icon-folder">
          <button type="buttom">
            <img src={iconFolder} alt="" className="icon-folder-open" />
          </button>
        </div>

        <ul>
          <li>Proforma {codigoProforma}</li>
          <li>{solicitud}</li>
        </ul>
      </div>

      <div className="options-details">
        <img
          src={iconOptions}
          alt=""
          className="iconOptions"
          onClick={toggleMenu}
        />
        <ul className="options-menu" id="menu">
          <li>Opción 1</li>
          <li>Opción 2</li>
          <li>Opción 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
