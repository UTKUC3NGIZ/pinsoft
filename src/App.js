import "./App.css";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Products from "./components/Products";
function App() {
  return (
    <div className="h-screen bg-slate-950">
      <Navbar />
      <Filter />
      {/* <Products /> */}
    </div>
  );
}

export default App;
