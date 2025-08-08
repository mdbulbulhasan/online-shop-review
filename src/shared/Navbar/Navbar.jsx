import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white px-6 py-3 shadow">
      <div className="max-w-6xl flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          🛒 Review App
        </Link>
        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-semibold underline" : "hover:underline"
            }
          >
            Home
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
