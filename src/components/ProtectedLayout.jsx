import { Navigate, Outlet } from "react-router-dom";
import { useUserAuth } from "../context/AuthContext";

export const ProtectedLayout = () => {
  const { user } = useUserAuth();

  return user ? <Outlet /> : <Navigate to="/" />;
};
