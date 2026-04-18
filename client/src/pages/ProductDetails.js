import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/homepage.css";
import "../styles/productDetails.css";

import toast from "react-hot-toast";
import { useCart } from "../context/cart";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [AuthorRelatedProducts, setAuthorRelatedProducts] = useState([]);
  const [cart, setCart] = useCart();
  const [authors, setAuthors] = useState([]);


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
    const modal = document.getElementById("myReviewModal");
    modal.style.display = "block";
  };

  const closeReviewModal = () => {
    const modal = document.getElementById("myReviewModal");
    modal.style.display = "none";
  };

  const handleOutsideClickReview = (event) => {
    const modal = document.getElementById("myReviewModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  useEffect(() => {
    if (params?.slug) getProduct();
  // eslint-disable-next-line
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
  const RelatedCard = ({ p }) => (
    <div
      className="card m-2"
      key={p._id}
      onClick={() => navigate(`/product/${p.slug}`)}
    >
      <img
        src={`${process.env.REACT_APP_API || "http://localhost:3002"}/api/v1/product/product-photo/${p._id}`}
        className="card-img-top"
        alt={p.name}
        loading="lazy"
      />
      <div className="card-body">
        <div className="popup">
          {authors.filter((a) => a._id === p.author).map((a) => (
            <span key={a._id}>{a.name}</span>
          ))}
        </div>
        <h5 className="card-title">{p.name}</h5>
        <p className="card-price">
          {p.price.toLocaleString("en-US", { style: "currency", currency: "INR" })}
        </p>
        <button
          className="btn-more"
          onClick={(e) => {
            e.stopPropagation();
            setCart([...cart, p]);
            localStorage.setItem("cart", JSON.stringify([...cart, p]));
            toast.success("Item Added to cart");
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="product-details-page">

        {/* ── Main product section ── */}
        <div className="product-details-main">
          <div className="product-details-image">
            <img
              src={`${process.env.REACT_APP_API || "http://localhost:3002"}/api/v1/product/product-photo/${product._id}`}
              alt={product.name}
              loading="lazy"
            />
          </div>

          <div className="product-details-info">
            <h1>{product.name}</h1>

            <div className="product-meta">
              <div className="product-meta-row">
                <span className="label">Author: </span>
                <Link to={`/author/${product?.author?.slug}`}>
                  {product?.author?.name}
                </Link>
              </div>
              <div className="product-meta-row">
                <span className="label">Genre: </span>
                <Link to={`/category/${product?.category?.slug}`}>
                  {product?.category?.name}
                </Link>
              </div>
            </div>

            <p className="product-description">{product.description}</p>

            <div className="product-price">
              {product?.price?.toLocaleString("en-US", {
                style: "currency",
                currency: "INR",
              })}
            </div>

            <div className="product-actions">
              <button className="btn-add-cart"
                onClick={(e) => {
                  e.stopPropagation();
                  setCart([...cart, product]);
                  localStorage.setItem("cart", JSON.stringify([...cart, product]));
                  toast.success("Item Added to cart");
                }}
              >
                Add to Cart
              </button>
              <button className="btn-rent" onClick={showModal}>
                Rent It
              </button>
            </div>

            <button className="review-link" onClick={showReviewModal}>
              Read / Post Reviews
            </button>
          </div>
        </div>

        {/* ── Rent modal ── */}
        <div id="myModal" className="modal" onClick={handleOutsideClick}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h5>Welcome to our Renting Page!</h5>
            <p style={{ marginTop: 12, lineHeight: 1.7, color: "#555" }}>
              We're excited to have you here. The renting feature is coming soon —
              stay tuned! In the meantime, feel free to explore our library and
              build a wishlist.
            </p>
            <p style={{ marginTop: 8, color: "#555" }}>Happy reading!</p>
          </div>
        </div>

        {/* ── Review modal ── */}
        <div id="myReviewModal" className="modal" onClick={handleOutsideClickReview}>
          <div className="modal-content">
            <span className="close" onClick={closeReviewModal}>&times;</span>
            <p style={{ textAlign: "center", color: "#888", marginTop: 12 }}>
              No reviews available yet.
            </p>
          </div>
        </div>

        <hr className="product-details-divider" />

        {/* ── Similar by genre ── */}
        <div className="related-section">
          <h4>Similar Books</h4>
          {relatedProducts.length < 1
            ? <p style={{ color: "#aaa", fontSize: 14 }}>No similar books found.</p>
            : <div className="related-grid">
                {relatedProducts.map((p) => <RelatedCard key={p._id} p={p} />)}
              </div>
          }
        </div>

        {/* ── By same author ── */}
        <div className="related-section">
          <h4>More by {product?.author?.name}</h4>
          {AuthorRelatedProducts.length < 1
            ? <p style={{ color: "#aaa", fontSize: 14 }}>No other books by this author.</p>
            : <div className="related-grid">
                {AuthorRelatedProducts.map((p) => <RelatedCard key={p._id} p={p} />)}
              </div>
          }
        </div>

      </div>
    </Layout>
  );
};

export default ProductDetails;
