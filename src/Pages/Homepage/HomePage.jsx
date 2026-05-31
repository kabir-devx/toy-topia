import React, { useEffect, useState } from "react";
import ToySlider from "../../Components/ToySlider/ToySlider";
import CategoryContainer from "../../Components/CategoryContainer/CategoryContainer";
import Info from "../../Components/Info/Info";
import PopularToy from "../../Components/PopularToy/PopularToy";

const HomePage = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    const fetchToys = async () => {
      const response = await fetch("/toyData.json");
      const data = await response.json();
      setToys(data);
    };
    fetchToys();
  }, []);
  return (
    <div>
      <title>ToyTopia - Home</title>
      <section>
        <ToySlider toys={toys}></ToySlider>
      </section>
      <section className="w-11/12 lg:w-10/12 mx-auto">
        <CategoryContainer toys={toys}></CategoryContainer>
      </section>
      <section className="w-11/12 lg:w-8/12 mx-auto">
        <Info></Info>
      </section>
      <section className="">
        <PopularToy toys={toys}></PopularToy>
      </section>
    </div>
  );
};

export default HomePage;
