import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMealByArea } from "../api/getMeal";
import { MealCard } from "../components/MealCard";
import "../styles/search.css";
import { Loader } from "../components/Loader";

export const Area = () => {
  const { areaName } = useParams();
  const [areaMealResults, setAreaMealResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (areaName) {
      getMealByArea(areaName)
        .then((response) => {
          console.log("API Response:", response.data);
          setAreaMealResults(response?.data?.meals);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [areaName]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="wrapper">
        <div className="headerWrapper">
          <h1 className="header">{areaName} Meals</h1>
        </div>
        {areaMealResults.length > 0 && (
          <div className="meals">
            {areaMealResults.map((item, index) => (
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
