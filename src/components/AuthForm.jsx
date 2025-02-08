import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import "../styles/authform.css";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import "bootstrap/dist/css/bootstrap.css";

export const AuthForm = ({
  title,
  subtitle,
  buttonText,
  linkText,
  onSubmit,
  onGoogleClick,
  error,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const showGoogleBtn = linkText.includes("Sign Up");
  const text = linkText.split("?")[0];
  const link = linkText.split("?")[1];

  const linkPath = linkText.includes("Login") ? "/login" : "/signup";

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  const handleGoogleClick = (e) => {
    e.preventDefault();
    onGoogleClick();
  };

  return (
    <>
      <div className="form-container">
        <div className="form-wrapper">
          <section className="title-section">
            <h2 className="form-header">{title}</h2>
            <span className="form-subtitle">{subtitle}</span>
          </section>
          <section className="error-section">
            {error && <Alert variant="danger">{error}</Alert>}
          </section>
          <form onSubmit={handleSubmit}>
            <section className="email-section">
              <MdEmail />
              <input
                className="email-input"
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </section>
            <section className="password-section">
              <CiLock />
              <input
                className="password-input"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </section>
            <button type="submit" className="submit-btn">
              {buttonText}
            </button>
          </form>
          {showGoogleBtn && (
            <section className="googlebtn-section">
              <span>OR</span>
              <button className="google-btn" onClick={handleGoogleClick}>
                <FcGoogle />
                <span>Continue with Google</span>
              </button>
            </section>
          )}

          <span className="link-text">
            {text}
            {"?"}
            <Link
              to={linkPath}
              className="link"
              onClick={(e) => e.stopPropagation()}
            >
              {link}
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};
