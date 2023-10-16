import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuthor from "../hooks/useAuthor";
import Layout from "../components/Layout/Layout";
import "../styles/homepage.css";
import "../styles/responsive.css";

const Authors = () => {
  const authors = useAuthor();
  return (
    <Layout title={"All authors"}>
      <div
        className="container"
        style={{ fontFamily: "Calisto MT, serif", marginTop: "100px" }}
      >
        <h3 className="category centered-text">All Authors</h3>
        <hr />
        <div className="category row container">
          {authors.map((c) => (
            <div className="col-md-4 mt-5 mb-3 gx-3 gy-3" key={c._id}>
              <div className="card-category">
                <Link to={`/author/${c.slug}`} className="btn cat-btn">
                  {c.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Authors;
