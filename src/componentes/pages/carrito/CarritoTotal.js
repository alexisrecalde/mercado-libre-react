import React, { useContext } from "react";
import { CartContext } from "../../../context/CarritoContext";
import "./style.css";

const CarritoTotal = () => {
  const { carritoTotal } = useContext(CartContext);
  return (
    <div>
      <div className="carrito-total">
        <h2>Total con envio: ${carritoTotal()}</h2>
      </div>
    </div>
  );
};

export default CarritoTotal;
