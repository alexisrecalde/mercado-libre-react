import "./NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="header-container">
      <div className="nav-container header-nav">
        <div className="nav-logo">
          <Link to="/">
            <img
              className="nav-logo-img"
              src="../../assets/logo__large_plus.png"
              alt=""
            />
          </Link>
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
            <img className="nav-banner-img" src="../../assets/nav.jpg" alt="" />
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
            <CartWidget />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
