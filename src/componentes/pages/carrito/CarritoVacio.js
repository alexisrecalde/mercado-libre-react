import React from "react";
import "./styleCarrito.css";
const CarritoVacio = () => {
  return (
    <div className="carrito-vacio">
      <h2>Tu carrito está vacío</h2>
      <h4>¿No sabés qué comprar? ¡Miles de productos te esperan!</h4>
    </div>
  );
};

export default CarritoVacio;
