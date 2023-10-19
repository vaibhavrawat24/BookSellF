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
          <h1 style={{ fontWeight: "bold" }}>Renting Made Simple</h1>
        </div>
        <div class="container recycle">
          <div class="left recycle">
            <img
              className="rentit-img"
              src="https://i.pinimg.com/736x/ef/72/01/ef7201b98f371928cf294dc2e5c560ce.jpg"
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
              Why Rent Books?
            </h1>
            <h5 style={{ fontFamily: "Gloock,Gloock Placeholder, serif" }}>
              Tired of buying expensive books you’ll barely read? BookRent is
              the answer you’ve been seeking! Our vast collection of books
              covers every genre to satisfy your reading cravings. Rent the
              books you love without breaking the bank.
            </h5>
            <br />
            <h5 style={{ fontFamily: "Gloock,Gloock Placeholder, serif" }}>
              Explore an endless library of captivating tales without breaking
              the bank. Renting books allows you to discover new authors and
              genres your heart desires.
            </h5>
            <br />
            <h5 style={{ fontFamily: "Gloock,Gloock Placeholder, serif" }}>
              Ditch the clutter and avoid the dust by renting instead of buying.
              At BookSellF, we help the environment by promoting a more
              sustainable future for book lovers.
            </h5>
            <br />
            <button
              onMouseDown={(event) => {
                event.target.style.transform = "scale(0.95)";
                event.target.style.backgroundColor = "#ff7096";
              }}
              onMouseUp={(event) => {
                event.target.style.transform = "scale(1)";
                event.target.style.backgroundColor = "#ff7096";
                showModal();
              }}
              class="btn btn-secondary ms-1"
              style={{
                borderRadius: "20px",
                width: "400px",
                backgroundColor: "#ff7096",
                border: "#ff7096",

                transform: "scale(1)",
                transition: "transform 0.2s, background-color 0.2s",
              }}
            >
              Rent Now
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
                  <h5>Welcome to our Renting Page!</h5>
                  <h5>
                    {" "}
                    We're excited to have you here. At BookSellF, we're
                    dedicated to bringing you a fantastic selection of books for
                    rent. While the renting feature is not available at this
                    moment, please stay tuned and watch this space. We're
                    working diligently to bring you the best book renting
                    experience. In the meantime, feel free to explore our
                    library and create a wishlist of books you'd like to read
                    once the renting feature goes live.{" "}
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
