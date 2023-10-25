import React from "react";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div style={{ fontFamily: "Calisto MT, serif" }}>
      <div id="div1" className="div-container">
        <div className="container hey">
          <div className="container which">
            <h1 style={{ color: "#780000", fontWeight: "bold" }}>BookSellF</h1>
            <h2 style={{ color: "#780000" }}>Unleash your Inner Bookworms</h2>
            <h2 style={{ color: "#003049" }}>
              Join the paper recycling movement and protect forests around the
              globe. Here’s your chance to make a difference!
            </h2>
            <div className="container us">
              <button
                style={{
                  backgroundColor: "#003049",
                  padding: "10px 20px 10px 20px",
                  borderRadius: "9999px",
                  border: "none",
                  margin: 0,
                }}
                onClick={() => navigate(`/home`)}
              >
                Explore
              </button>
              <button
                style={{
                  marginLeft: "20px",
                  backgroundColor: "#780000",
                  padding: "10px 20px 10px 20px",
                  borderRadius: "9999px",
                  border: "none",
                  margin: 0,
                }}
                onClick={() => navigate(`/recycle`)}
              >
                Recycle
              </button>
            </div>
          </div>
          <div className="bigimg"></div>
        </div>
      </div>
      <div id="div2" className="div-container">
        <div className="container big-div">
          <div className="small-div1" onClick={() => navigate(`/newarrival`)}>
            <div className="smallimg1"></div>
            <div style={{ marginLeft: "120px", marginTop: "10px" }}>
              <h5>New Release Galore</h5>
              <p>Discover fresh reads</p>
            </div>
          </div>
          <div className="small-div2" onClick={() => navigate(`/trending`)}>
            <div className="smallimg2"></div>
            <div style={{ marginLeft: "120px", marginTop: "10px" }}>
              <h5>Trending all over</h5>
              <p>Book Treasures Await</p>
            </div>
          </div>
          <div className="small-div3" onClick={() => navigate(`/rent`)}>
            <div className="smallimg3"></div>
            <div style={{ marginLeft: "120px", marginTop: "10px" }}>
              <h5>Rent and Return</h5>
              <p>Never Stop Reading</p>
            </div>
          </div>
        </div>
      </div>
      <div id="div3" className="div-container">
        <div className="container">
          <h1>Why Recycle Paper Waste?</h1>
          <div className="container v">
            <p>
              Decrease your carbon footprint and put a stop to deforestation.
              Take a stand for the environment and future generations.
            </p>
            <p>
              Reducing paper waste makes for cleaner air, water, and soil. It’s
              a win-win situation for everyone, so let’s get to it!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
