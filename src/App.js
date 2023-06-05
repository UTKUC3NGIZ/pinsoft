import React, { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Products from "./components/Products";
import jsonData from "./data/products-list.json";

function App() {
  const [products, setProducts] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState([]);
  const [filteredData, setFilteredData] = useState(products);
  const [basket, setBasket] = useState([]);

  return (
    <div className="h-full bg-white">
      <Navbar
        products={products}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
        basket={basket}
        setBasket={setBasket}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className="flex lg:flex-row flex-col ">
        <Filter products={products} setFilter={setFilter} filter={filter} />
        <Products
          products={products}
          filter={filter}
          filteredData={filteredData}
          setBasket={setBasket}
          basket={basket}
          searchTerm={searchTerm}
        />
      </div>
    </div>
  );
}

export default App;
