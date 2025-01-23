import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMealDetailsByMealId } from "../api/getMeal";
import { MealService } from "../view-model/MealService";
import { Loader } from "../components/Loader";
import "../styles/mealdetails.css";

export const MealDetails = () => {
  const { mealId } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMealDetailsByMealId(mealId)
      .then((response) => {
        const meals = response?.data?.meals;

        if (meals && meals.length > 0) {
          const randomMeal = MealService.getData(meals[0]);

          const updatedRandomMeal = {
            ...randomMeal,
            strIngredient: randomMeal.strIngredient,
          };

          setMeal(updatedRandomMeal);
        } else {
          console.error("No valid meal data received from the API.");
        }
      })
      .catch((error) => {
        console.error("Error fetching meal details:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [mealId]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {meal ? (
        <div className="meal-details-container">
        <div style={{display: "flex", gap: "2.5em"}}>
          <div className="meal-image">
            <img src={meal?.strMealThumb} alt={meal?.strMeal} />
          </div>

          <div className="meal-info">
            <h1 style={{fontFamily: "Gilroy-Bold", color: "#F49427"}}>{meal?.strMeal}</h1>
            <p className="meal-category">
              <b>Category:</b>{" "}
              <Link className="link" to={`/category/${meal?.strCategory}`}>
                {meal?.strCategory}
              </Link>
            </p>
            <p className="meal-area">
              <b>Area: </b>
              <Link className="link" to={`/area/${meal?.strArea}`}>
                {meal?.strArea}
              </Link>
            </p>
            <div className="meal-ingredients">
              <h3>Ingredients:</h3>
              <ul>
                {meal?.strIngredient.map((ingredientObj, index) => (
                  <li key={index}>
                    {`${ingredientObj.measure} ${ingredientObj.ingredient}`}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </div>
          <div className="meal-instructions">
            <h2>Instructions</h2>
            <p>{meal?.strInstructions}</p>
          </div>
        </div>
      ) : (
        <p>No meal details available.</p>
      )}
    </>
  );
};
