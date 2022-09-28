import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CarritoContext";

const BtnCarrito = () => {
  const { vaciarCarrito } = useContext(CartContext);
  return (
    <div className="btn-container">
      <button onClick={vaciarCarrito} className="btn-carritoPage">
        Vaciar Carrito
      </button>
      <Link to="/ofertas">
        <button className="btn-carritoPage">Seguir Comprando</button>
      </Link>
      <Link to="/checkout">
        <button className="btn-carritoPage">Terminar Compra</button>
      </Link>
    </div>
  );
};

export default BtnCarrito;
