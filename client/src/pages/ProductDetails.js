import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/homepage.css";
import "../styles/responsive.css";

import toast from "react-hot-toast";
import { useCart } from "../context/cart";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [AuthorRelatedProducts, setAuthorRelatedProducts] = useState([]);
  const [cart, setCart] = useCart();
  const [authors, setAuthors] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");

  const addReviewHandler = async (e, pid) => {
    e.preventDefault();

    let review = {
      pid: product,
      rating: rating,
      description: description,
    };
    try {
      const reviewData = new FormData();

      reviewData.append("product_id", product);
      reviewData.append("rating", rating);
      reviewData.append("description", description);
      const { data } = axios.post(`/api/v1/product/addReview/${pid}`, review);

      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("review Created Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  const { pid } = useParams();

  const getSingleReviewData = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/getProductReviews/${pid}`
      );

      setReviews(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleReviewData();
  }, [pid]);

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

  const showReviewModal = () => {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
  };

  const closeReviewModal = () => {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  };

  const handleOutsideClickReview = (event) => {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
      getAuthorSimilarProduct(data?.product._id, data?.product.author._id);
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
  }, []);
  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  const getAuthorSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/author-related-product/${pid}/${cid}`
      );
      setAuthorRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div
        className="row container product-details"
        style={{ fontFamily: "Calisto MT, serif" }}
      >
        <div className="col-md-6 custom-width">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="img-fluid"
            alt={product.name}
            // width={"300spx"}
            // height={"300px"}
            // style={{ width: "280px", height: "380px", marginRight: "200px" }}
          />
        </div>
        <div className="col-md-6 product-details-info">
          <hr />
          <h6 style={{ fontSize: "18px" }}>
            {" "}
            <span style={{ fontWeight: "bold" }}>Name:</span> {product.name}
          </h6>{" "}
          <Link
            to={`/author/${product?.author?.slug}`}
            className="text"
            style={{ color: "black", textDecoration: "none" }}
          >
            <h6
              className="info-section"
              style={{ marginTop: "15px", fontSize: "18px" }}
            >
              <span style={{ fontWeight: "bold" }}>Author:</span>{" "}
              <span style={{ textDecoration: "underline" }}>
                {product?.author?.name}
              </span>
            </h6>
          </Link>
          <Link
            to={`/category/${product?.category?.slug}`}
            className="text"
            style={{ color: "black", textDecoration: "none" }}
          >
            <h6
              className="info-section"
              style={{ marginTop: "15px", fontSize: "18px" }}
            >
              <span style={{ fontWeight: "bold" }}>Genre:</span>{" "}
              <span style={{ textDecoration: "underline" }}>
                {product?.category?.name}
              </span>
            </h6>
          </Link>
          <h6 style={{ marginTop: "15px", fontSize: "18px" }}>
            <span style={{ fontWeight: "bold" }}>Description:</span>{" "}
            {product.description}
          </h6>{" "}
          <h6 style={{ marginTop: "18px", fontSize: "18px" }}>
            <span style={{ fontWeight: "bold" }}>Price :</span>
            {product?.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "INR",
            })}
          </h6>{" "}
          <h6
            onClick={showReviewModal}
            style={{ textAlign: "center", textDecoration: "underline" }}
          >
            Read/Post Reviews
          </h6>
          <div
            id="myModal"
            className="modal"
            onClick={handleOutsideClickReview}
            style={{ fontFamily: "Calisto MT, serif" }}
          >
            <div className="modal-content">
              <span className="close" onClick={closeReviewModal}>
                &times;
              </span>
              <div>
                <form onSubmit={addReviewHandler}>
                  <div className="mb-3" controlId="rating">
                    <label>Rating</label>
                    <input
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                      type="number"
                    />
                  </div>

                  <div className="mb-3" controlId="description">
                    <label>Description</label>
                    <input
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      as="textarea"
                    />
                  </div>

                  <button variant="primary" type="submit">
                    Add Review
                  </button>
                </form>
                <h2>Product Reviews</h2>
                <h5>Product Reviews</h5>
                <hr />

                {reviews.length > 0 ? (
                  reviews.map((review) => {
                    return (
                      <div key={review._id}>
                        <p>Rating: {review.rating}</p>
                        <p>Description: {review.description}</p>
                      </div>
                    );
                  })
                ) : (
                  <p>No reviews available.</p>
                )}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <button
              onMouseDown={(event) => {
                event.target.style.transform = "scale(0.95)";
                event.target.style.backgroundColor = "#8D9B6A";
              }}
              onMouseUp={(event) => {
                event.target.style.transform = "scale(1)";
                event.target.style.backgroundColor = "#8D9B6A";
                showModal();
              }}
              class="btn btn-secondary ms-1"
              style={{
                backgroundColor: "#8D9B6A",
                border: "#8D9B6A",
                height: "35px",
                marginTop: "25px",
                transform: "scale(1)",
                transition: "transform 0.2s, background-color 0.2s",
              }}
            >
              Rent It
            </button>
            <div
              id="myModal"
              className="modal"
              onClick={handleOutsideClick}
              style={{ fontFamily: "Calisto MT, serif" }}
            >
              <div className="modal-content">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <div>
                  <h5>Welcome to our Renting Page!</h5>
                  <h5>
                    {" "}
                    We're excited to have you here. At BookSellF, we're
                    dedicated to bringing you a fantastic selection of books for
                    rent. While the renting feature is not available at this
                    moment, please stay tuned and watch this space. We're
                    working diligently to bring you the best book renting
                    experience. In the meantime, feel free to explore our
                    library and create a wishlist of books you'd like to read
                    once the renting feature goes live.{" "}
                  </h5>

                  <h5>
                    We appreciate your patience and look forward to serving you
                    soon. Thank you for your interest.
                  </h5>
                  <h5>Happy reading!</h5>
                </div>
              </div>
            </div>
            <button
              onMouseDown={(event) => {
                event.target.style.transform = "scale(0.95)";
                event.target.style.backgroundColor = "#EE7789";
              }}
              onMouseUp={(event) => {
                event.target.style.transform = "scale(1)";
                event.target.style.backgroundColor = "#EE7789";
              }}
              class="btn btn-secondary ms-1"
              style={{
                backgroundColor: "#EE7789",
                border: "#EE7789",
                marginTop: "25px",
                height: "35px",
                transform: "scale(1)",
                transition: "transform 0.2s, background-color 0.2s",
              }}
              onClick={(event) => {
                event.stopPropagation();
                setCart([...cart, product]);
                localStorage.setItem(
                  "cart",
                  JSON.stringify([...cart, product])
                );
                toast.success("Item Added to cart");
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div
        className="row container similar-products"
        style={{ fontFamily: "Calisto MT, serif" }}
      >
        <h4 style={{ marginLeft: "90px", fontWeight: "bold" }}>
          Similar Products
        </h4>
        {relatedProducts.length < 1 && (
          <p className="text-center">No Similar Products found</p>
        )}
        <div className="d-flex flex-wrap">
          {relatedProducts?.map((p) => (
            <div
              className="card m-2"
              style={{ height: "290px" }}
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
                      borderRadius: "20px",
                      width: "140px",
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
      <div
        className="row container similar-products"
        style={{ fontFamily: "Calisto MT, serif" }}
      >
        <h4 style={{ marginLeft: "90px", fontWeight: "bold" }}>
          By the same author
        </h4>
        {AuthorRelatedProducts.length < 1 && (
          <p className="text-center">No Similar Products found</p>
        )}
        <div className="d-flex flex-wrap">
          {AuthorRelatedProducts?.map((p) => (
            <div
              className="card m-2"
              style={{ height: "290px" }}
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
                      borderRadius: "20px",
                      width: "140px",
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
    </Layout>
  );
};

export default ProductDetails;
