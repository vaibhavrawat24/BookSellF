import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Book website"}>
      <div className="row about" style={{ fontFamily: 'Calisto MT, serif' }}>
      <h1 className='text-center'>BookSellF</h1>
          <br />
          <img
            src="/images/aboutus.jpg"
            alt="aboutus"
            style={{ width: "400px", marginLeft:'170px' }}
          />
          <p className="text-center">
          Welcome to BookSellf, your trusted destination for all things books! Established with a passion for literature and a commitment to sustainability, we are dedicated to providing you with a seamless experience whether you're buying, selling, renting books, or participating in our paper recycling initiative.
          </p>
          <p>
          At BookSellf, we believe in the power of stories to inspire, educate, and entertain. Our platform is designed to cater to book enthusiasts, students, educators, and anyone who cherishes the written word. Whether you're in search of a new adventure within the pages of a book, seeking a cost-effective way to access course materials, or looking to give your pre-loved books a new home, we have you covered.
          </p>
        
      </div>
    </Layout>
  );
};

Layout.defaultProps={
  title:'BookSellF',
  description: 'book website',
  keywords:'book sell,resell,rent,recycle',
  author:'vaibhav',
};

export default About;