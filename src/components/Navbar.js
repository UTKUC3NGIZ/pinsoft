import React, { useEffect, useState } from "react";
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

  const [uniqueProducts, setUniqueProducts] = useState([]);

  useEffect(() => {
    const uniqueProductSet = new Set(props.basket);
    const uniqueProductArray = Array.from(uniqueProductSet);
    setUniqueProducts(uniqueProductArray);
  }, [props.basket]);

  const countById = props.basket.reduce((acc, product) => {
    if (acc[product.id]) {
      acc[product.id] += 1;
    } else {
      acc[product.id] = 1;
    }
    return acc;
  }, {});

  const newData = [...props.basket];
  const deneme = (item) => {
    for (let i = 0; i < newData.length; i++) {
      if (newData[i].id === item) {
        newData.splice(i, 1);
        break;
      }
    }
    props.setBasket(newData);
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
        <div className="relative flex flex-col z-10">
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
            {uniqueProducts.map((product) => (
              <div className="flex flex-row mt-4  border-2  " key={product.id}>
                <img
                  src={product.image}
                  alt=""
                  className="w-32 aspect-auto pr-5 "
                />
                <div className=" flex flex-col text-black">
                  <h6 className="w-40">{product.title}</h6>

                  <span>Adet: {countById[product.id]}</span>

                  <span>Fiyat: {product.price}</span>
                </div>
                <div className="flex items-center border-l-2 px-1">
                  <span onClick={() => deneme(product.id)}>
                    <AiOutlineClose />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
