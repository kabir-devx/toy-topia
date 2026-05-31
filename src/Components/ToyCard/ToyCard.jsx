import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const ToyCard = ({ toy }) => {
  const { toyName, price, rating, availableQuantity, pictureURL } = toy;
  return (
    <div className="bg-[#FFFFFF] p-4 shadow-[0_4px_16px_0_rgba(0,0,0,0.25)] rounded-lg">
      <img
        className="border h-[350px] w-full object-cover border-dashed border-primary rounded-xl"
        src={pictureURL}
        alt={toyName}
      />

      <h2 className="font-bold text-[25px] baloo mt-2 text-black">{toyName}</h2>

      <p className="text-[#FF0000] font-bold baloo text-[30px]">${price}</p>

      <div className="flex justify-between items-center text-[20px] font-semibold mb-2">
        <div className="flex flex-col">
          <span className="text-sm text-accent mb-1">In Stock</span>
          <span className="baloo font-black">{availableQuantity} Left</span>
        </div>

        <span className="flex items-center gap-2 bg-[#fd8a8a50] px-2 py-1 rounded-4xl">
          <FaStar className="text-yellow-500" />
          <span className="baloo">{rating}</span>
        </span>
      </div>
      <Link to={`/toys/category/${toy.toyId}`}>
      <button className="bg-primary text-white py-2 px-4 rounded w-full baloo font-semibold hover:bg-secondary duration-500 cursor-pointer">
        View Details
      </button>
    </Link>
  </div>
);
};

export default ToyCard;
