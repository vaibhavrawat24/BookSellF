import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useSearch } from "../context/search";
import { useNavigate } from "react-router-dom";
import "../styles/homepage.css";
import "../styles/responsive.css";
import toast from "react-hot-toast";
import { useCart } from "../context/cart";

const Search = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();
  const [authors, setAuthors] = useState([]);
  const [cart, setCart] = useCart();

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
      <div
        className="container mt-3 category"
        style={{ fontFamily: "Calisto MT, serif" }}
      >
        <h4 className="category text-center">
          Search Results for "{values.temp}"
        </h4>
        <h6 className="text-center">
          {values?.results.length < 1
            ? "No Products Found"
            : `(${values?.results.length} result found)`}
        </h6>
        <hr />
        <div className="category col-12">
          <div className="d-flex flex-wrap justify-content">
            {values?.results.map((p) => (
              <div
                className="category card m-2"
                key={p._id}
                onClick={() => navigate(`/product/${p.slug}`)}
                style={{ width: "18rem" }}
              >
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <div className="card-name-price">
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
                  </div>
                  <div className="card-name-price">
                    <button
                      className="btn btn-dark ms-1"
                      style={{
                        backgroundColor: "#EE7789",
                        border: "#EE7789",
                      }}
                      onClick={(event) => {
                        event.stopPropagation();
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added to cart");
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
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
