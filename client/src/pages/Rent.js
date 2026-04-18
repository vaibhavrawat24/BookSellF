import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import "../styles/homepage.css";
import "../styles/collectionPage.css";

const Rent = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Layout title="Rent a Book">
      <div className="rent-page">

        {/* ── Hero ── */}
        <div className="rent-hero">
          <div className="rent-hero-image">
            <img
              src="https://i.pinimg.com/736x/ef/72/01/ef7201b98f371928cf294dc2e5c560ce.jpg"
              alt="Rent books"
              loading="lazy"
            />
          </div>

          <div className="rent-hero-content">
            <span className="rent-tag">📚 Rent It</span>
            <h1>Why Buy When You Can Rent?</h1>

            <div className="rent-points">
              <div className="rent-point">
                <div className="rent-point-icon">💸</div>
                <p>Save money - rent the books you love without breaking the bank.</p>
              </div>
              <div className="rent-point">
                <div className="rent-point-icon">📖</div>
                <p>Explore an endless library across every genre your heart desires.</p>
              </div>
              <div className="rent-point">
                <div className="rent-point-icon">🏠</div>
                <p>Doorstep delivery and pickup - no hassle, no clutter.</p>
              </div>
              <div className="rent-point">
                <div className="rent-point-icon">🌍</div>
                <p>Rent instead of buy and help us build a sustainable future.</p>
              </div>
            </div>

            <button className="btn-rent-now" onClick={() => setShowModal(true)}>
              Rent Now
            </button>
          </div>
        </div>

        {/* ── Features ── */}
        <div className="rent-features">
          <div className="rent-features-inner">
            <div className="rent-feature-card">
              <div className="rent-feature-icon">⚡</div>
              <h4>Fast Delivery</h4>
              <p>Get your book delivered within 24 hours of placing a rental request.</p>
            </div>
            <div className="rent-feature-card">
              <div className="rent-feature-icon">🔄</div>
              <h4>Easy Returns</h4>
              <p>We pick up the book from your doorstep when you're done reading.</p>
            </div>
            <div className="rent-feature-card">
              <div className="rent-feature-icon">💰</div>
              <h4>Affordable Plans</h4>
              <p>Flexible rental periods with prices that fit every budget.</p>
            </div>
          </div>
        </div>

        {/* ── Modal ── */}
        {showModal && (
          <div className="modal" style={{ display: "block" }} onClick={(e) => e.target === e.currentTarget && setShowModal(false)}>
            <div className="modal-content">
              <span className="close" onClick={() => setShowModal(false)}>&times;</span>
              <h5>Coming Soon!</h5>
              <p style={{ marginTop: 12, lineHeight: 1.7, color: "#555" }}>
                Book renting is currently under development. Stay tuned - we're working hard
                to bring you the best renting experience. In the meantime, explore our library
                and build a wishlist!
              </p>
              <p style={{ marginTop: 8, color: "#ee7879", fontWeight: 600 }}>
                Thank you for your patience 📚
              </p>
            </div>
          </div>
        )}

      </div>
    </Layout>
  );
};

export default Rent;
