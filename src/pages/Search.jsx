import { useEffect, useState } from "react";
import { getMealBySearch } from "../api/getMeal";
import { useSearchParams } from "react-router-dom";
import { LetterMealCard} from "../components/LetterMealCard";
import "../styles/search.css";



export const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("s");

  useEffect(() => {
    if (query) {
      getMealBySearch(query)
        .then((response) => {
          console.log("API Response:", response.data);
          setSearchResults(response?.data?.meals);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [query]);

  return (
    <>
      <div className="wrapper">
      <h1 className="header" >Search Results for {query} </h1>
      {searchResults.length > 0 && (
        <div className="meals">
          {searchResults.map((item, index) => (
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
