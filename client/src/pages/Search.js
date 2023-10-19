import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useSearch } from "../context/search";
import { useNavigate } from "react-router-dom";
import "../styles/homepage.css";
import "../styles/responsive.css";

const Search = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();
  const [authors, setAuthors] = useState([]);

  const getAllAuthor = async () => {
    try {
      const { data } = await axios.get("/api/v1/author/get-author");
      if (data?.success) {
        setAuthors(data?.author);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllAuthor();
  }, []);

  return (
    <Layout title={"Search results"}>
      <div className="container" style={{ fontFamily: "Calisto MT, serif" }}>
        <div className="search text-center">
          <h4>Search Results for "{values.temp}"</h4>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `(${values?.results.length} result found)`}
          </h6>
          <hr />
          <div className="d-flex flex-wrap">
            {values?.results.map((p) => (
              <div className="category card m-2" style={{ width: "18rem" }}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <div class="popup">
                    {authors
                      .filter((author) => author._id === p.author)
                      .map((author) => (
                        <div key={author._id}>{author.name}</div>
                      ))}
                  </div>
                  <h5 className="card-title">{p.name}</h5>
                  <h5 className="card-title card-price">
                    {p.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "INR",
                    })}
                  </h5>
                  <button
                    class="details btn btn-info ms-1"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
