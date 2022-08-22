import "./App.css";
import ItemListContainer from "./componentes/header/ItemListContainer";
import NavBar from "./componentes/header/NavBar.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer usuario="Alexis" />
    </div>
  );
}

export default App;
