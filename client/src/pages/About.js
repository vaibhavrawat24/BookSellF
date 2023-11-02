import React from "react";
import Layout from "./../components/Layout/Layout";
import "../styles/responsive.css";
import "../styles/homepage.css";

const About = () => {
  return (
    <Layout title={"About us - Book website"}>
      <div>hey</div>
    </Layout>
  );
};

Layout.defaultProps = {
  title: "BookSellF",
  description: "book website",
  keywords: "book sell,resell,rent,recycle",
  author: "vaibhav",
};

export default About;
