import React from "react";

const Info = () => {
  return (
    <div className="flex items-center gap-5 md:gap-10 lg:gap-20 justify-center my-20 flex-col lg:flex-row">
      <figure>
        <img
          className="max-h-[400px]"
          src="https://i.postimg.cc/0yLGn8Jh/Mask-group-3514798e-7d90-4144-a900-c6b97e546f20.webp"
          alt=""
        />
      </figure>
      <div>
        <h2 className="text-4xl font-semibold baloo pb-10 max-w-[500px]">
          The Unique Appeal Of Toy Time Toys & Games
        </h2>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-5">
            <figure>
              <img
                className="bg-base-200 rounded-2xl p-4 h-20"
                src="https://i.postimg.cc/nh6K2HQg/Group-141026.avif"
                alt=""
              />
            </figure>
            <div>
              <h4 className="text-[22px] baloo font-medium">
                Exclusive Toy Collections
              </h4>
              <p className="text-accent max-w-[400px]">
                Discover our range of unique and exclusive toys that you won't
                find anywhere else.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <figure>
              <img
                className="bg-base-200 rounded-2xl p-4 h-20"
                src="https://i.postimg.cc/Bnd5pq1z/Group-141027.png"
                alt=""
              />
            </figure>
            <div>
              <h4 className="text-[22px] baloo font-medium">
                Extensive Toy Assortment
              </h4>
              <p className="text-accent max-w-[400px]">
                Explore our vast selection of toys, featuring everything from
                classic favorites to the latest trends.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <figure>
              <img
                className="bg-base-200 rounded-2xl p-4 h-20"
                src="https://i.postimg.cc/Z51PHTyM/Layer-1-4818643e-2a05-4b26-8654-e6fab905dd6d.webp"
                alt=""
              />
            </figure>
            <div>
              <h4 className="text-[22px] baloo font-medium">
                Complimentary Shipping
              </h4>
              <p className="text-accent max-w-[400px]">
                Enjoy free shipping on all orders, making it easier to get the
                toys you love delivered right to your door.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
