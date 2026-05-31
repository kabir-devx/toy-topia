import React, { useEffect } from "react";
import ToyDetails from "../../Components/ToyDetails/ToyDetails";
import ExploreForm from "../../Components/ExploreForm/ExploreForm";

const ToyDetailsContainer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <title>ToyTopia - Toy Details</title>
      <section className="bg-base-200">
        <ToyDetails></ToyDetails>
      </section>
      <ExploreForm></ExploreForm>
    </div>
  );
};

export default ToyDetailsContainer;
