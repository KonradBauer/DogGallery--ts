import React from "react";
import logo from "../../images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { Search } from "../Search/Search";

export const Navbar: React.FC = () => {
  const location = useLocation();
  const isDogDetailsPage = location.pathname.includes("/dog-details");

  const resetSearchInput = () => {
    console.log("Klik!");
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Dog Gallery
        </Link>
      </div>
      {isDogDetailsPage ? null : <Search resetSearchInput={resetSearchInput} />}
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={logo} alt="app logo" />
          </div>
        </label>
        {/* <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <span className="justify-between"></span>
          </li>
          <li>{/<a>Hound</a>}</li>
        </ul> */}
      </div>
    </div>
  );
};
