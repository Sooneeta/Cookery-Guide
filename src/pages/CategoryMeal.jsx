import { useEffect, useState } from "react";

import { useParams} from "react-router-dom";
import { LetterMealCard} from "../components/LetterMealCard";
import { getMealByCategory } from "../api/getMeal";
import "../styles/search.css";



export const Categorymeal = () => {

  const {categoryName} = useParams();
  const [categorymealResults, setCategoryMealResults] = useState([]);
  

  useEffect(() => {
    if (categoryName) {
      getMealByCategory(categoryName)
        .then((response) => {
          console.log("API Response:", response.data);
          setCategoryMealResults(response?.data?.meals);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [categoryName]);

  return (
    <>
     <div className="wrapper">
      <h1 className="header">Meals by {categoryName} </h1>
      {categorymealResults.length > 0 && (
        <div className="meals">
          {categorymealResults.map((item, index) => (
            <LetterMealCard
              key={index}
              name={item.strMeal}
              image={item.strMealThumb}
              id = {item.idMeal}
            />
          ))}
        </div>
      )}
      </div>
    </>
  );
};
