import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { fetchOptions } from "../keys";
import style from "./style.css";
import { useParams } from "react-router-dom";
import Counter from "../counter/Counter";
import { CartContext } from "../../context/CartContext";

const DetalleProducto = () => {
  const { cart, actualizarEstadoCarrito, productoEnCarrito, setCart } =
    useContext(CartContext);
  console.log(cart);

  let { productoID } = useParams();
  const [detalleProducto, setdetalleProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  let stock = 10;

  const agregarACarrito = () => {
    const itemCarrito = {
      id: detalleProducto.id,
      description: detalleProducto.description,
      name: detalleProducto.name,
      images: detalleProducto.images[0],
      cantidad,
      stock,
    };
    //si el elemento no existe, pushea el item
    if (!productoEnCarrito(itemCarrito.id)) {
      actualizarEstadoCarrito(itemCarrito);
    } else {
      //si existe, aumenta la cantidad
      cart.forEach((el) => {
        if (el.id === itemCarrito.id) {
          el.cantidad += itemCarrito.cantidad;
        }
      });
    }
  };

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
        <Counter
          stock={stock}
          count={cantidad}
          setCount={setCantidad}
          agregarACarrito={agregarACarrito}
        />
      </div>
    )
  );
};

export default DetalleProducto;
