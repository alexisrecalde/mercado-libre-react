import { useContext } from "react";
import { CartContext } from "../../context/CarritoContext";

const CartWidget = () => {
  const { carritoCantidad } = useContext(CartContext);
  return (
    <div className="div-carrito">
      <img
        className="nav-bot-menu-carrito"
        src="/assets/carrito-de-compras.png"
        alt=""
      />
      <span id="contador-carrito">{carritoCantidad()}</span>
    </div>
  );
};

export default CartWidget;
