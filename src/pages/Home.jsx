import { useEffect, useState } from "react";
import { getMealByLetter } from "../api/getMeal";
import { MealCard } from "../components/MealCard";
import "../styles/home.css";
import "../styles/categories.css";
import { Loader } from "../components/Loader";

export const Home = () => {
  const [meals, setMeals] = useState([]);
  const [letterfilteredMeals, setLetterFilteredMeals] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState("A");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getbyLetter();
  }, [selectedLetter]);

  useEffect(() => {
    if (meals) {
      const filtered = meals.filter((meal) =>
        meal.strMeal.startsWith(selectedLetter)
      );
      setLetterFilteredMeals(filtered);
    }
  }, [selectedLetter, meals]);

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    window.scrollTo(0, 0);
  };

  const getbyLetter = () => {
    setLoading(true);
    getMealByLetter(selectedLetter)
      .then((response) => {
        setMeals(response.data.meals);
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
      <div className="meals-container">
        <div className="letter-circle-container">
          {Array.from(Array(26), (_, index) => (
            <div
              key={index}
              className={`letter-circle ${
                selectedLetter === String.fromCharCode(65 + index)
                  ? "active"
                  : ""
              }`}
              onClick={() => handleLetterClick(String.fromCharCode(65 + index))}
            >
              {String.fromCharCode(65 + index)}
            </div>
          ))}
        </div>
        {/* <h3 style={{ color: " #f49427", fontFamily: "sans-serif" }}>
          Meals starting with{" "}
          <span style={{ color: "#E49B0F" }}>
            {"'"}
            {selectedLetter}
            {"'"}
          </span>
        </h3> */}

        <div className="letter-container">
          {letterfilteredMeals.map((item, index) => (
            <MealCard
              key={index}
              image={item.strMealThumb}
              name={item.strMeal}
              id={item.idMeal}
            />
          ))}
        </div>
      </div>
    </>
  );
};
