import React from "react";

const CarritoItem = ({ item }) => {
  return (
    <div>
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
    </div>
  );
};

export default CarritoItem;
