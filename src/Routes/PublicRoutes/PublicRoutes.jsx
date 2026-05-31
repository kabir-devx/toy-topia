import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../../Layout/HomeLayout/HomeLayout";
import HomePage from "../../Pages/HomePage/HomePage";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import ForgetPassword from "../../Pages/ForgetPassword/ForgetPassword";
import Profile from "../../Pages/Profile/Profile";
import Toys from "../../Pages/Toys/Toys";

import ToyDetailsContainer from "../../Pages/ToyDetailsContainer/ToyDetailsContainer";
import Feedback from "../../Pages/Feedback/Feedback";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Loader from "../../Pages/Loader/Loader";

const loaderWithDelay = async (loaderFn) => {
  const [data] = await Promise.all([
    loaderFn(),
    new Promise((resolve) => setTimeout(resolve, 300)),
  ]);
  return data;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/login",
        element: <Login></Login>,
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/register",
        element: <Register></Register>,
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword></ForgetPassword>,
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/toys",
        loader: () => loaderWithDelay(() => fetch("/toyData.json")),
        element: <Toys></Toys>,
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/toys/:categoryId",
        loader: () => loaderWithDelay(() => fetch("/toyData.json")),
        element: <Toys></Toys>,
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/toys/category/:id",
        loader: () => loaderWithDelay(() => fetch("/toyData.json")),
        element: (
          <PrivateRoutes>
            <ToyDetailsContainer></ToyDetailsContainer>
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/feedback",
        element: (
          <PrivateRoutes>
            <Feedback></Feedback>
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <Loader></Loader>,
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <Loader></Loader>,
  },
]);
