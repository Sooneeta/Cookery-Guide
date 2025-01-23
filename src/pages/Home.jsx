import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { Categories } from "./Categories";
import { getMealByLetter } from "../api/getMeal";
import { LetterMealCard} from "../components/LetterMealCard";
import React from "react";
import "../styles/home.css";
import "../styles/categories.css";


export const Home = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [meals, setMeals] = useState([]);
  const [letterfilteredMeals, setLetterFilteredMeals] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState("A");
 

    

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
    getMealByLetter(selectedLetter)
      .then((response) => {
        console.log("API Response:", response.data.meals);
        setMeals(response.data.meals);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      setSearchParams({ s: searchValue });
      navigate(`/search?s=${encodeURIComponent(searchValue)}`);
      window.scrollTo(0, 0);
    }
  };

  

  return (
    <>
      <div className="homepage-wrapper">
      <div className="img-container">
        <p className="title" style={{color: "white", fontFamily: "Gilroy-Bold"}}>What would you cook to eat today?</p>
        <div className="search-container">
          <FaSearch id="search-icon" />
          <input
            className="search-input"
            type="text"
            placeholder="Search meals..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleKeyDown}
          ></input>
        </div>
      </div>
      <div className="meals-container">


  <div className="letter-circle-container">
    {Array.from(Array(26), (_, index) => (
      <div
        key={index}
        className={`letter-circle ${selectedLetter === String.fromCharCode(65 + index) ? 'active' : ''}`}
        onClick={() => handleLetterClick(String.fromCharCode(65 + index))}
      >
        {String.fromCharCode(65 + index)}
        
      </div>
      
    ))}
   
  </div>




        <div className="letter-container">
          {letterfilteredMeals.map((item, index) => (
            <LetterMealCard
              key={index}
              image={item.strMealThumb}
              name={item.strMeal}
              id={item.idMeal}
            />
          ))}
        </div>
        <div className="category-container">
          <h1 className="category-heading">Meal Categories</h1>
          <Categories display={"horizontal"} />
        </div>
      </div>
      </div>
    </>
  );
};
