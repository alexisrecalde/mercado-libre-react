import React from "react";
import { useState } from "react";

const ItemCount = () => {
  let [count, setCount] = useState(0);

  const siguiente = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <div>
      <button onClick={siguiente}>-</button>
      <p>Agregar al carrito</p>
      <button onClick={siguiente}>+</button>
    </div>
  );
};

export default ItemCount;
