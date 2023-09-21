// import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./lista-detalle-solicitud.css";
import Parte_1 from "./parte-1.jsx";
import Parte_2 from "./parte-2.jsx";
import Estadistica1 from "./estadistica-1.jsx";
import Card from "./lista-proforma.jsx";
// import Data_proforma from "./conponentes/data_proforma";

import iconPDF from "./assets/img/icon-pdf.jpeg";
import spaceFolderImage from "./assets/img/space-folder.jpeg";
import updateBottom from "./assets/img/icon-update.jpeg";
import iconFolder from "./assets/img/folder-open.jpeg";

import React, { useState } from "react";

const cartillas = [
  {
    id: "1",
    codigoProforma: "#79377432907",
    solicitud: "Trabajador",
    nombre: "Trabajo en altura",
    descargarProforma: "Descargar",
    cantidadSolicitud: "500",
    modalidad: "Crédito",
    periodoFacturacion: "#15",
    diasCredito: "60",
  },
  {
    id: "2",
    codigoProforma: "#12345678901",
    solicitud: "Ventas",
    nombre: "Venta de productos",
    descargarProforma: "Descargar",
    cantidadSolicitud: "1000",
    modalidad: "Contado",
    periodoFacturacion: "#20",
    diasCredito: "N/A",
  },
  {
    id: "3",
    codigoProforma: "#98765432109",
    solicitud: "Recursos Humanos",
    nombre: "Contratación de personal",
    descargarProforma: "Descargar",
    cantidadSolicitud: "300",
    modalidad: "Crédito",
    periodoFacturacion: "#10",
    diasCredito: "45",
  },
  {
    id: "4",
    codigoProforma: "#56789012345",
    solicitud: "Marketing",
    nombre: "Campaña publicitaria",
    descargarProforma: "Descargar",
    cantidadSolicitud: "800",
    modalidad: "Contado",
    periodoFacturacion: "#30",
    diasCredito: "N/A",
  },
];

export function Proforma() {
  // const [count, setCount] = useState(0);
  const articlesCount = cartillas.length;

  const [selectedProforma, setSelectProforma] = useState(null);

  const handleProformaClick = (proformaId) => {
    setSelectProforma(proformaId); // Cuando se hace clic en una proforma, actualiza el estado selectedProforma
  };

  const selectedProformaData = selectedProforma
    ? cartillas.find((item) => item.id === selectedProforma)
    : null;

  return (
    <div className="Container-master">
      <div className="container-jn-1">
        <Parte_1 />

        <div>
          <div className="conteiner-base">
            <div className="header-conteiner">
              <p className="name-list">Lista de proformas</p>
              <button type="button" className="update">
                <img src={updateBottom} alt="" className="icon-update" />
                Actualizar
              </button>
            </div>

            <div className="conteiner-scroll">
              {/* CARD-Details */}
              {/* Itera sobre las proformas y las muestra al hacer click */}
              <main className="main">
                <div className="article-conteiner">
                  {cartillas.map((item) => (
                    <article
                      key={item.id}
                      onClick={() => handleProformaClick(item.id)}
                    >
                      <Card
                        id={item.id}
                        codigoProforma={item.codigoProforma}
                        solicitud={item.solicitud}
                      />
                    </article>
                  ))}

                  <div
                    className={`space-conteiner ${
                      articlesCount > 4 ? "hidden" : ""
                    }`}
                  >
                    <img
                      src={spaceFolderImage}
                      alt="nothing~"
                      className="image-space"
                    ></img>
                    <p>Lista de proformas</p>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
      <div className="container-jn-2">
        <Parte_2></Parte_2>
        <h3 className="inc-sl">Inicio de la solicitud</h3>
        <Estadistica1></Estadistica1>
        <h3 className="inc-sl">Linea de tiempo del consumo del servicio</h3>
        <div>
          {/* Avanze Chris */}

          <div className="conteiner-base-chris">
            <div className="header-conteiner-base">
              <div className="conteiner-profor">
                <div className="icon-folder">
                  <button type="buttom">
                    <img src={iconFolder} alt="" className="icon-folder-open" />
                  </button>
                </div>
                <ul>
                  <li>
                    Proforma{" "}
                    {selectedProformaData
                      ? selectedProformaData.codigoProforma
                      : ""}
                  </li>
                  <li>
                    {selectedProformaData ? selectedProformaData.solicitud : ""}
                  </li>
                </ul>
              </div>

              <div>
                <p>Fecha:</p>
                <p></p>
              </div>
            </div>

            <div className="proformaDetails">
              {/* detalles de la proforma */}
              {selectedProformaData && (
                <div>
                  <h3>Detalle de la Solicitud</h3>
                  <main>
                    <article>
                      <p >Solicitud:</p>
                      <input
                        className="entry-up input"
                        type="text"
                        value={
                          selectedProformaData
                            ? selectedProformaData.solicitud
                            : ""
                        }
                        readOnly
                      />
                      <p>Nombre:</p>
                      <input
                        type="text"
                        value={
                          selectedProformaData
                            ? selectedProformaData.nombre
                            : ""
                        }
                        className="input"
                        readOnly
                      />
                    </article>

                    <article>
                      <p>Código de proforma</p>
                      <input
                        className="entry-up input"
                        type="text"
                        value={
                          selectedProformaData
                            ? selectedProformaData.codigoProforma
                            : ""
                        }
                        readOnly
                      />
                      <p>Proforma aceptada:</p>
                      {/* <input type="text" value={selectedProformaData ? selectedProformaData.descargarProforma : ''} className='input' readOnly /> */}
                      <div className="input btnClick_pdf">
                        <span>
                          {selectedProformaData
                            ? selectedProformaData.descargarProforma
                            : ""}
                        </span>
                        <button type="button">
                          <img src={iconPDF} alt="" className="imgPdf" />
                        </button>
                      </div>
                    </article>

                    <article>
                      <p>Cantidad de Solicitud:</p>
                      <input
                        className="entry-up input"
                        type="text"
                        value={
                          selectedProformaData
                            ? selectedProformaData.cantidadSolicitud
                            : ""
                        }
                        readOnly
                      />
                      <p>Modalidad:</p>
                      <input
                        type="text"
                        value={
                          selectedProformaData
                            ? selectedProformaData.modalidad
                            : ""
                        }
                        className="input"
                        readOnly
                      />
                    </article>

                    <article>
                      <p>Periodo de Facturación:</p>
                      <input
                        className="entry-up input"
                        type="text"
                        value={
                          selectedProformaData
                            ? selectedProformaData.periodoFacturacion
                            : ""
                        }
                        readOnly
                      />
                      <p>Días de Crédito:</p>
                      <input
                        type="text"
                        value={
                          selectedProformaData
                            ? selectedProformaData.diasCredito
                            : ""
                        }
                        className="input"
                        readOnly
                      />
                    </article>
                  </main>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proforma;
