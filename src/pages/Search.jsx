import { useEffect, useState } from "react";
import { getMealBySearch } from "../api/getMeal";
import { useSearchParams } from "react-router-dom";
import { MealCard } from "../components/MealCard";
import "../styles/search.css";
import { Loader } from "../components/Loader";

export const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("s");
  const [loading, setLoading] = useState(true);
  const [delayedClass, setDelayedClass] = useState("");

  useEffect(() => {
    let timeout;
    if (query) {
      getMealBySearch(query)
        .then((response) => {
          console.log("API Response:", response.data);
          setSearchResults(response?.data?.meals);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
      timeout = setTimeout(() => {
        setDelayedClass("header-animation");
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [query]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="wrapper">
        <div className="headerWrapper">
          <h1 className={`header ${delayedClass}`}>
            {query.charAt(0).toUpperCase() + query.substring(1)} Meals
          </h1>
        </div>
        {searchResults?.length > 0 && (
          <div className="meals">
            {searchResults.map((item, index) => (
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
