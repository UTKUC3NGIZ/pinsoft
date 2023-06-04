import "./App.css";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Products from "./components/Products";
function App() {
  return (
    <div className="h-full bg-slate-950">
      <Navbar />
      <div className="flex ">
        <Filter />
        <Products />
      </div>
    </div>
  );
}

export default App;
