const CartWidget = () => {
  return (
    <div className="div-carrito">
      <img
        className="nav-bot-menu-carrito"
        src="../../../public/assets/carrito-de-compras.png"
        alt=""
      />
      <span id="contador-carrito">0</span>
    </div>
  );
};

export default CartWidget;
