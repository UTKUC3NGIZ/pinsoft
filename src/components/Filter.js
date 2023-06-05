import React from "react";

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
      <div className="flex flex-col w-1/6 border-r-2 border-slate-200 font-custom text-slate-700">
        {categories.map((productCategory, index) => (
          <div
            key={index}
            className={`text-xl p-8 hover:bg-slate-100 flex justify-between items-center group cursor-pointer`}
            onClick={Filter}
          >
            <h3 className=" pointer-events-none ">
              {productCategory}
            </h3>
            <span className=" border-b-2 border-slate-200 px-1 flex items-center justify-center text-base pointer-events-none group-hover:border-slate-300">
              {categoryCounts[productCategory]}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Filter;
