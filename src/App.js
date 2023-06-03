import "./App.css";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Products from "./components/Products";
function App() {
  return (
    <div>
      <Navbar />
      <Filter />
      <Products />
    </div>
  );
}

export default App;
