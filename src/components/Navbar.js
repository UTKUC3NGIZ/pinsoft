import React, { useState } from "react";
import { BsSearch, BsBasket } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
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
        <div className="relative flex flex-col">
          <div>
            <BsBasket className="text-3xl text-white " />
            <span className="absolute text-sm  -left-4 -top-4 border border-slate-600 text-white rounded-full w-6 h-6 flex justify-center items-center">
              {props.basket.length}
            </span>
          </div>
          <div className="flex flex-col border p-4 bg-white absolute right-0 top-10 w-max">
            <h5 className="text-black text-xl">
              Sepetim - {props.basket.length} Ürün
            </h5>
            <div className="flex flex-row mt-4  border-2  ">
              <img
                src="https://offautan-uc1.azureedge.net/-/media/images/off/ph/products-en/products-landing/landing/off_softscented_product_collections_large_2x.jpg?la=en-ph"
                alt=""
                className="w-32 aspect-auto pr-5 "
              />
              <div className=" flex flex-col text-black">
                <h6 className="w-40">
                  Rain Jacket Women Windbreaker Striped Climbing Raincoats
                </h6>

                <span>Adet: 2</span>

                <span>Fiyat: 196$</span>
              </div>
              <div className="flex items-center border-l-2 px-1">
                <span>
                  <AiOutlineClose />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
