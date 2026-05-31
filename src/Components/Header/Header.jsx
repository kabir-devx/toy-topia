import React, { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink } from "react-router";
import AuthContext from "../../Auth/AuthContext/AuthContext";
import { toast } from "react-toastify";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => toast.success("Logged out successfully"))
      .catch((error) => toast.error(error.message));
  };

  const closeDropdown = () => {
    document.activeElement.blur();
  };

  const navLinks = (
    <>
      <li>
        <NavLink to={"/"} onClick={closeDropdown}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/toys"} onClick={closeDropdown}>
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink to={"/profile"} onClick={closeDropdown}>
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink to={"/feedback"} onClick={closeDropdown}>
          Feedback
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 lg:w-10/12 md:w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content z-10 bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link to={"/"} className="text-3xl baloo font-black text-primary">
          To
          <span className="text-accent">yT</span>
          op<span className="text-accent">ia</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="">
          <ul className="menu menu-horizontal px-1 text-lg baloo font-bold text-accent">{navLinks}</ul>
        </div>
      </div>
      <div className="navbar-end flex gap-5">
        <div className="text-4xl">
          {user ? (
            user.photoURL ? (
              <img
                title={user.displayName}
                src={user.photoURL}
                alt={user.displayName}
                className="rounded-full w-10 h-10"
              />
            ) : (
              <CgProfile title={user.displayName} />
            )
          ) : null}
        </div>
        {user ? (
          <Link
            onClick={handleLogout}
            className="btn btn-primary hover:btn-secondary text-white px-5 baloo"
          >
            Logout
          </Link>
        ) : (
          <Link
            to={"/login"}
            className="btn btn-primary hover:btn-secondary text-white px-5 baloo"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
