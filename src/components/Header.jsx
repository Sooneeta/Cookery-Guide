import { Link } from "react-router-dom"
import TitleIcon from "../assets/titleicon.png";
import "../styles/header.css"
import { useAuth } from "../utils/AuthContext";

export const Header = () => {
    const { user, logOut } = useAuth();
    return(
        <>
        <header className="header-wrapper">
          
          <Link to="/">
          <img src={TitleIcon} alt="title-icon" width={170}/>
          </Link>
          <nav className="nav-wrapper">
          <Link className="navlink" to="/home">Home</Link>
          <Link className="navlink" to="/categories">Categories</Link>
          {user ? (
          <div className="profile-section">
            <img
              src={user.photoURL || "default-profile.png"}
              alt="profile"
              width={40}
              className="profile-pic"
            />
            <button className="logout-button" onClick={logOut}>
              Logout
            </button>
          </div>
        ) : (
          <button className="login-button">
            Login
          </button>
        )}
           </nav>
           </header>
        </>
    )
}