import React from "react";
import ReactStars from "react-rating-stars-component";

function Products() {
  return (
    <>
      <div className="grid grid-cols-4 w-5/6 gap-10 m-8 ">
        <div className="flex flex-col bg-white p-6">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt=""
          />
          <h4 className="pt-6 border-b-2 border-black pb-3 text-center text-xl">
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </h4>
          <span className="pt-3 text-center text-xl">109.95 $</span>
          <div className="flex flex-col">
            <button className=" border-2 border-black py-3 my-3 text-xl">
              Add to cart
            </button>
            <div className="flex items-center">
              <ReactStars
                count={5}
                value={3.5}
                size={28}
                activeColor="#ffd700"
                color="#000"
                edit={false}
                isHalf={true}
              />
              <span className="text-sm">(124) </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
