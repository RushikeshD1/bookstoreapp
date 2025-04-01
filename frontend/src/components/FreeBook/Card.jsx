import React from "react";

const Card = ({ item }) => {
  return (
    <>
      <div className="text-black mt-2">
        <div className="card bg-base-100 w-96 shadow-sm hover:scale-105 duration-200">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body bg-white">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between ">
              <div className="border border-black px-3 rounded-lg">${item.price}</div>
              <div className="bg-blue-600 px-3 rounded-lg cursor-pointer py-1 hover:text-white hover:bg-blue-400 duration-200">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
