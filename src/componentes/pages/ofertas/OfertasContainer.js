import Categorias from "./categorias/Categorias";
import Productos from "./productos/Productos";
import React, { useState, useEffect } from "react";
import style from "./style.css";
import { fetchOptions } from "../../keys";
import { useParams } from "react-router-dom";
const OfertasContainer = () => {
  let [productosarray, setProductosArray] = useState([]);
  let [preciosarray, setPreciosArray] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    Promise.all([
      fetch("https://api.stripe.com/v1/products?limit=100", fetchOptions),
      fetch("https://api.stripe.com/v1/prices", fetchOptions),
    ])
      .then((responses) => {
        return Promise.all(responses.map((resp) => resp.json()));
      })
      .then((json) => {
        if (!categoriaId) {
          setProductosArray(json[0].data);
          setPreciosArray(json[1].data);
        } else {
          setProductosArray(
            json[0].data.filter((el) => el.metadata.categoria === categoriaId)
          );
        }
      });
  }, [categoriaId]);
  console.log(productosarray);
  return (
    <div className="container">
      <Categorias />
      <Productos key={productosarray.id} productosarray={productosarray} />
    </div>
  );
};

export default OfertasContainer;
