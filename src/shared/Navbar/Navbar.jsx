import React from "react";

const Navbar = ({ currentPage, onChangePage }) => {
  const linkClass = (page) =>
    currentPage === page
      ? "font-semibold underline cursor-pointer"
      : "hover:underline cursor-pointer";

  // Smooth scroll helper
  const handleScroll = (id, page) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      onChangePage(page); // update active link styling
    }
  };

  return (
    <nav className="bg-indigo-600 text-white px-6 py-3 shadow sticky top-0 z-50">
      <div className="max-w-[95%] mx-auto flex justify-between items-center">
        <div
          className="text-xl font-bold cursor-pointer"
          onClick={() => handleScroll("home", "home")}
        >
          🛒 Review App
        </div>
        <div className="space-x-6">
          <span
            className={linkClass("home")}
            onClick={() => handleScroll("home", "home")}
          >
            Home
          </span>
          <span
            className={linkClass("add")}
            onClick={() => handleScroll("add", "add")}
          >
            Add Review
          </span>
          <span
            className={linkClass("reviews")}
            onClick={() => handleScroll("reviews", "reviews")}
          >
            Reviews
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
