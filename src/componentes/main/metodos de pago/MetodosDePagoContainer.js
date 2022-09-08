import React from "react";
import style from "./style.css";
import ItemMetodosDePago from "./items/ItemMetodosDePago";

const MetodosDePagoContainer = () => {
  return (
    <div className="payment-methods-container">
      <ItemMetodosDePago />
    </div>
  );
};

export default MetodosDePagoContainer;
