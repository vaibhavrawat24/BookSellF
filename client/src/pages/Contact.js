import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import "../styles/responsive.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="container" style={{ fontFamily: "Calisto MT, serif" }}>
        <div className="zeeta-box">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            If you have any query or need info about product feel free to reach
            anytime.
          </p>
          <p className="mt-3">
            <BiMailSend /> :{" "}
            <a href="mailto:rawatsuraj9867@gmail.com">
              rawatsuraj9867@gmail.com
            </a>
          </p>
          <p className="mt-3">
            <BiPhoneCall /> :{" "}
            <a href="https://www.linkedin.com/in/vaibhav-singh-rawat-933094234/">
              Linkedin
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
