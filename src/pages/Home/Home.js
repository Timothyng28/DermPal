import React from "react";
import "./Home.css";
import theme from "../../theme";
import Background from "../../components/Body/Background";

function Home() {
  return (
    <div>
      <Background />
      <div className="intro">
        <h1 style={{ color: theme.palette.primary.main }}>
          Welcome to DermPal
        </h1>
        <p style={{ color: theme.palette.secondary.main }}>
          Your one stop skincare solution
        </p>
      </div>
    </div>
  );
}

export default Home;
