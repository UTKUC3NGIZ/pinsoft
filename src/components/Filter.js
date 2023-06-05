import React, { useState } from "react";

function Filter(props) {
  const categories = [
    ...new Set(props.products.map((product) => product.category)),
  ];

  const categoryCounts = categories.reduce((counts, category) => {
    const categoryProducts = props.products.filter(
      (product) => product.category === category
    );
    counts[category] = categoryProducts.length;
    return counts;
  }, {});

  function Filter(e) {
    const updatedContent = e.target.textContent.slice(0, -1);
    const filteredProducts = props.products.filter(
      (product) => product.category === updatedContent
    );
    props.setFilter(filteredProducts);
  }

  return (
    <>
      <div className="flex lg:flex-col flex-row w-full lg:border-r-2 border-b-2 border-slate-200 font-custom text-slate-700 lg:w-1/6">
        <div
          className={`text-xl lg:p-8 lg:px-3 xl:pl-8  p-1 hover:bg-slate-100 flex  items-center group cursor-pointer flex-1 lg:flex-none lg:w-full  justify-center lg:justify-between `}
          onClick={Filter}
        >
          <h3 className=" pointer-events-none pr-2 lg:pr-0 text-xs lg:text-xl sm:text-base md:text-lg text-center">
            ALL PRODUCTS
          </h3>
          <span className=" border-b-2 border-slate-200 px-1 flex items-center justify-center  pointer-events-none group-hover:border-slate-300 text-xs lg:text-xl sm:text-base md:text-lg">
            {props.products.length}
          </span>
        </div>
        {categories.map((productCategory, index) => (
          <div
            key={index}
            className={`text-xl lg:p-8 lg:px-3 xl:pl-8  p-1 hover:bg-slate-100 flex  items-center group cursor-pointer flex-1 lg:flex-none lg:w-full  justify-center lg:justify-between`}
            onClick={Filter}
          >
            <h3 className=" pointer-events-none pr-2 lg:pr-0 text-xs lg:text-xl sm:text-base md:text-lg text-center">
              {productCategory}
            </h3>
            <span className=" border-b-2 border-slate-200 px-1 flex items-center justify-center  pointer-events-none group-hover:border-slate-300 text-xs lg:text-xl sm:text-base md:text-lg">
              {categoryCounts[productCategory]}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Filter;
