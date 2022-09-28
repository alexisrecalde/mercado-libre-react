import "./App.css";
import { useState } from "react";
import NavBar from "./componentes/header/NavBar.js";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetalleProducto from "./componentes/producto/DetalleProducto";
import Home from "./componentes/pages/home/Home";
import OfertasContainer from "./componentes/pages/ofertas/OfertasContainer";
import { CarritoContextProvide } from "./context/CarritoContext";
import CarritoContainer from "./componentes/pages/carrito/CarritoContainer";
import Checkout from "./componentes/pages/checkout/Checkout";

function App() {
  return (
    <CarritoContextProvide>
      <BrowserRouter className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto/:productoID" element={<DetalleProducto />} />
          <Route path="/ofertas" element={<OfertasContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/ofertas/:categoriaId" element={<OfertasContainer />} />
          <Route path="/carrito" element={<CarritoContainer />} />
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
