import { useState } from "react";
import "../components/switch-css.css";
import classNames from "classnames";
function Switch() {
  const [isSelected, setIsSelected] = useState(true);

  const cont_swt = isSelected ? "const-sw isSelected" : "const-sw";
  const swt_br = isSelected ? "switch-br isSelected" : "switch-br";
  const swt = isSelected ? "switch isSelected" : "switch";

  const handleclick = () => setIsSelected(!isSelected);

  return (
    <div className={cont_swt} onClick={handleclick}>
      <span className={swt_br}>
        <span className={swt}></span>
      </span>
    </div>
  );
}
export default Switch;
