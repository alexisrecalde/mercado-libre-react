import React, { useContext } from "react";
import { CartContext } from "../../../context/CarritoContext";
import CarritoItem from "./CarritoItem";
import CarritoTotal from "./CarritoTotal";
import "./style.css";

const CarritoContainer = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="carrito-container">
      <h2>Carrito ({cart.length})</h2>
      <hr />
      {cart.map((item) => (
        <CarritoItem key={item.id} item={item} />
      ))}
      <CarritoTotal />
    </div>
  );
};

export default CarritoContainer;
