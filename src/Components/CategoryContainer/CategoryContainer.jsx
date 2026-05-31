import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import CategoryCard from "../CategoryCard/CategoryCard";
import { CgScrollH } from "react-icons/cg";

const CategoryContainer = () => {
  const [categories, setCategories] = useState([]);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 4,
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 3, spacing: 15 },
      },
      "(max-width: 768px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(max-width: 480px)": {
        slides: { perView: 1, spacing: 8 },
      },
    },
  });

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("/categoryData.json");
      const data = await response.json();

      setCategories(data);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (instanceRef.current && categories.length > 0) {
      instanceRef.current.update();
    }
  }, [categories, instanceRef]);

  return (
    <div className="my-15">
      <h1 className="text-center text-[36px] baloo font-bold mb-5">
        Shop by Category
      </h1>
      <div ref={sliderRef} className="keen-slider">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            name={category.name}
            image={category.image}
            id={category.id}
          />
        ))}
      </div>
      <div className="mx-auto w-fit mt-5 text-2xl">
        <CgScrollH />
      </div>
    </div>
  );
};

export default CategoryContainer;
