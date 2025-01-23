import { useEffect, useState } from "react";
import { getMealByCategories } from "../api/getMeal";
import { CategoryMealCard} from "../components/CategoryMealCard";
import "../styles/categories.css";



export const Categories = ({ display = "grid"}) => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    getMealByCategories()
      .then((response) => {
        console.log("API Response:", response.data.categories);
        setCategory(response?.data?.categories);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

 

  return (
    <>
      {category.length > 0 && (
        <div
          className={`categories-container ${
            display === "grid" ? "category-grid" : "category-horizontal"
          }`}
        >
          {category.map((item, index) => (
            <CategoryMealCard 
              key={index}
              image={item.strCategoryThumb}
              name={item.strCategory}
            />
          ))}
        </div>
      )}
    </>
  );
};
