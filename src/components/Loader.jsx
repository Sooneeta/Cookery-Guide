import "../styles/loader.css";

export const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <span
        style={{ color: "grey", fontSize: "1.4rem", fontFamily: "sans-serif" }}
      >
        Loading
      </span>
    </div>
  );
};
