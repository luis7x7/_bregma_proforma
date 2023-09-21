import { useState } from "react";
import "../p-lista-proforma/card.css";

function Switch(props) {
  const { isSelected, onClick } = props;
  const cont_swt = isSelected ? "const-sw isSelected" : "const-sw";
  const swt_br = isSelected ? "switch-br isSelected" : "switch-br";
  const swt = isSelected ? "switch isSelected" : "switch";
  
  
   
    
  

  return (
    <div className={cont_swt} onClick={onClick}>
      <span className={swt_br}>
        <span className={swt}></span>
      </span>
    </div>
  );
}
export default Switch;
