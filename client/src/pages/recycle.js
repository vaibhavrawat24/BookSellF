import Layout from "../components/Layout/Layout";
import React from "react";
import "../styles/responsive.css";

const Recycle = () => {
  const showModal = () => {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
  };

  const closeModal = () => {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  };

  const handleOutsideClick = (event) => {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  return (
    <Layout>
      <div className="recycle-main-div">
        <div class="header recycle">
          <h1 style={{ fontWeight: "bold" }}>Effortless Paper Recycling</h1>
        </div>
        <div class="container recycle">
          <div class="left recycle">
            <img
              className="recycle-img"
              src="https://i.pinimg.com/originals/d9/2f/b7/d92fb73f34db5c033392416950c98369.jpg"
              alt="img"
            />
          </div>
          <div class="right recycle">
            <h1
              style={{
                fontFamily: "Gloock,Gloock Placeholder, serif",
                fontWeight: "bold",
              }}
            >
              Turn Your Old Paper into New Possibilities
            </h1>
            <h5 style={{ fontFamily: "Gloock,Gloock Placeholder, serif" }}>
              Welcome to our amazing doorstep paper recycling service! Your old
              papers will be transformed into something new, and you won't even
              have to leave your home.
            </h5>
            <br />
            <h5 style={{ fontFamily: "Gloock,Gloock Placeholder, serif" }}>
              We take care of all the heavy lifting, literally! Just place your
              paper waste at the doorstep and our team will transport it to a
              recycling facility.
            </h5>
            <br />
            <h5 style={{ fontFamily: "Gloock,Gloock Placeholder, serif" }}>
              Give your paper waste a new life by recycling it into amazing
              products like fresh newspaper, cartons, tissue, and more.
            </h5>
            <br />
            <h5 style={{ fontFamily: "Gloock,Gloock Placeholder, serif" }}>
              Join us and make a difference by recycling your paper and saving
              trees. It's super easy and beneficial for our planet!
            </h5>
            <br />
            <button
              onMouseDown={(event) => {
                event.target.style.transform = "scale(0.95)";
                event.target.style.backgroundColor = "#8D9B6A";
              }}
              onMouseUp={(event) => {
                event.target.style.transform = "scale(1)";
                event.target.style.backgroundColor = "#8D9B6A";
                showModal();
              }}
              class="btn btn-secondary ms-1"
              style={{
                borderRadius: "20px",
                width: "400px",
                backgroundColor: "#8D9B6A",
                border: "#8D9B6A",

                transform: "scale(1)",
                transition: "transform 0.2s, background-color 0.2s",
              }}
            >
              Recycle Now
            </button>
            <div
              id="myModal"
              className="modal"
              onClick={handleOutsideClick}
              style={{ fontFamily: "Calisto MT, serif" }}
            >
              <div className="modal-content">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <div>
                  <h5>Welcome to our Recycle Page!</h5>
                  <h5>
                    {" "}
                    We're excited to have you here. At BookSellF, we pick up and
                    recycle paper from your doorstep. While the recycling
                    feature is not available at this moment, please stay tuned
                    and watch this space. We're working diligently to bring you
                    the best recycling experience. In the meantime, feel free to
                    explore our library and have a look at other books while
                    recycling feature goes live.{" "}
                  </h5>

                  <h5>
                    We appreciate your patience and look forward to serving you
                    soon. Thank you for your interest.
                  </h5>
                  <h5>Happy reading!</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Recycle;
