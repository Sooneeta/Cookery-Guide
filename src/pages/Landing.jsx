import "../styles/landing.css";
import FoodImage from "../assets/landingimg.webp";
import { Loader } from "../components/Loader";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const img = new Image();
    img.src = FoodImage;

    img.onload = () => {
      setLoading(false);
    };

    img.onerror = () => {
      console.error("Error loading the image.");
      setLoading(false);
    };
  }, []);

  const handleSignUpClick = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="landing-wrapper">
        <section className="text-section">
          <span>
            <h1>
              A <span>Receipe</span> of
              <br />
              happiness :)
              <br />
              Cook like a chef
            </h1>

            <p>
              Start a delicious journey, where tasty discoveries
              <br />
              and flavorful creations await your every craving.
            </p>
          </span>

          <span>
            <button className="signup-button" onClick={handleSignUpClick}>
              Sign up
            </button>
          </span>
        </section>
        <figure className="img-section">
          <img src={FoodImage} alt="food-image" width={560} loading="lazy" />
        </figure>
      </div>
    </>
  );
};
