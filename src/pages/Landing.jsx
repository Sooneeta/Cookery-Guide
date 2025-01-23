import "../styles/landing.css";
import FoodImage from "../assets/landingimg.png";
import { useAuth } from "../utils/AuthContext";
import GoogleImage from "../assets/googleicon.png";

export const Landing = () => {
  const { user, signUpWithGoogle } = useAuth();
   
    return(
        <>
            <div className="landing-wrapper">
            <section className="text-section">
            <h1>
              A <span>Receipe</span> of
              <br />
              happiness :)
              <br />
              Cook like a chef
              </h1>
            <span>
            <p>Start a delicious journey, where tasty discoveries
            <br />
            and flavorful creations await your every craving.
            </p>
            {!user ? (
          <button className="signup-button">
            <img src={GoogleImage} alt="google-image" width={30} />
            Sign up with Google
          </button>
        ) : (
          <p>Welcome, {user.displayName}!</p>
        )}
           

            </span>
            </section>
            <figure className="img-section">
                <img src={FoodImage} alt="food-image" width={700} />  
            </figure>
            </div>
            
        </>
    )
}