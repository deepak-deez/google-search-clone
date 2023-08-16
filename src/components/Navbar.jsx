import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = ({ darkTheme, setDarkTheme }) => {
  //   const { darkTheme, setDarkTheme } = props;
  return (
    <div className=" p-5 pb-0 flex flex-wrap  sm:justify-between justify-center  items-center border-b">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl bg-blue-900 rounded py-1 px-2 font-bold dark:bg-gray-500 dark:text-gray-900">
            Googl 🔎
          </p>
        </Link>
        <button
          type="button"
          onClick={() => {
            setDarkTheme(!darkTheme);
          }}
          className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white hover:shadow-lg rounded-sm"
        >
          {darkTheme ? "Light ☀️" : "Dark 🌙"}
        </button>
      </div>
      <Search />
      <div>4</div>
    </div>
  );
};

export default Navbar;
