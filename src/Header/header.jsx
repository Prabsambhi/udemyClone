import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import CategoryShow from "./categoryHeader";

const Header = () => {
  return (
    <>
      <div className="text-center font-bold text-white py-4 bg-sky-600">
        Ready to get with the times?
        <span className="font-normal">
          {" "}
          | Get the skills with J2C Business.
        </span>
      </div>
      <nav className="px-3 md:px-8 lg:px-12 py-5 text-center bg-white flex justify-between border-zinc-300 border-b">
        <Link to="/help">
          <button className="hover:underline">Help</button>
        </Link>
        <Link to="/cart">
          <button>
            <FontAwesomeIcon icon={faCartShopping} className="h-5" />
          </button>
        </Link>
      </nav>
      <CategoryShow/>
    </>
  );
};

export default Header;
