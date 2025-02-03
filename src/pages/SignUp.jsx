import { AuthForm } from "../components/AuthForm";
import { useUserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const SignUp = () => {
  const { signUp } = useUserAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSignUp = async (email, password) => {
    console.log("signing up with:", email, password);
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <AuthForm
      title="Sign Up"
      subtitle="Create your account"
      buttonText="Sign Up"
      linkText="Already have an account? Login"
      onSubmit={handleSignUp}
      error={error}
    />
  );
};
