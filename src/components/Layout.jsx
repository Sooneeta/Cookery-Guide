import { Header } from "./Header";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const Layout = ({ children }) => {
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const isAuthPage =
      location.pathname === "/login" || location.pathname === "/signup";
    setShowHeader(!isAuthPage);
  }, [location.pathname]);

  return (
    <>
      {showHeader && <Header />}

      {children}
    </>
  );
};
