import React, { useEffect, useState } from "react";

const ItemCount = ({ stock }) => {
  let [count, setCount] = useState(0);

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
    <div>
      <button>Agregar al Carrito</button>
      <button onClick={restar}>-</button>
      <p>{count > stock ? <h4>superaste la cantidad maxima</h4> : count}</p>
      <button onClick={sumar}>+</button>
    </div>
  );
};

export default ItemCount;
