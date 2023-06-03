import React from "react";
import { BsSearch, BsBasket } from "react-icons/bs";
function Navbar() {
  return (
    <>
      <div className="w-full flex justify-between items-center   border-b-2 p-8  border-white ">
        <div className="relative flex items-center justify-start">
          <input
            type="search"
            placeholder="Search"
            className="h-12 border-2 border-white text-white placeholder:text-slate-600 rounded-xl  text-2xl pl-8 outline-none bg-slate-900 "
          />
          <BsSearch className="absolute left-2 text-xl text-slate-600 " />
        </div>
        <div className="relative flex">
          <BsBasket className="text-3xl text-white " />
          <span className="absolute text-sm  -left-4 -top-4 border border-slate-600 text-white rounded-full w-6 h-6 flex justify-center items-center">
            12
          </span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
