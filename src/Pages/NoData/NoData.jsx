import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

const NoData = () => {
  return (
    <div
      className="w-full h-full flex justify-center items-center">
      <title>ToyTopia - No Data</title>
      <DotLottieReact
        className="w-1/2 h-1/2"
        src="https://lottie.host/8d1e92b3-1dbf-4c2d-b2ec-7cc4dcd4761b/Uqu29lqoEq.lottie"
        loop
        autoplay
      />
    </div>
  );
};

export default NoData;
