import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import ToyCard from "../../Components/ToyCard/ToyCard";
import NoData from "../NoData/NoData";
import Loader from "../Loader/Loader";

const Toys = () => {
  const toys = useLoaderData();
  const { categoryId } = useParams();
  const [displayedToys, setDisplayedToys] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Set toys on load or when categoryId or toys change
  useEffect(() => {
    if (categoryId) {
      setDisplayedToys(
        toys.filter((toy) => toy.categoryId === parseInt(categoryId))
      );
    } else {
      setDisplayedToys(toys);
    }
  }, [categoryId, toys]);

  // Handle search
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setIsSearching(true);

    setTimeout(() => {
      setDisplayedToys(
        toys.filter((toy) => toy.toyName.trim().toLowerCase().includes(query))
      );
      setIsSearching(false);
    }, 500);
  };

  return (
    <div className="w-11/12 lg:w-10/12 mx-auto pb-20 pt-10">
      <title>ToyTopia - Toys</title>
      <h1 className="text-center text-[36px] baloo font-bold">
        Toys Collection
      </h1>

      <div className="flex justify-between items-center mt-7 mb-10">
        <div className="relative">
          <input
            onChange={handleSearch}
            type="text"
            name="search"
            placeholder="Search toys here"
            className="p-3 rounded-lg border border-dashed border-primary focus:outline-none min-w-[250px] lg:w-full placeholder:text-accent"
          />
          <button className="bg-primary text-white px-3 py-2 rounded-lg hover:bg-secondary absolute right-1.5 top-1.25">
            Search
          </button>
        </div>
        <Link
          to={"/toys"}
          className="btn btn-primary text-white border-none hover:bg-secondary"
        >
          See All
        </Link>
      </div>

      {isSearching ? (
        <div className="flex justify-center items-center mt-14 h-[500px]">
          <span className="loading loading-ring loading-xl"></span>
        </div>
      ) : displayedToys.length === 0 ? (
        <div className="flex justify-center items-center mt-14 h-[500px] ">
          <NoData className="scale-150" />
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 mt-10">
          {displayedToys.map((toy) => (
            <ToyCard key={toy.toyId} toy={toy} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Toys;
