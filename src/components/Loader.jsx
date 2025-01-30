import "../styles/loader.css";

export const Loader = () => {
  return (
    <div className="loader">
      <span style={{ color: "grey", fontSize: "1.2rem" }}>Loading</span>
      <div className="spinner"></div>
    </div>
  );
};
