import { NavLink } from "react-router-dom";
import TitleIcon from "../assets/titleicon.png";
import "../styles/header.css";
import { useAuth } from "../utils/AuthContext";

export const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <>
      <header className="header-wrapper">
        <NavLink to="/">
          <img src={TitleIcon} alt="title-icon" width={130} loading="lazy" />
        </NavLink>
        <nav className="nav-wrapper">
          <NavLink
            className={({ isActive }) =>
              isActive ? "navlink active" : "navlink"
            }
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navlink active" : "navlink"
            }
            to="/categories"
          >
            Categories
          </NavLink>

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
            <button className="login-button">Login</button>
          )}
        </nav>
      </header>
    </>
  );
};
