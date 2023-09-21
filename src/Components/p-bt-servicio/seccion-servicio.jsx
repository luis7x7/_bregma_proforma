import { useState } from "react";
import Switch from "../p-bt-servicio/botones.jsx";
import "../p-bt-servicio/p-bt-servicio.css";

import img_calendario from "../../assets/img/image5.png";

function parte_2() {


  const [isSwitch1Selected, setIsSwitch1Selected] = useState(true);
  const [isSwitch2Selected, setIsSwitch2Selected] = useState(false);

  const handleSwitch1Click = () => {
    setIsSwitch1Selected(!isSwitch1Selected);
    setIsSwitch2Selected(!isSwitch2Selected); // Cambia el estado del segundo interruptor al hacer clic en el primero
  };

  const handleSwitch2Click = () => {
    setIsSwitch2Selected(!isSwitch2Selected);
    setIsSwitch1Selected(!isSwitch1Selected); // Cambia el estado del primer interruptor al hacer clic en el segundo
  };
  return (
    <article className="pf-pt2">
      <div className="pf-pt2-fecha">
        <h3 className="fecha">Fecha de inicio de la facturación </h3>
        <img className="img-btn" alt="calendario" src={img_calendario} />
      </div>
      <div className="servicios">
        <h3 className="serv-off">Finalizar servicio</h3>
        <Switch isSelected={isSwitch1Selected} onClick={handleSwitch1Click} />

        <h3 className="serv-on">Iniciar servicio</h3>
        <Switch isSelected={isSwitch2Selected} onClick={handleSwitch2Click} />
      </div>
    </article>
  );
}

export default parte_2;
