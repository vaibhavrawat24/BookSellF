import Layout from "../components/Layout/Layout";
import React from "react";
import "../styles/recycle.css";
import "../styles/homepage.css";

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
      <div className="recycle-page">

        {/* ── Hero ── */}
        <div className="recycle-hero">
          <div className="recycle-hero-image">
            <img
              src="https://i.pinimg.com/originals/d9/2f/b7/d92fb73f34db5c033392416950c98369.jpg"
              alt="Paper recycling"
              loading="lazy"
            />
          </div>

          <div className="recycle-hero-content">
            <span className="recycle-tag">♻ Eco Initiative</span>
            <h1>Turn Your Old Paper into New Possibilities</h1>

            <div className="recycle-points">
              <div className="recycle-point">
                <div className="recycle-point-icon">🏠</div>
                <p>Doorstep pickup - just leave your paper waste outside and we'll collect it.</p>
              </div>
              <div className="recycle-point">
                <div className="recycle-point-icon">🔄</div>
                <p>We transport everything to a certified recycling facility near you.</p>
              </div>
              <div className="recycle-point">
                <div className="recycle-point-icon">🌱</div>
                <p>Your paper gets a new life as newspaper, cartons, tissue, and more.</p>
              </div>
              <div className="recycle-point">
                <div className="recycle-point-icon">🌍</div>
                <p>Join thousands saving trees and making a real impact for our planet.</p>
              </div>
            </div>

            <button className="btn-recycle" onClick={showModal}>
              Recycle Now
            </button>
          </div>
        </div>

        {/* ── Stats ── */}
        <div className="recycle-stats">
          <div className="recycle-stats-inner">
            <div className="recycle-stat">
              <h3>♻️</h3>
              <p>Kg of paper recycled</p>
            </div>
            <div className="recycle-stat">
              <h3>😊</h3>
              <p>Happy customers</p>
            </div>
            <div className="recycle-stat">
              <h3>🌳</h3>
              <p>Trees saved</p>
            </div>
            <div className="recycle-stat">
              <h3>🏠</h3>
              <p>Doorstep pickup</p>
            </div>
          </div>
        </div>

        {/* ── How it works ── */}
        <div className="recycle-steps">
          <h2>How It Works</h2>
          <div className="recycle-steps-grid">
            <div className="recycle-step-card">
              <div className="recycle-step-number">1</div>
              <h4>Schedule a Pickup</h4>
              <p>Request a pickup through our app or website at your preferred time.</p>
            </div>
            <div className="recycle-step-card">
              <div className="recycle-step-number">2</div>
              <h4>Leave it at the Door</h4>
              <p>Place your paper waste at your doorstep - our team handles the rest.</p>
            </div>
            <div className="recycle-step-card">
              <div className="recycle-step-number">3</div>
              <h4>We Recycle It</h4>
              <p>Your paper is transported to a facility and turned into new products.</p>
            </div>
          </div>
        </div>

        {/* ── Modal ── */}
        <div id="myModal" className="modal" onClick={handleOutsideClick}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h5>Coming Soon!</h5>
            <p style={{ marginTop: 12, lineHeight: 1.7, color: "#555" }}>
              We're excited to bring doorstep paper recycling to you. This feature
              is currently under development - stay tuned! In the meantime, explore
              our library and add books to your wishlist.
            </p>
            <p style={{ marginTop: 8, color: "#8d9b6a", fontWeight: 600 }}>
              Thank you for caring about the planet 🌱
            </p>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default Recycle;
