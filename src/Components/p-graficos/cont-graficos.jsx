import { useState } from "react";
import React from "react";
import reporte from "../../assets/img/image7.png";
import Bartchart_1 from "../p-graficos/grafico-1.jsx";
import Bartchart_2 from "../p-graficos/grafico-2.jsx";

import "../p-graficos/cont-graficos.css";

function Estadistica1() {
  return (
    <article className="container">
      <section className="cont-header">
        <div className="montos">
          <div className="monto-1">Monto proyectado S/. 15000.00</div>
          <div className="monto-2">Monto Facturado S/. 17500.00</div>
        </div>

        <div className="reporte">
          <img className="re-img" alt="reporte" src={reporte}></img>
          <h3 className="re-text">Reporte</h3>
        </div>
      </section>
      <section className="cont-estadisticas">
        <div className="estadistica1">
          <h3 className="est1-title">Monto (S/.)</h3>
          <div className="bart1">
            <Bartchart_1></Bartchart_1>
          </div>
        </div>
        <div className="estadistica2">
          <h3 className="est2-title">Porcentaje (%)</h3>
          <div className="bart2">
            <Bartchart_2></Bartchart_2>
          </div>
        </div>
      </section>
    </article>
  );
}
export default Estadistica1;
