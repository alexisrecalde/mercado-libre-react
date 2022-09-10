import React from "react";
import ItemListContainer from "../items/ItemListContainer";
import MetodosDePagoContainer from "../main/metodos de pago/MetodosDePagoContainer";
import SliderMain from "../slider/SliderMain";

const Home = () => {
  return (
    <div>
      <SliderMain />
      <MetodosDePagoContainer />
      <ItemListContainer />
    </div>
  );
};

export default Home;
