import { NavLink } from "react-router-dom";
import TitleIcon from "../assets/titleicon.png";
import "../styles/header.css";
import { useUserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [showSearchField, setShowSearchField] = useState(false);
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setShowSearchField(false);
    } else {
      setShowSearchField(true);
    }
  }, [location.pathname]);

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

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      setSearchParams({ s: searchValue });
      navigate(`/search?s=${encodeURIComponent(searchValue)}`);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <header className="header-wrapper">
        <NavLink to="/" style={{ flexBasis: "33.33%" }}>
          <img src={TitleIcon} alt="title-icon" width={130} loading="lazy" />
        </NavLink>
        {showSearchField && (
          <section className="search-container">
            <FaSearch id="search-icon" />
            <input
              className="search-input"
              type="text"
              placeholder="Search meals..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleKeyDown}
            ></input>
          </section>
        )}

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
