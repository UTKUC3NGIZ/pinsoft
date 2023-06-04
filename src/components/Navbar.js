import React, { useState } from "react";
import { BsSearch, BsBasket } from "react-icons/bs";
function Navbar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    filterData(e.target.value);
  };

  const filterData = (searchValue) => {
    const filtered = Object.entries(props.products).reduce(
      (result, [key, value]) => {
        if (value.title.toLowerCase().includes(searchValue.toLowerCase())) {
          result[key] = value;
        }
        return result;
      },
      {}
    );
    if (searchTerm.length === -1) {
      props.setFilteredData(filtered);
    } else {
      props.setFilteredData(Object.values(filtered));
    }
  };

  return (
    <>
      <div className="w-full flex justify-between items-center   border-b-2 p-8  border-white ">
        <div className="relative flex items-center justify-start">
          <input
            type="search"
            placeholder="Search"
            className="h-12 border-2 border-white text-white placeholder:text-slate-600 rounded-xl  text-2xl pl-8 outline-none bg-slate-900 "
            value={searchTerm}
            onChange={handleSearch}
          />
          <BsSearch className="absolute left-2 text-xl text-slate-600 " />
        </div>
        <div className="relative flex">
          <BsBasket className="text-3xl text-white " />
          <span className="absolute text-sm  -left-4 -top-4 border border-slate-600 text-white rounded-full w-6 h-6 flex justify-center items-center">
            {props.basket.length}
          </span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
