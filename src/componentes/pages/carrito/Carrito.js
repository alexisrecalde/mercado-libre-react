import React, { useContext } from "react";
import { CartContext } from "../../../context/CarritoContext";
import CarritoItem from "./CarritoItem";
import "./style.css";

const Carrito = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="carrito-container">
      <h2>Carrito ({cart.length})</h2>
      <hr />
      {cart.map((item) => (
        <CarritoItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Carrito;
