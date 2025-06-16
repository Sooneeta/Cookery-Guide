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
        <section className="heading-section">
          <h1>
            A <span>Receipe</span>
            <br />
            of
            <br />
            happiness
            <br />
            :)
            <br />
            Cook like a
            <br />
            chef
          </h1>
          <section className="desc-section">
            <p>
              Start a delicious journey, where tasty discoveries and flavorful
              creations await your every craving.
            </p>

            <button className="signup-button" onClick={handleSignUpClick}>
              Sign up
            </button>
          </section>
        </section>
        <figure className="img-section">
          <img src={FoodImage} alt="food-image" loading="lazy" />
        </figure>
      </div>
    </>
  );
};
