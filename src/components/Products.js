import React from "react";
import ReactStars from "react-rating-stars-component";

function Products(props) {
  let condition = true;

  if (props.filter.length === 0) {
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
      <div className="grid grid-cols-4 w-5/6 gap-10 m-8 ">
        {dataShow.map((product) => (
          <div
            className="flex flex-col justify-between rounded-md bg-white p-6"
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
              <h4 className="pt-6 border-b-2 border-black pb-3 text-center text-xl">
                {product.title}
              </h4>
              <span className="pt-3 text-center text-xl">
                {product.price} $
              </span>
              <div className="flex flex-col">
                <button
                  className=" border-2 border-black py-3 my-3 text-xl"
                  onClick={() => addBasket(product.id)}
                >
                  Add to cart
                </button>
                <div className="flex items-center z-0">
                  <ReactStars
                    count={5}
                    value={product.rating.rate}
                    size={28}
                    activeColor="#ffd700"
                    color="#000"
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
