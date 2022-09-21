import { createContext, useState, useEffect } from "react";
import React from "react";

export const CartContext = createContext();

export const CarritoContextProvide = ({ children }) => {
  const ls = JSON.parse(localStorage.getItem("carrito")) || [];
  const [cart, setCart] = useState(ls);

  const actualizarEstadoCarrito = (item) => {
    setCart([...cart, item]);
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

  const eliminarProducto = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => {
    return setCart([]);
  };

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        actualizarEstadoCarrito,
        productoEnCarrito,
        setCart,
        carritoCantidad,
        carritoTotal,
        vaciarCarrito,
        eliminarProducto,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
