import React from "react";
import Logo from "../../components/Logo/Logo";

const Navbar = ({ currentPage, onChangePage }) => {
  const linkClass = (page) =>
    currentPage === page
      ? `relative font-semibold text-indigo-300
         before:absolute before:-bottom-1 before:left-0 before:w-full before:h-0.5
         before:rounded before:bg-indigo-400 before:opacity-80
         cursor-pointer`
      : `text-gray-200 hover:text-indigo-300 cursor-pointer transition-colors duration-300`;

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
    <nav className="bg-indigo-800 text-gray-200 px-6 py-3 shadow-md sticky top-0 z-50">
      <div className="mx-2 flex justify-between items-center">
        <div
          className="flex items-center gap-2 text-xl font-semibold cursor-pointer text-indigo-200 hover:text-indigo-300 transition-colors duration-300"
          onClick={() => handleScroll("top", "home")}
        >
          <Logo></Logo> {" "}
          ShopSmart Reviews
        </div>
        <div className="space-x-8 text-lg flex">
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
