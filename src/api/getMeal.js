import axios from "axios";

export const getMealByArea = async (areaValue) => {
    try {
      const response = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php", {
        params: {
          a: areaValue
        }
      });
      return response;
    } catch (error) {
      throw error;
    }
  };

  export const getMealByCategories = async() => {
    try{
        const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
        return response;
    }
    catch (error){
        throw error;
    }
  };
  

  export const getMealByCategory = async(categoryValue) => {
    try {
        const response = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php", {
            params: {
                c: categoryValue
               } 
        });
        return response
    } catch (error){
        throw error;
    }
  };
  
  export const getMealByLetter = async(letter) => {
    try {
        const response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php", {
        params: {
          f:letter
        }
      });
      return response;
    } catch (error){
        throw error;
    }
  };

  export const getMealByIngredient = async(ingredientValue) => {
    try {
        const response = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php", {
          params: {
           i: ingredientValue
          }
      });
      return response;
    } catch(error){
        throw error
    }
  };
  

  export const getMealDetailsByMealId = async(mealId) => {
    try {
        const response = await axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php", {
        params: {
          i:mealId
        }
      });
      return response;
    } catch (error){
        throw error;
    }
  };


  export const getRandomMeal = async() => {
    try {
        const response = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
        return response;
    } catch (error){
        throw error;
    }
  };
  

  export const getMealBySearch = async(searchValue) =>   {
    try {
        const response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php", {
        params: {
          s: searchValue,
        },
      });
      return response;
    } catch (error){
        throw error;
    }
  };
  