import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MealCard } from "../components/MealCard";
import { getMealByCategory } from "../api/getMeal";
import "../styles/search.css";
import { Loader } from "../components/Loader";

export const Categorymeal = () => {
  const { categoryName } = useParams();
  const [categorymealResults, setCategoryMealResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (categoryName) {
      getMealByCategory(categoryName)
        .then((response) => {
          setCategoryMealResults(response?.data?.meals);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [categoryName]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="wrapper">
        <div className="headerWrapper">
          <h1 className="header">{categoryName} Meals</h1>
        </div>
        {categorymealResults.length > 0 && (
          <div className="meals">
            {categorymealResults.map((item, index) => (
              <MealCard
                key={index}
                name={item.strMeal}
                image={item.strMealThumb}
                id={item.idMeal}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
