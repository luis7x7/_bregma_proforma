import { useState } from "react";

import "./App.css";
import Bt_carpeta from "./Components/navigation/Bt-carpeta";
import Proforma from "../src/Components/pages/Proforma.jsx";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Bt_carpeta />}></Route>
        <Route path="gestionclientes/proforma" element={<Proforma />}></Route>
      </Routes>
    </div>
  );
}

export default App;
