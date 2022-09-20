import React, { useContext } from "react";
import { CartContext } from "../../../context/CarritoContext";

const CarritoItem = ({ item }) => {
  const { eliminarProducto } = useContext(CartContext);
  return (
    <div className="carrito-item-container">
      <div key={item.id} className="carrito-item">
        <div className="carrito-img">
          <img src={item.images} alt="" />
        </div>
        <div className="carrito-name">
          <h3>
            {item.name} ({item.cantidad})
          </h3>
          <h4 className="carrito-envio">Envío gratis</h4>
        </div>
        <div className="carrito-precio">
          <h3>$ 10000</h3>
        </div>
      </div>
      <div className="carrito-btn-container">
        <button
          onClick={() => eliminarProducto(item.id)}
          className="carrito-btn-eliminar"
        >
          Eliminar
        </button>

        <a href="">Comprar Ahora</a>
      </div>
    </div>
  );
};

export default CarritoItem;
