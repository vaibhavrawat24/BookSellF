import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-header" style={{ fontFamily: "Calisto MT, serif" }}>
      <div className="col-md-6 custom-width">
        <h1>Unleash Your Inner Bookworm</h1>
      </div>
      <div className="col-md-6 product-details-info">
        <div className="head-container"></div>
        <div className="head2-container"></div>
        <div className="head3-container"></div>
        <div className="head4-container"></div>
      </div>
    </div>
  );
};

export default Home;
