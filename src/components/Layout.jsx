import { Header } from "./Header";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import "../styles/layout.css";

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
      <div className="layout-wrapper">
        {showLayout && <Header />}

        <main
          style={{ padding: showLayout ? "1.2em 1em" : "" }}
          className="main-section"
        >
          {children}
        </main>

        {showLayout && <Footer />}
      </div>
    </>
  );
};
