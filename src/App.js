import React, { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Products from "./components/Products";
import jsonData from "./data/products-list.json";

function App() {
  const [products, setProducts] = useState(jsonData);
  const [filter, setFilter] = useState([]);
  const [filteredData, setFilteredData] = useState(products);
  
  return (
    <div className="h-full bg-slate-950">
      <Navbar
        products={products}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />
      <div className="flex ">
        <Filter products={products} setFilter={setFilter} filter={filter} />
        <Products
          products={products}
          filter={filter}
          filteredData={filteredData}
        />
      </div>
    </div>
  );
}

export default App;
