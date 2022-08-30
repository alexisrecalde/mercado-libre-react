import "./App.css";
import ItemListContainer from "./componentes/header/ItemListContainer";
import NavBar from "./componentes/header/NavBar.js";
import ItemCount from "./componentes/items/ItemCount";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer usuario="Alexis" />
      <ItemCount />
    </div>
  );
}

export default App;
