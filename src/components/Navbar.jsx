import React from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import Hash from "./Fetch";
import Fetch from "./Fetch";

const Navbar = () => {
  const data = {
    AllComponents: "AllComponents",
    home: "Home",
    about: "About",
    DropDown: "dropDown",
    counter: "Count",
    signup: "signup",
    login: "login",
    Fetch: "fetch",
  };

  return (
    <div className="flex flex-col mt-8 md:flex-row items-center justify-evenly gap-4 md:gap-0 shadow-sm">
      <Link className="group hover:text-red-600 text-center" to="/">
        <div className="h-1 w-1 bg-amber-400 mx-auto scale-0 group-hover:scale-100 transition-all duration-300 rounded-full"></div>
        {data.AllComponents}
      </Link>

      <Link className="group hover:text-red-600 text-center" to="/Home">
        <div className="h-1 w-1 bg-amber-400 mx-auto mb-1 scale-0 group-hover:scale-100 transition-all duration-300 rounded-full"></div>
        {data.home}
      </Link>

      <Link className="group hover:text-red-600 text-center" to="/About">
        <div className="h-1 w-1 bg-amber-400 mx-auto mb-1 scale-0 group-hover:scale-100 transition-all duration-300 rounded-full"></div>
        {data.about}
      </Link>

      <Link className="group hover:text-red-600 text-center" to="/count">
        <div className="h-1 w-1 bg-amber-400 mx-auto mb-1 scale-0 group-hover:scale-100 transition-all duration-300 rounded-full"></div>
        {data.counter}
      </Link>

      <Link className="group hover:text-red-600 text-center" to="/signup">
        <div className="h-1 w-1 bg-amber-400 mx-auto mb-1 scale-0 group-hover:scale-100 transition-all duration-300 rounded-full"></div>
        {data.signup}
      </Link>

      <Link className="group hover:text-red-600 text-center" to="/login">
        <div className="h-1 w-1 bg-amber-400 mx-auto mb-1 scale-0 group-hover:scale-100 transition-all duration-300 rounded-full"></div>
        {data.login}
      </Link>

      <Link className="group hover:text-red-600 text-center" to="/dropDown">
        <div className="h-1 w-1 bg-amber-400 mx-auto mb-1 scale-0 group-hover:scale-100 transition-all duration-300 rounded-full"></div>
        {data.DropDown}
      </Link>

      <Link className="group hover:text-red-600 text-center" to="/fetch">
        <div className="h-1 w-1 bg-amber-400 mx-auto mb-1 scale-0 group-hover:scale-100 transition-all duration-300 rounded-full"></div>
        {data.Fetch}
      </Link>
    </div>
  );
};

export default Navbar;
