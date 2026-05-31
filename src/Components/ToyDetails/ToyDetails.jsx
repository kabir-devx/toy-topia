import React, { use }  from "react";
import { Link, useLoaderData, useParams } from "react-router";
import NoData from "../../Pages/NoData/NoData";

const ToyDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const toyDetails = data.find((toy) => toy.toyId == id);
    const {
      toyName,
      sellerName,
      sellerEmail,
      description,
      rating,
      price,
      pictureURL,
      availableQuantity,
    } = toyDetails;

if(!toyDetails){
    return (
      <div className="my-10">
        <NoData></NoData>
      </div>
    );
}

  return (
    <div className=" w-11/12 lg:w-10/12 mx-auto py-20">
      <div className="flex flex-col items-center md:flex-row gap-10">
        <div className="h-full">
          <img
            src={pictureURL}
            className="h-100 object-cover rounded-sm"
            alt=""
          />
        </div>
        <div className="flex-1 flex flex-col items-center md:block">
          <h2 className="text-[32px] text-accent font-bold text-center md:text-start baloo ">
            {toyName}
          </h2>
          <p className="text-[20px] text-primary text-center md:text-start baloo">
            Seller: {sellerName}
          </p>
          <p className="font-semibold text-accent">
            Contact: {sellerEmail}
          </p>
          <hr className="w-full text-[#001931] opacity-20 my-[30px]" />
          <div className="flex md:flex-row flex-col md:gap-20 gap-5">
            <div>
              <p className="text-primary opacity-80 my-2">Sales</p>
              <h1 className="text-[40px] text-[#001931] font-extrabold baloo">
                10k+
              </h1>
            </div>
            <div>
              <p className="text-primary opacity-80 my-2">Average Ratings</p>
              <h1 className="text-[40px] text-[#001931] font-extrabold baloo">
                {rating}
              </h1>
            </div>
            <div>
              <p className="text-primary opacity-80 my-2">Total Reviews</p>
              <h1 className="text-[40px] text-[#001931] font-extrabold baloo">4k+</h1>
            </div>
          </div>
          <hr className="w-full text-[#001931] opacity-20 my-[30px]" />
          <div>
            <p className="text-[#FF0000] font-bold baloo text-[30px]">
              ${price}
                      </p>
                      <p className="text-lg font-bold baloo">
                {availableQuantity} Left
                      </p>
          </div>
        </div>
      </div>
      <hr className="w-full text-[#001931] opacity-20 my-10" />
      <div>
        <h3 className="text-2xl text-[#001931] font-semibold text-center md:text-start">
          Description
        </h3>
        <p className="text-[20px] text-[#627382] mt-6 whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ToyDetails;
