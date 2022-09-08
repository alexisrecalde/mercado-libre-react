import "./App.css";
import ItemListContainer from "./componentes/items/ItemListContainer";
import NavBar from "./componentes/header/NavBar.js";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DetalleProducto from "./componentes/producto/DetalleProducto";

function App() {
  return (
    <BrowserRouter className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/producto/:productoID" element={<DetalleProducto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
