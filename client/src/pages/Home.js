import React from "react";
import "../styles/Home.css";
import "../styles/responsive.css";
import { useNavigate } from "react-router-dom";
import { InfoCircleOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div style={{ fontFamily: "Calisto MT, serif" }}>
      <div id="div1" className="div-container">
        <div className="container hey">
          <div className="container which">
            <h1 style={{ color: "#780000", fontWeight: "bold" }}>
              Welcome to BookSellF!
            </h1>
            <h2 style={{ color: "#780000" }}>Unleash your Inner Bookworms</h2>
            <h5 style={{ color: "#003049" }}>
              {" "}
              Our vast collection of books covers every genre to satisfy your
              reading cravings.{" "}
            </h5>
            <hr />
            <h2 style={{ color: "#780000" }}>
              Tired of buying expensive books you’ll barely read?
            </h2>
            <h5 style={{ color: "#003049" }}>
              {" "}
              Rent the books you love without breaking the bank.
            </h5>
            <hr />
            <div className="container us">
              <button
                onMouseDown={(event) => {
                  event.target.style.transform = "scale(0.95)";
                  event.target.style.backgroundColor = "#003049";
                }}
                onMouseUp={(event) => {
                  event.target.style.transform = "scale(0.95)";
                  event.target.style.backgroundColor = "#003049";
                }}
                style={{
                  backgroundColor: "#003049",
                  padding: "10px 20px 10px 20px",
                  borderRadius: "9999px",
                  border: "none",
                  margin: 0,
                  marginRight: "10px",
                }}
                onClick={() => navigate(`/home`)}
              >
                Explore
              </button>
              <button
                onMouseDown={(event) => {
                  event.target.style.transform = "scale(0.95)";
                  event.target.style.backgroundColor = "#780000";
                }}
                onMouseUp={(event) => {
                  event.target.style.transform = "scale(1)";
                  event.target.style.backgroundColor = "#780000";
                }}
                style={{
                  marginLeft: "20px",
                  backgroundColor: "#780000",
                  padding: "10px 20px 10px 20px",
                  borderRadius: "9999px",
                  border: "none",
                  margin: 0,
                }}
                onClick={() => navigate(`/login`)}
              >
                Login
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
        <div
          className="container last"
          style={{
            width: "700px",
          }}
        >
          <h1 style={{ textAlign: "center" }}>Why Recycle Paper Waste?</h1>
          <div className="container v">
            <p style={{ marginRight: "10px" }}>
              Decrease your carbon footprint and put a stop to deforestation.
              Take a stand for the environment and future generations.
            </p>
            <p>
              Reducing paper waste makes for cleaner air, water, and soil. It’s
              a win-win situation for everyone, so let’s get to it!
            </p>
          </div>
          <div
            className="container get"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <br />
            <h1 style={{ textAlign: "center" }}>Get Started Now!</h1>
            <h5>
              Jump on the paper recycling bandwagon and start making a positive
              impact today. You know you want to!
            </h5>
            <br />
            <button
              onMouseDown={(event) => {
                event.target.style.transform = "scale(0.95)";
                event.target.style.backgroundColor = "#000000";
              }}
              onMouseUp={(event) => {
                event.target.style.transform = "scale(1)";
                event.target.style.backgroundColor = "#000000";
              }}
              style={{
                height: "10px",
                backgroundColor: "#000000",
                padding: "15px 15px 15px 15px",
                borderRadius: "8px",
                border: "none",
                margin: 0,
                lineHeight: "0px",
              }}
              onClick={() => navigate(`/recycle`)}
            >
              Recycle
            </button>
          </div>
          <br />
          <br />

          <div
            className="container next"
            style={{
              display: "flex",

              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{ cursor: "pointer", marginRight: "20px" }}
              onClick={() => navigate(`/about`)}
            >
              About
            </p>

            <p
              style={{ cursor: "pointer", marginRight: "20px" }}
              onClick={() => navigate(`/contact`)}
            >
              Contact
            </p>

            <p
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/policy`)}
            >
              {" "}
              Privacy policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
