export class MealService {
    static getData(data) {
      let mappedData = this.mapFields(data);
      return mappedData;
    }
  
 
    static mapFields(data) {
      let ingredient = MealService.getIngredients(data);
      let meal = {
        idMeal: data?.idMeal,
        strMeal: data?.strMeal,
        strMealThumb: data?.strMealThumb,
        strCategory: data?.strCategory,
        strArea: data?.strArea,
        strIngredient: ingredient,
        strInstructions: data?.strInstructions
      };
      return meal;
    }
  
    
    static getIngredients(data) {
      let ingredients = [];
      for (let i = 1; i <= 20; i++) {
        if (data["strIngredient" + i]) {
          let item = {
            ingredient: data["strIngredient" + i],
            measure: data["strMeasure" + i],
          };
          ingredients.push(item);
        }
      }
      return ingredients;
    }
  }
  