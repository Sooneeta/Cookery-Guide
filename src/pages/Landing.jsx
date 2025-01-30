import "../styles/landing.css";
import FoodImage from "../assets/landingimg.webp";
import { useAuth } from "../utils/AuthContext";
import GoogleImage from "../assets/googleicon.png";
import { Loader } from "../components/Loader";
import { useEffect, useState } from "react";

export const Landing = () => {
  const { user, signUpWithGoogle } = useAuth();
  const [loading, setLoading] = useState(true);

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
          {!user ? (
            <span>
              <button className="signup-button">
                <img src={GoogleImage} alt="google-image" width={30} />
                Sign up with Google
              </button>
            </span>
          ) : (
            <p>Welcome, {user.displayName}!</p>
          )}
        </section>
        <figure className="img-section">
          <img src={FoodImage} alt="food-image" width={560} loading="lazy" />
        </figure>
      </div>
    </>
  );
};
