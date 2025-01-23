import { Link } from "react-router-dom";
import "../styles/lettermealcard.css";



export const LetterMealCard =(props) => {
  const { name, image, id } = props;

  return (
    <>
      <div className="letter-meal-container">
        <Link to={`/mealdetails/${id}`}>
          <img className="image-by-letter" src={image} alt={name} width={170} />
        </Link>
        <h3 className="meal-name">{name}</h3>
      </div>
    </>
  );
};
