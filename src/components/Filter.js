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
      <div className="flex flex-col w-1/6 border-r-2 border-black">
        {categories.map((productCategory, index) => (
          <div
            key={index}
            className={`text-xl p-8 hover:bg-slate-300 flex justify-between items-center group cursor-pointer`}
            onClick={Filter}
          >
            <h3 className="text-black pointer-events-none">
              {productCategory}
            </h3>
            <span className="text-black border-b-2 border-slate-300 px-1 flex items-center justify-center text-base pointer-events-none group-hover:border-black">
              {categoryCounts[productCategory]}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Filter;
