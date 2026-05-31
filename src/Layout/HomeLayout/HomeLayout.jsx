import React, { useContext } from "react";
import Header from "../../Components/Header/Header";
import { Outlet, useNavigation } from "react-router";
import Footer from "../../Components/Footer/Footer";
import AuthContext from "../../Auth/AuthContext/AuthContext";
import Loader from "../../Pages/Loader/Loader";

const HomeLayout = () => {
  const { loading } = useContext(AuthContext);
  const navigation = useNavigation();

  if (loading) return <Loader></Loader>;

  return (
    <div className="relative">
      {/* Show loading overlay during navigation */}
      {navigation.state === "loading" && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex justify-center items-center">
          <span className="loading loading-ring loading-xl text-primary"></span>
        </div>
      )}

      <header>
        <Header></Header>
      </header>
      <main className="min-h-screen">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
