import React, { useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import "../styles/collectionPage.css";

const Contact = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <Layout title="Contact Us">
      <div className="static-page">
        <div className="static-header">
          <span className="collection-banner-tag">💬 Get in Touch</span>
          <h1>Contact Us</h1>
          <p>Have a question or feedback? We'd love to hear from you.</p>
        </div>

        <div className="static-content">
          <div className="contact-cards">
            <a href="mailto:rawatvaibhav42@gmail.com" className="contact-card">
              <div className="contact-card-icon">✉️</div>
              <h4>Email</h4>
              <p>rawatvaibhav42@gmail.com</p>
            </a>
            <a href="https://www.linkedin.com/in/vaibhav-singh-rawat-933094234/" target="_blank" rel="noreferrer" className="contact-card">
              <div className="contact-card-icon">💼</div>
              <h4>LinkedIn</h4>
              <p>vaibhav-singh-rawat</p>
            </a>
            <a href="https://vaibhavdev.qzz.io" target="_blank" rel="noreferrer" className="contact-card">
              <div className="contact-card-icon">🌐</div>
              <h4>Portfolio</h4>
              <p>vaibhavdev.qzz.io</p>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
