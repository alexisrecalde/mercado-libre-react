import React, { useState } from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "../../../context/CarritoContext";
import { addDoc, collection } from "firebase/firestore/lite";
import { db } from "../../../firebase/config";

const Checkout = () => {
  const { cart, carritoTotal, terminarCompra } = useContext(CartContext);
  const [ordenId, setordenId] = useState(null);

  const [values, setValues] = useState({
    nombre: "",
    email: "",
    direccion: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const ordenCompra = {
      comprador: values,
      items: cart,
      total: carritoTotal(),
    };

    const ordenesReferencia = collection(db, "ordenes");
    addDoc(ordenesReferencia, ordenCompra).then((doc) => {
      setordenId(doc.id);
      terminarCompra();
    });
  };

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  if (ordenId) {
    return (
      <div>
        <h2>Tu compra se ha procesado</h2>
        <hr />
        <h4>Tu orden de compra es : {ordenId}</h4>
      </div>
    );
  }

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h2>Agrega tus datos</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          name="nombre"
          value={values.nombre}
          type={"text"}
          className=""
          placeholder="Nombre y apellido"
        />
        <input
          onChange={handleInputChange}
          name="direccion"
          value={values.direccion}
          type={"text"}
          className=""
          placeholder="Direccion"
        />
        <input
          onChange={handleInputChange}
          name="email"
          value={values.email}
          type={"email"}
          className=""
          placeholder="Correo"
        />

        <button type="submit">Continuar</button>
      </form>
    </div>
  );
};

export default Checkout;
