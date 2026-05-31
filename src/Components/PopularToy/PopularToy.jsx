import React from "react";
import ToyCard from "../ToyCard/ToyCard";
import { Link } from "react-router";

const PopularToy = ({ toys }) => {
  const popularToys = toys.slice(0, 8);
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto pb-20 pt-10">
      <h1 className="text-center text-[36px] baloo font-bold">
        Most Popular Toys
      </h1>
      <div className="flex justify-end">
        <Link to={'/toys'} className="btn btn-primary text-white border-none hover:bg-secondary">See All</Link>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 mt-10">
        {popularToys.map((toy) => (
          <ToyCard key={toy.toyId} toy={toy}></ToyCard>
        ))}
      </div>
    </div>
  );
};

export default PopularToy;
