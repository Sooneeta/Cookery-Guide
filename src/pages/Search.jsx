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
          setSearchResults(response?.data?.meals);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [query]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="wrapper">
        <h1 className="header">
          {query.charAt(0).toUpperCase() + query.substring(1)} Meals
        </h1>

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
