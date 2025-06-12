import { Link } from "react-router-dom";
import "../styles/mealcard.css";

export const MealCard = (props) => {
  const { name, image, id } = props;

  return (
    <>
      <Link to={`/mealdetails/${id}`} className="meal-container">
        <img
          className="meal-image"
          src={image}
          alt={name}
          width={130}
          loading="lazy"
        />
        <h3 className="meal-name">{name}</h3>
        <h6 className="view-recipe">View Recipe</h6>
      </Link>
    </>
  );
};
