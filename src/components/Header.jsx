import { NavLink } from "react-router-dom";
import TitleIcon from "../assets/titleicon.png";
import "../styles/header.css";
import { useUserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

export const Header = () => {
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    console.log("logout button is clicked");
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

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
                // src={user.photoURL || "default-profile.png"}
                src={user.photoURL ? user.photoURL : <FaUserCircle />}
                alt="profile"
                className="profile-pic"
              />

              <button className="logout-button" onClick={handleLogout}>
                <MdOutlineLogout
                  size="1.5rem"
                  title="Click to Logout!"
                  color="gray"
                />
              </button>
            </div>
          ) : (
            <button className="login-button" onClick={handleLogin}>
              Login
            </button>
          )}
        </nav>
      </header>
    </>
  );
};
