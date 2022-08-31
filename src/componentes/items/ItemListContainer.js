import MultiActionAreaCard from "./MultiActionAreaCard";
import React, { useState, useEffect } from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = () => {
  const keys = {
    public:
      "pk_test_51Lb6M3Ax57dZOCglQxO1aYofdKcXw1BsbrkX5aRMrDEoGmFbEL6LhKuR6WyOtIx66PR98LGWjBUT8pqOAMvvqcNl00iFeSWjE1",
    secret:
      "sk_test_51Lb6M3Ax57dZOCglFiuFXrRLTrtcPj1lgVQVjdpNatCpfh0A62B7VdiGmje9YO6s2FStcVQbFMlMDbeejTiCUl3q004vTXfubK",
  };

  const fetchOptions = {
    headers: {
      Authorization: `Bearer ${keys.secret}`,
    },
  };

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
    <div>
      {productosarray.map((producto) => (
        <MultiActionAreaCard
          key={producto.id}
          nombre={producto.name}
          descripcion={producto.description}
          precio="$10000"
          img={producto.images}
        />
      ))}
    </div>
  );
};

export default ItemListContainer;
