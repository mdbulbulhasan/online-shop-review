import React from "react";

const Navbar = ({ currentPage, onChangePage }) => {
  const linkClass = (page) =>
    currentPage === page
      ? "font-semibold underline cursor-pointer"
      : "hover:underline cursor-pointer";

  const handleScroll = (id, page) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      onChangePage(page);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      onChangePage(page);
    }
  };

  return (
    <nav className="bg-indigo-600 text-white px-6 py-3 shadow-2xl sticky top-0 z-50">
      <div className="mx-2 flex justify-between items-center">
        <div
          className="text-xl font-bold cursor-pointer"
          onClick={() => handleScroll("top", "home")}
        >
          🛒 Review App
        </div>
        <div className="space-x-6">
          <span
            className={linkClass("home")}
            onClick={() => handleScroll("top", "home")}
          >
            Home
          </span>
          <span
            className={linkClass("add")}
            onClick={() => handleScroll("home", "add")}
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
