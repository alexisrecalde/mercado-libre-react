import MultiActionAreaCard from "../../../cards/MultiActionAreaCard";

import "./style.css";

// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

const Productos = ({ productosarray }) => {
  return (
    productosarray && (
      <div className="productos-card-container-grid">
        {productosarray.map((producto) => {
          return <MultiActionAreaCard producto={producto} key={producto.id} />;
        })}
      </div>
    )
  );
};

export default Productos;
