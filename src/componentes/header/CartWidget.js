import carrito from "../../assets/carrito-de-compras.png";

const CartWidget = () => {
  return (
    <div className="div-carrito">
      <img className="nav-bot-menu-carrito" src={carrito} alt="" />
      <span id="contador-carrito">0</span>
    </div>
  );
};

export default CartWidget;
