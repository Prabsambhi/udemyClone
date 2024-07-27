import React, { useEffect, useState } from "react";
// import axios from "axios";

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
    { id: 1, sub: ["Enterpreneurship", "Communication", "Sales"] },
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

  // const fetchCategories = async () => {
  //     try {
  //         const response = await axios.get("/category/getCategory");
  //         setCategories(response.data.categories);
  //     } catch (error) {
  //         console.error("Error fetching categories:", error);
  //     }
  // };

  // const fetchSubcategories = async (categoryId) => {
  //     if (!subcategories[categoryId]) {
  //         try {
  //             const response = await axios.get(`/category/getSubCategory/${categoryId}`);
  //             setSubcategories(prev => ({
  //                 ...prev,
  //                 [categoryId]: response.data.subcategory
  //             }));
  //         } catch (error) {
  //             console.error("Error fetching subcategories:", error);
  //         }
  //     }
  // };

  // useEffect(() => {
  //     fetchCategories();
  // }, []);

  const handleCategoryHover = (categoryId) => {
    setActiveCategory(categoryId);
    //   fetchSubcategories(categoryId);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };

  return (
    <div>
      <div className="relative" onMouseLeave={handleMouseLeave}>
        <ul className="relative mx-auto flex justify-between w-full bg-white  shadow-md">
          {categories.map((category) => (
            <li
              key={category?.id}
              onMouseEnter={() => handleCategoryHover(category?.id)}
              className={`relative  text-center text-gray-800 w-full z-10 block cursor-pointer py-3 text-sm sm:text-base ${
                activeCategory === category.id
                  ? "bg-zinc-200"
                  : ""
              } `}
            >
              {category?.category}
            </li>
          ))}
        </ul>
        {activeCategory > -1 && subcategories[activeCategory] && (
          <div className="absolute z-10 top-full left-0 w-full bg-opacity-95 text-white bg-zinc-800 shadow-lg ">
            <div className="flex justify-around ">
              {subcategories[activeCategory].sub.map((subcategory, index) => (
                <button
                  key={index}
                  className="px-6 text-xs  md:text-base w-full py-4 hover:text-sky-300"
                >
                  {subcategory}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryShow;
