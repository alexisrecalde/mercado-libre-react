import MultiActionAreaCard from "../cards/MultiActionAreaCard";
import React, { useState, useEffect } from "react";
import { fetchOptions } from "../keys";
import style from "./style.css";

const ItemListContainer = () => {
  let [productosarray, setProductosArray] = useState([]);
  let [preciosarray, setPreciosArray] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("https://api.stripe.com/v1/products", fetchOptions),
      fetch("https://api.stripe.com/v1/prices", fetchOptions),
    ])
      .then((responses) => {
        return Promise.all(responses.map((resp) => resp.json()));
      })
      .then((json) => {
        setProductosArray(json[0].data);
        setPreciosArray(json[1].data);
      });
  }, []);
  console.log(productosarray, preciosarray);
  return (
    productosarray && (
      <div className="productos-card-container">
        {productosarray.map((producto) => {
          return <MultiActionAreaCard producto={producto} key={producto.id} />;
        })}
      </div>
    )
  );
};

export default ItemListContainer;
