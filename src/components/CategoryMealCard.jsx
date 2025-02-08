import { Link } from "react-router-dom";
import "../styles/categorymealcard.css";

export const CategoryMealCard = ({ name, image }) => {
  return (
    <>
      <div className="c-meal-container">
        <Link to={`/category/${name}`}>
          <img
            className="image-by-category"
            src={image}
            alt={name}
            width={250}
            height={150}
          />
        </Link>
        <h3
          style={{
            padding: "0.8em",
            fontFamily: "Gilroy-Bold",
            fontSize: "1.3rem",
          }}
        >
          {name}
        </h3>
      </div>
    </>
  );
};
