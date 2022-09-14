import React from "react";
import { Link } from "react-router-dom";
import style from "./style.css";

const Categorias = () => {
  const categorias = ["Deporte", "Celulares", "Computacion", "Electronica"];
  return (
    <div>
      <div className="categoria-item">
        <h4>Todas</h4>
        <p>20 productos</p>
      </div>
      <div className="categoria-item">
        <h4>Tipo de oferta</h4>
        <Link to="/ofertas" className="categorias">
          Oferta del día
        </Link>
        <Link to="/ofertas" className="categorias">
          Oferta relámpago
        </Link>
      </div>
      <div className="categoria-items">
        <h4>Categorias</h4>
        <Link className="categorias" to="/ofertas/deporte">
          Deporte
        </Link>
        <Link className="categorias" to="/ofertas/celulares">
          Celulares
        </Link>
        <Link className="categorias" to="/ofertas/computacion">
          Computacion
        </Link>
        <Link className="categorias" to="/ofertas/electronica">
          Electronica
        </Link>
      </div>
    </div>
  );
};

export default Categorias;
