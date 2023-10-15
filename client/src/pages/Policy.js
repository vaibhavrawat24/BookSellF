import React from "react";
import Layout from "./../components/Layout/Layout";
import "../styles/responsive.css";
import "../styles/homepage.css";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row privacy" style={{ fontFamily: "Calisto MT, serif" }}>
        <div>
          <h1 className="text-center">BookSellF Privacy Policy</h1>
          <br />
          <p>
            This privacy policy describes the personal data collected or
            generated (processed) when you interact with BookSellf through our
            websites (“Sites”), digital experiences, mobile applications, stores
            events, or one of our other products or services, all of which are
            part of our Platform (“Platform”). It also explains how your
            personal data is used, shared and protected, what choices you have
            relating to your personal data and how you can contact us.
          </p>
          <p>
            Applicable law and our practices change over time. If we decide to
            update our privacy policy, we will post the changes on our Platform.
            If we materially change the way in which we process your personal
            data, we will provide you with prior notice, or where legally
            required, request your consent prior to implementing such changes.
            We strongly encourage you to read our privacy policy and keep
            yourself informed of our practices. This privacy policy was last
            modified in Dec 2021.
          </p>
          <p>
            We welcome questions, comments, and concerns about our privacy
            policy and privacy practices. If you wish to provide feedback or if
            you have questions or concerns or wish to exercise your rights
            related to your personal data, please contact us via: (i) the
            “Contact Us” section of our website; or (ii) an email to
            www.help@booksellf.com; or (iii) our Privacy Office at: Booksellf
            Privacy Office, Dehradun. If you contact us with a privacy complaint
            it will be assessed with the aim of resolving the issue in a timely
            and effective manner.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
