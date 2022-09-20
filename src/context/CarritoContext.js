import { createContext, useState } from "react";
import React from "react";

export const CartContext = createContext();

export const CarritoContextProvide = ({ children }) => {
  const [cart, setCart] = useState([]);

  const actualizarEstadoCarrito = (item) => {
    setCart([...cart, item]);
    console.log(cart.cantidad);
  };

  const productoEnCarrito = (id) => {
    return cart.some((producto) => producto.id === id);
  };

  const carritoCantidad = () => {
    return cart.length;
  };

  const carritoTotal = () => {
    let total = 0;
    let cantidad = 0;

    cart.forEach((e) => {
      cantidad += e.cantidad;
    });
    total = cantidad * 10000;
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        actualizarEstadoCarrito,
        productoEnCarrito,
        setCart,
        carritoCantidad,
        carritoTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
