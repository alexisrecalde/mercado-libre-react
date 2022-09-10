import "./App.css";
import ItemListContainer from "./componentes/items/ItemListContainer";
import NavBar from "./componentes/header/NavBar.js";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DetalleProducto from "./componentes/producto/DetalleProducto";
import SliderMain from "./componentes/slider/SliderMain";
import MetodosDePagoContainer from "./componentes/main/metodos de pago/MetodosDePagoContainer";
import Home from "./componentes/pages/Home";

function App() {
  return (
    <BrowserRouter className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto/:productoID" element={<DetalleProducto />} />
      </Routes>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </BrowserRouter>
  );
}

export default App;
