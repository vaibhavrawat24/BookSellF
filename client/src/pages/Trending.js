import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "./../components/Layout/Layout";
import { AiOutlineReload } from "react-icons/ai";
import "../styles/homepage.css";
import "../styles/responsive.css";
import { Link } from "react-router-dom";

const Trending = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const showModal = () => {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
  };

  const closeModal = () => {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  };

  const handleOutsideClick = (event) => {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
    getAllCategory();
    getTotal();
  }, []);

  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"All Products - Best offers "}>
      <div
        className="filter-container"
        style={{ fontFamily: "Calisto MT, serif" }}
      >
        <div
          className="col-md-3 filters-new"
          style={{
            border: "1px solid lightgrey",
            borderRadius: "10px",
            marginTop: "80px",
            marginLeft: "20px",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
        >
          <h2
            style={{
              marginTop: "20px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Trending books
          </h2>
          <img
            src="https://i.pinimg.com/736x/8f/da/f2/8fdaf2f632dc5ec329c8c6f2b2a8a8d6.jpg"
            alt="bookimg"
            className="newimg"
          />

          <h3
            className="treasure"
            style={{ marginTop: "8px", marginLeft: "18px" }}
          >
            Why Trending Books Matter
          </h3>
          <h5 style={{ marginLeft: "18px" }}>
            Don’t get stuck in last year’s books! Keep your reading list fresh
            by staying updated with recent releases and current bestsellers.
          </h5>
        </div>

        <div className="main-container">
          <div className="d-flex flex-wrap justify-content">
            {products?.map((p) => (
              <div
                className="card m-2"
                key={p._id}
                onClick={() => navigate(`/product/${p.slug}`)}
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

                    <h5
                      className="card-title"
                      style={{
                        maxHeight: "2.3em",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {p.name}
                    </h5>

                    <h5 className="card-title card-price">
                      {p.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "INR",
                      })}
                    </h5>
                  </div>

                  <div className="card-name-price">
                    {/* <button
                      className="btn-more btn-info ms-1"
                      style={{
                        backgroundColor: "#3778C2",
                        border: "#3778C2",
                      }}
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button> */}
                    <button
                      className="btn-more btn-dark ms-1"
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
                        toast.success("Item Added to cart!");
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn loadmore"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? (
                  "Loading ..."
                ) : (
                  <>
                    {" "}
                    Loadmore <AiOutlineReload />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Trending;
