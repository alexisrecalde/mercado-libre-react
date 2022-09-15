import React, { useEffect, useState } from "react";
import Style from "./style.css";

const Counter = ({ stock, count, setCount }) => {
  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
      console.log(count);
    }
  };

  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
      console.log(count);
    }
  };
  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div className=" detalle-producto-chekout">
      <p>Stock Disponible</p>
      <div className="counter-container">
        <button className="btn btn-restar" onClick={restar}>
          -
        </button>

        <p>{count > stock ? <h4>superaste la cantidad maxima</h4> : count}</p>

        <button className="btn " onClick={sumar}>
          +
        </button>
      </div>
      <div className="btn-container">
        <button className="btn-comprar">Comprar Ahora</button>
        <button className="btn-carrito">Agregar Al carrito</button>
      </div>
    </div>
  );
};

export default Counter;
