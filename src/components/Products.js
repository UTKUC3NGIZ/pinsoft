import React from "react";
import ReactStars from "react-rating-stars-component";

function Products(props) {
  let condition = true;

  if (props.filter.length === 0) {
    condition = true;
  } else if (props.searchTerm.length > 0) {
    condition = true;
  } else {
    condition = false;
  }
  const dataShow = condition ? props.filteredData : props.filter;
  function addBasket(id) {
    const filteredProducts = props.products.filter((product) => {
      return product.id === id;
    });
    props.setBasket([...props.basket, filteredProducts[0]]);
  }
 
  return (
    <>
      <div className="xl:grid-cols-4 lg:w-5/6 lg:gap-10 lg:p-8 grid grid-cols-1 gap-2 p-2 md:grid-cols-3 sm:grid-cols-2  lg:grid-cols-3 bg-slate-100 font-custom text-slate-700">
        {dataShow.map((product) => (
          <div
            className="flex flex-col justify-between rounded-md bg-white p-6 border-2 border-slate-200 group"
            key={product.id}
          >
            <div className="h-full flex items-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-full aspect-auto"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="pt-6 border-b-2 border-slate-200 pb-3 text-center text-xl group-hover:border-slate-100">
                {product.title}
              </h4>
              <span className="pt-3 text-center text-xl">
                {product.price} $
              </span>
              <div className="flex flex-col">
                <button
                  className=" border-2 border-slate-200 py-3 my-3 text-xl group-hover:bg-slate-200"
                  onClick={() => addBasket(product.id)}
                >
                  Add to cart
                </button>
                <div className="flex items-center z-0">
                  <ReactStars
                    count={5}
                    value={product.rating.rate}
                    size={28}
                    activeColor="#334155"
                    color="#F0F5F9"
                    edit={false}
                    isHalf={true}
                  />
                  <span className="text-sm pl-1">({product.rating.count})</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
