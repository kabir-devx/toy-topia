import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Routes/PublicRoutes/PublicRoutes";
import AuthProvider from "./Auth/AuthProvider.jsx/AuthProvider";
import { ToastContainer } from "react-toastify";
import Loader from "./Pages/Loader/Loader";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer />
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </AuthProvider>
  </StrictMode>,
);
