import React, { useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import "../styles/collectionPage.css";

const Policy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <Layout title="Privacy Policy">
      <div className="static-page">
        <div className="static-header">
          <span className="collection-banner-tag">🔒 Legal</span>
          <h1>Privacy Policy</h1>
          <p>Last modified: December 2021</p>
        </div>

        <div className="static-content">
          <div className="policy-body">
            <p>
              This privacy policy describes the personal data collected or generated when you interact
              with BookSellF through our websites, mobile applications, stores, events, or any other
              products or services that form part of our Platform. It also explains how your personal
              data is used, shared, and protected, what choices you have, and how you can contact us.
            </p>
            <p>
              Applicable law and our practices change over time. If we decide to update our privacy
              policy, we will post the changes on our Platform. If we materially change the way in which
              we process your personal data, we will provide you with prior notice, or where legally
              required, request your consent prior to implementing such changes.
            </p>
            <p>
              We welcome questions, comments, and concerns about our privacy policy. If you wish to
              provide feedback or have questions related to your personal data, please contact us at{" "}
              <a href="mailto:rawatvaibhav42@gmail.com">rawatvaibhav42@gmail.com</a>.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
