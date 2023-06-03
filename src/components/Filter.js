import React from "react";

function Filter() {
  return (
    <>
      <div className="flex flex-col w-1/6 border-r-2">
        <div className="text-xl p-8 hover:bg-slate-900 flex justify-between items-center">
          <h3 className="text-white">jewelery</h3>
          <span className="text-white border-b-2  flex items-center justify-center text-base ">
            2
          </span>
        </div>
        <div className="text-xl p-8 hover:bg-slate-900 flex justify-between items-center ">
          <h3 className="text-white">jewelery</h3>
          <span className="text-white border-b-2  flex items-center justify-center text-base">
            2
          </span>
        </div>
        <div className="text-xl p-8 hover:bg-slate-900 flex justify-between items-center">
          <h3 className="text-white ">jewelery</h3>
          <span className="text-white border-b-2  flex items-center justify-center text-base">
            2
          </span>
        </div>
      </div>
    </>
  );
}

export default Filter;
