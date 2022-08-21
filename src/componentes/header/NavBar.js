import logo from "../../assets/logo__large_plus.png";
import nav from "../../assets/nav.jpg";
import carrito from "../../assets/carrito-de-compras.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="header-container">
      <div className="nav-container header-nav">
        <div className="nav-logo">
          <a href="index.html">
            <img className="nav-logo-img" src={logo} alt="" />
          </a>
        </div>
        <form className="nav-search">
          <input
            type="search"
            className="input-search"
            placeholder="Buscar productos, marcas y mas..."
          />
        </form>
        <div className="nav-banner">
          <a href="index.html">
            <img className="nav-banner-img" src={nav} alt="" />
          </a>
        </div>
      </div>
      <div className="nav-bot-container header-nav">
        <a className="nav-bot-send" href="">
          <span> Enviar a</span>
          <span> Capital Federal</span>
        </a>
        <div className="nav-bot-item">
          <a href="">Categorias</a>
          <a href="">Ofertas</a>
          <a href="">Historial</a>

          <a href="">Vender</a>
          <a href="">Ayuda</a>
        </div>
        <nav className="nav-bot-menu">
          <a href="">Crea tu cuenta</a>
          <a href="">Ingresa</a>
          <a href="">Mis compras</a>
          <a id="open-modal" href="">
            <img className="nav-bot-menu-carrito" src={carrito} alt="" />
            <span id="contador-carrito">0</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
