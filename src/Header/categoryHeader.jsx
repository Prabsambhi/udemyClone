import React, { useState, useEffect } from "react";
import DownSVG from "../svg/down";

const CategoryShow = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [activeCategory, setActiveCategory] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubcategories, setActiveSubcategories] = useState(null);

  const [categories, setCategories] = useState([
    { _id: "1", categoryName: "Electronics" },
    { _id: "2", categoryName: "Books" },
    { _id: "3", categoryName: "Clothing" },
    { _id: "4", categoryName: "Electronics" },
    { _id: "5", categoryName: "Personal Development" },
    { _id: "6", categoryName: "Clothing" },
    { _id: "7", categoryName: "Electronics" },
    { _id: "8", categoryName: "Productivity" },
    { _id: "9", categoryName: "Clothing" },
    { _id: "10", categoryName: "Electronics" },
  ]);

  const [subcategories, setSubcategories] = useState({
    1: [
      { subCategoryName: "Mobiles" },
      { subCategoryName: "Laptops" },
      { subCategoryName: "Cameras" },
      { subCategoryName: "Mobiles" },
      { subCategoryName: "Laptops" },
      { subCategoryName: "Cameras" },
      { subCategoryName: "Mobiles" },
      { subCategoryName: "Laptops" },
      { subCategoryName: "Cameras" },
    ],
    2: [
      { subCategoryName: "Fiction" },
      { subCategoryName: "Non-Fiction" },
      { subCategoryName: "Comics" },
      { subCategoryName: "Fiction" },
      { subCategoryName: "Non-Fiction" },
      { subCategoryName: "Comics" },
      { subCategoryName: "Fiction" },
      { subCategoryName: "Non-Fiction" },
      { subCategoryName: "Comics" },
    ],
    3: [
      { subCategoryName: "Men's Clothing" },
      { subCategoryName: "Women's Clothing" },
      { subCategoryName: "Kid's Clothing" },
      { subCategoryName: "Fiction" },
      { subCategoryName: "Non-Fiction" },
      { subCategoryName: "Comics" },
      { subCategoryName: "Fiction" },
      { subCategoryName: "Non-Fiction" },
      { subCategoryName: "Comics" },
    ],
    4: [
      { subCategoryName: "Mobiles" },
      { subCategoryName: "Laptops" },
      { subCategoryName: "Cameras" },
      { subCategoryName: "Fiction" },
      { subCategoryName: "Non-Fiction" },
      { subCategoryName: "Comics" },
      { subCategoryName: "Fiction" },
      { subCategoryName: "Non-Fiction" },
      { subCategoryName: "Comics" },
    ],
    5: [
      { subCategoryName: "Fiction" },
      { subCategoryName: "Non-Fiction" },
      { subCategoryName: "Comics" },
      { subCategoryName: "Fiction" },
      { subCategoryName: "Non-Fiction" },
      { subCategoryName: "Comics" },
      { subCategoryName: "Fiction" },
      { subCategoryName: "Non-Fiction" },
      { subCategoryName: "Comics" },
    ],
    6: [
      { subCategoryName: "Men's Clothing" },
      { subCategoryName: "Women's Clothing" },
      { subCategoryName: "Kid's Clothing" },
      { subCategoryName: "Fiction" },
      { subCategoryName: "Non-Fiction" },
      { subCategoryName: "Comics" },
      { subCategoryName: "Fiction" },
      { subCategoryName: "Non-Fiction" },
      { subCategoryName: "Comics" },
    ],
    7: [
      { subCategoryName: "Mobiles" },
      { subCategoryName: "Laptops" },
      { subCategoryName: "Cameras" },
      { subCategoryName: "Fiction" },
      { subCategoryName: "Non-Fiction" },
      { subCategoryName: "Comics" },
      { subCategoryName: "Fiction" },
      { subCategoryName: "Non-Fiction" },
      { subCategoryName: "Comics" },
    ],
    8: [
      { subCategoryName: "Fiction" },
      { subCategoryName: "Non-Fiction" },
      { subCategoryName: "Comics" },
      { subCategoryName: "Fiction" },
      { subCategoryName: "Non-Fiction" },
      { subCategoryName: "Comics" },
      { subCategoryName: "Fiction" },
      { subCategoryName: "Non-Fiction" },
      { subCategoryName: "Comics" },
    ],
    9: [
      { subCategoryName: "Men's Clothing" },
      { subCategoryName: "Women's Clothing" },
      { subCategoryName: "Kid's Clothing" },
      { subCategoryName: "Fiction" },
      { subCategoryName: "Non-Fiction" },
      { subCategoryName: "Comics" },
      { subCategoryName: "Fiction" },
      { subCategoryName: "Non-Fiction" },
      { subCategoryName: "Comics" },
    ],
    10: [
      { subCategoryName: "Mobiles" },
      { subCategoryName: "Laptops" },
      { subCategoryName: "Cameras" },
      { subCategoryName: "Fiction" },
      { subCategoryName: "Non-Fiction" },
      { subCategoryName: "Comics" },
      { subCategoryName: "Fiction" },
      { subCategoryName: "Non-Fiction" },
      { subCategoryName: "Comics" },
    ],
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getNumberOfElementsToShow = () => {
    if (windowWidth >= 1100) return 10;
    if (windowWidth >= 1000) return 8;
    if (windowWidth >= 900) return 7;
    if (windowWidth >= 768) return 6;
    return 10;
  };

  const numberOfElementsToShow = getNumberOfElementsToShow();

  const handleCategoryHover = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileCategoryClick = (categoryId) => {
    if (activeSubcategories === categoryId) {
      setActiveSubcategories(null);
    } else {
      setActiveSubcategories(categoryId);
    }
  };

  return (
    <div>
      <div className="relative" onMouseLeave={handleMouseLeave}>
        <div className="md:hidden flex justify-start items-center px-4 py-3 bg-white shadow-md">
          <button
            className="text-gray-800 text-base "
            onClick={handleMobileMenuToggle}
          >
            Categories
          </button>
        </div>
        <ul
          className={`hidden md:flex md:justify-evenly w-full bg-white shadow-md ${
            isMobileMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          {categories.slice(0, numberOfElementsToShow).map((category) => (
            <li
              key={category?._id}
              onMouseEnter={() => handleCategoryHover(category?._id)}
              onClick={() => handleMobileCategoryClick(category?._id)}
              className={`relative text-gray-800 z-10 block justify-evenly cursor-pointer py-3 text-xs sm:text-sm ${
                activeCategory === category._id ? "text-sky-700" : ""
              } `}
            >
              {category?.categoryName}
            </li>
          ))}
        </ul>
        {(activeCategory && subcategories[activeCategory] && (
          <div className="absolute z-20 top-full left-0 w-full bg-opacity-60 text-white bg-sky-800 shadow-lg hidden md:block">
            <div className="flex justify-evenly">
              {subcategories[activeCategory].map((subcategory, index) => (
                <button
                  key={index}
                  className=" text-xs sm:text-sm py-4 hover:text-sky-300"
                >
                  {subcategory?.subCategoryName}
                </button>
              ))}
            </div>
          </div>
        )) ||
          (isMobileMenuOpen && (
            <div className="md:hidden">
              {categories.map((category) => (
                <div key={category._id}>
                  <button
                    className="w-full flex justify-between items-center text-xs text-left px-4 py-2 text-zinc-800 bg-zinc-100 border-t border-b border-gray-200"
                    onClick={() => handleMobileCategoryClick(category._id)}
                  >
                    {category?.categoryName}
                    <DownSVG />
                  </button>
                  {activeSubcategories === category?._id && (
                    <div className="bg-white">
                      {subcategories[category?._id].map((subcategory, index) => (
                        <button
                          key={index}
                          className="w-full text-left px-4 py-2 text-xs text-zinc-600 border-b border-zinc-200"
                        >
                          {subcategory?.subCategoryName}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>

    
  );
};

export default CategoryShow;
