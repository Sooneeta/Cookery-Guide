import { Header } from "./Header";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./Footer";

export const Layout = ({ children }) => {
  const location = useLocation();
  const [showLayout, setShowLayout] = useState(true);

  useEffect(() => {
    const isAuthPage =
      location.pathname === "/login" || location.pathname === "/signup";
    setShowLayout(!isAuthPage);
  }, [location.pathname]);

  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        {showLayout && <Header />}

        <main style={{ flex: 1 }}>{children}</main>

        {showLayout && <Footer />}
      </div>
    </>
  );
};
