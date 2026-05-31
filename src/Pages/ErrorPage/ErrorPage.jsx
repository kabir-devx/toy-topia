import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="h-screen">
      <title>ToyTopia - Error</title>
      <DotLottieReact
        src="https://lottie.host/6bb0ccc2-c6e6-4ff9-81af-93a7d290e5c8/24U4CUBFsM.lottie"
        loop
        autoplay
      />
      <div className="text-center -mt-16">
        <Link className="btn btn-primary hover:btn-secondary duration-800 text-white baloo" to="/">
          {" "}
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
