import React, { useState } from "react";
import DownSVG from "../svg/down";

const CategoryShow = () => {
  const [categories, setCategories] = useState([
    {
      id: 0,
      category: "Development",
    },
    {
      id: 1,
      category: "Business",
    },
    {
      id: 2,
      category: "IT & Software",
    },
    {
      id: 3,
      category: "Design",
    },
    {
      id: 4,
      category: "Marketing",
    },
  ]);

  const [subcategories, setSubcategories] = useState([
    {
      id: 0,
      sub: ["Web Development", "Mobile Development", "Game Development"],
    },
    { id: 1, sub: ["Entrepreneurship", "Communication", "Sales"] },
    {
      id: 2,
      sub: ["Network & Security", "Hardware", "Operating Systems & Servers"],
    },
    { id: 3, sub: ["Web Design", "Game Design", "Design Tools"] },
    {
      id: 4,
      sub: ["Digital Marketing", "Social Media Marketing", "Branding"],
    },
  ]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubcategories, setActiveSubcategories] = useState(null);

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
        <div className="md:hidden flex justify-between items-center px-4 py-3 bg-white shadow-md">
          <button
            className="text-gray-800 text-base "
            onClick={handleMobileMenuToggle}
          >
            Categories
          </button>
        </div>
        <ul
          className={`hidden md:flex md:justify-between w-full bg-white shadow-md ${
            isMobileMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          {categories.map((category) => (
            <li
              key={category?.id}
              onMouseEnter={() => handleCategoryHover(category?.id)}
              onClick={() => handleMobileCategoryClick(category?.id)}
              className={`relative text-center text-gray-800 w-full z-10 block cursor-pointer py-3 text-sm sm:text-base ${
                activeCategory === category.id ? "bg-zinc-200" : ""
              } `}
            >
              {category?.category}
            </li>
          ))}
        </ul>
        {(activeCategory > -1 && subcategories[activeCategory] && (
          <div className="absolute z-10 top-full left-0 w-full bg-opacity-95 text-white bg-zinc-800 shadow-lg hidden md:block">
            <div className="flex justify-around">
              {subcategories[activeCategory].sub.map((subcategory, index) => (
                <button
                  key={index}
                  className="px-6 text-xs md:text-base w-full py-4 hover:text-sky-300"
                >
                  {subcategory}
                </button>
              ))}
            </div>
          </div>
        )) ||
          (isMobileMenuOpen && (
            <div className="md:hidden">
              {categories.map((category) => (
                <div key={category.id}>
                  <button
                    className="w-full flex justify-between items-center text-xs text-left px-4 py-2 text-zinc-800 bg-zinc-100 border-t border-b border-gray-200"
                    onClick={() => handleMobileCategoryClick(category.id)}
                  >
                    {category.category}
                    <DownSVG/>
                  </button>
                  {activeSubcategories === category.id && (
                    <div className="bg-white ">
                      {subcategories[category.id].sub.map(
                        (subcategory, index) => (
                          <button
                            key={index}
                            className="w-full text-left px-4 py-2 text-xs text-zinc-600 border-b border-zinc-200"
                          >
                            {subcategory}
                          </button>
                        )
                      )}
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
