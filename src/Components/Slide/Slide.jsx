import React from "react";
import { Link } from "react-router";

const Slide = ({ item }) => {
  const { toyName, price, pictureURL } = item;
  return (
    <div className=" relative h-full ">
      <div className="w-11/12 lg:w-8/12 mx-auto flex md:flex-row flex-col-reverse gap-10 md:gap-0 justify-between items-center">
        <div>
          <p className="uppercase baloo">Seasonal sale - upto 50% off</p>
          <h2 className="text-[42px] baloo font-semibold">{toyName}</h2>
          <p className="text-[#FF0000] font-bold baloo text-[30px]">${price}</p>
          <Link className="bg-primary hover:bg-secondary baloo btn text-white rounded-xl" to={`/toys/category/${item.toyId}`}>Shop Now</Link>
        </div>
        <div>
          <img src={pictureURL} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Slide;
