import { AuthForm } from "../components/AuthForm";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/AuthContext";
import { useState } from "react";

export const Login = () => {
  const navigate = useNavigate();
  const { logIn, googleSignIn } = useUserAuth();
  const [error, setError] = useState("");

  const handleLogin = async (email, password) => {
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <AuthForm
      title="Welcome Back"
      subtitle="Enter your credentials for login"
      buttonText="Login"
      linkText="Don't have an account? Sign Up"
      onSubmit={handleLogin}
      error={error}
      onGoogleClick={handleGoogleSignIn}
    />
  );
};
