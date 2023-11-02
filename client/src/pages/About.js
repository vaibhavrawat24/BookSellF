import React from "react";
import "../styles/Home.css";
import "../styles/responsive.css";
import "../styles/homepage.css";
import { useNavigate } from "react-router-dom";
import Layout from "./../components/Layout/Layout";

const About = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div style={{ fontFamily: "Calisto MT, serif" }}>
        <div id="div1no" className="div-container">
          <div className="container hey">
            <div
              className="container which"
              // style={{ width: "400px", alignContent: "start" }}
            >
              <h1 style={{ color: "#780000", fontWeight: "bold" }}>
                Meet the Creator
              </h1>
              <h2 style={{ color: "#780000" }}>
                Ever wondered who’s behind this spectacular project?
              </h2>
              <h5 style={{ color: "#003049" }}>
                {" "}
                Say hello to Vaibhav, who's on his mission to make the world of
                web a better place.
              </h5>

              <h5 style={{ color: "#003049" }}>
                He’s built this masterpiece from scratch, pouring his heart,
                soul, and a whole lot of{" "}
              </h5>
              <h5 style={{ color: "#003049" }}> caffeine into the project.</h5>
            </div>
            {/* <div className="bigimg"></div> */}
          </div>
        </div>
        <div
          id="div2"
          className="div-container"
          style={{ backgroundColor: "#153243" }}
        >
          <div
            className="container last"
            style={{
              width: "950px",
            }}
          >
            <h1 style={{ textAlign: "center" }}>Why create BookSellF?</h1>
            <div className="container v">
              <p style={{ marginRight: "30px" }}>
                In a world saturated with mundane websites and uninspiring
                layouts, I created this platform with one simple mission in
                mind: to foster a community of book lovers, both seasoned and
                new, and to provide them with a seamless, enjoyable, and
                enriching online book-buying and renting experience.
              </p>

              <p>
                Every day, countless sheets of paper, each with its own unique
                story, it seemed such a waste of potential and a source of
                unnecessary harm to the environment. By offering a Paper
                Recycling from Doorstep service, my aim was to transform the act
                of paper disposal into an opportunity for responsible,
                sustainable action.
              </p>
            </div>
          </div>
        </div>
        <div
          id="div3"
          className="div-container"
          style={{ backgroundColor: "#b4b8ab" }}
        >
          <div className="container yousef">
            <h1 style={{ color: "black", fontWeight: "bold" }}>
              Connect with the creator!
            </h1>
            <h4 style={{ color: "black" }}>
              Let's connect on socials and continue the bookish journey
              together!
            </h4>
            <br />
            <h3 style={{ color: "black" }}>Find me</h3>
            <br />
            <a
              href="https://www.linkedin.com/in/vaibhav-singh-rawat-933094234/"
              style={{ textDecoration: "none", color: "black" }}
            >
              Linkedin
            </a>
            <hr />
            <a
              href="https://linktr.ee/rawatvaibhav24"
              style={{ textDecoration: "none", color: "black" }}
            >
              Linktree
            </a>
            <hr />
            <a
              href="https://github.com/vaibhavrawat24"
              style={{ textDecoration: "none", color: "black" }}
            >
              Github
            </a>
            <hr />
            <a
              href="mailto:rawatsuraj9867@gmail.com"
              style={{ textDecoration: "none", color: "black" }}
            >
              Mail me
            </a>
            <hr />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
