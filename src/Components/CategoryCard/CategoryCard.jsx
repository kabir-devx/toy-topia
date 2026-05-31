import React from "react";
import { Link } from "react-router";

const CategoryCard = ({ id, name, image }) => {
  return (
    <div className="keen-slider__slide number-slide1 pt-5">
      <Link to={`/toys/${id}`}>
        <img
          className="h-[250px] rounded-full border border-dashed border-primary p-2 shadow-lg mx-auto hover:scale-105 duration-300 cursor-pointer"
          src={image}
          alt={name}
        />
      </Link>
      <p className="text-center mt-7 baloo text-[22px] font-semibold mt">{name}</p>
    </div>
  );
};

export default CategoryCard;
