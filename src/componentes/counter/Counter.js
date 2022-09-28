import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Counter = ({ stock, count, setCount, agregarACarrito }) => {
  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  useEffect(() => {}, [count]);

  return (
    <div className=" detalle-producto-chekout">
      <p>Stock Disponible</p>
      <div className="counter-container">
        <button
          className={`btnCounter btn-restar ${
            count === 0 ? "btn-disable" : "btnCounter btn-restar"
          }`}
          onClick={restar}
        >
          -
        </button>

        <p>{count > stock ? <h4>superaste la cantidad maxima</h4> : count}</p>

        <button
          className={`btnCounter  btn-sumar ${
            count === stock ? "btn-disable" : "btnCounter  btn-sumar"
          }`}
          onClick={sumar}
        >
          +
        </button>
      </div>
      <div className="btn-container-counter">
        <Link to="/checkout">
          <button className="btn-comprar">Comprar Ahora</button>
        </Link>
        <button
          onClick={agregarACarrito}
          className={`btn-carrito ${
            count === 0 || count === stock ? "btn-disable" : "btn-carrito"
          }`}
        >
          Agregar Al carrito
        </button>
      </div>
    </div>
  );
};

export default Counter;
