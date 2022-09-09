import "./App.css";
import ItemListContainer from "./componentes/items/ItemListContainer";
import NavBar from "./componentes/header/NavBar.js";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DetalleProducto from "./componentes/producto/DetalleProducto";
import SliderMain from "./componentes/slider/SliderMain";
import MetodosDePagoContainer from "./componentes/main/metodos de pago/MetodosDePagoContainer";

function App() {
  return (
    <BrowserRouter className="App">
      <NavBar />
      <SliderMain />
      <MetodosDePagoContainer />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
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
