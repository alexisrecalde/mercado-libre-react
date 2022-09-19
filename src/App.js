import "./App.css";
import { useState } from "react";
import NavBar from "./componentes/header/NavBar.js";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetalleProducto from "./componentes/producto/DetalleProducto";
import Home from "./componentes/pages/home/Home";
import OfertasContainer from "./componentes/pages/ofertas/OfertasContainer";
import { CarritoContextProvide } from "./context/CarritoContext";
import Carrito from "./componentes/pages/carrito/Carrito";

function App() {
  return (
    <CarritoContextProvide>
      <BrowserRouter className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto/:productoID" element={<DetalleProducto />} />
          <Route path="/ofertas" element={<OfertasContainer />} />
          <Route path="/ofertas/:categoriaId" element={<OfertasContainer />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
        <br />
        <br />
        <br />
        <br />
        <br />
      </BrowserRouter>
    </CarritoContextProvide>
  );
}

export default App;
