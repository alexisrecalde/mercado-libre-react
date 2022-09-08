import React from "react";
import { useEffect, useState } from "react";
import { fetchOptions } from "../keys";
import style from "./style.css";
import { useParams } from "react-router-dom";

const DetalleProducto = () => {
  let { productoID } = useParams();
  const [detalleProducto, setdetalleProducto] = useState(null);

  useEffect(() => {
    fetch(`https://api.stripe.com/v1/products/${productoID}`, fetchOptions)
      .then((resp) => {
        return resp.json();
      })
      .then((json) => {
        setdetalleProducto(json);
        console.log(detalleProducto);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    detalleProducto && (
      <div className="detalle-producto-container">
        <div className="detalle-producto-img">
          <img src={detalleProducto.images} alt="descripcion imagen" />
        </div>
        <div className="detalle-producto">
          <h2 className="detalle-producto-titulo">{detalleProducto.name}</h2>
          <div className="star-img">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-star"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-star"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-star"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-star"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-star"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
          <p className="detalle-producto-precio">$10000</p>
          <p className="detalle-producto-descripcion">
            {detalleProducto.description}
          </p>
        </div>
        <div className="detalle-producto-chekout">
          <p>Stock Disponible</p>
          <button className="btn-comprar">Comprar Ahora</button>
          <button className="btn-carrito">Agregar Al carrito</button>
        </div>
      </div>
    )
  );
};

export default DetalleProducto;
