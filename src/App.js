import React, { useEffect, useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Products from "./components/Products";
import jsonData from "./data/products-list.json";

function App() {
  const [products, setProducts] = useState(jsonData);

  return (
    <div className="h-full bg-slate-950">
      <Navbar />
      <div className="flex ">
        <Filter />
        <Products products={products} />
      </div>
    </div>
  );
}

export default App;
