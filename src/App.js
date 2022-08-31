import "./App.css";
import ItemListContainer from "./componentes/items/ItemListContainer";
import NavBar from "./componentes/header/NavBar.js";
import ItemCount from "./componentes/items/ItemCount";
import MultiActionAreaCard from "./componentes/items/MultiActionAreaCard";
import { ListItem } from "@mui/material";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
