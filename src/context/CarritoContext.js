import { Children, createContext, useState } from "react";
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
    console.log(cart.length);
    return cart.length;
  };

  carritoCantidad();

  return (
    <CartContext.Provider
      value={{
        cart,
        actualizarEstadoCarrito,
        productoEnCarrito,
        setCart,
        carritoCantidad,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
