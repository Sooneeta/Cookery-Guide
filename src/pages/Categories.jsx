import { useEffect, useState } from "react";
import { getMealByCategories } from "../api/getMeal";
import { CategoryMealCard } from "../components/CategoryMealCard";
import "../styles/categories.css";
import { Loader } from "../components/Loader";

export const Categories = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    getMealByCategories()
      .then((response) => {
        console.log("API Response:", response.data.categories);
        setCategory(response?.data?.categories);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {category.length > 0 && (
        <div className="category-grid">
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
