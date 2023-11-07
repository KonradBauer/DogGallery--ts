import React from "react";

export const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <a href="/#" className="btn btn-ghost normal-case text-sm md:text-lg lg:text-xl">
          The Dogs Gallery
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Szukaj" className="input input-bordered w-24 md:w-auto" />
        </div>
        <div className="dropdown dropdown-end"></div>
      </div>
    </div>
  );
};
