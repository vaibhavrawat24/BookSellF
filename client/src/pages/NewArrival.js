import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "./../components/Layout/Layout";
import "../styles/homepage.css";
import "../styles/collectionPage.css";

const NewArrival = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get("/api/v1/author/get-author").then(({ data }) => {
      if (data?.success) setAuthors(data.author);
    });
    axios.get("/api/v1/product/product-count").then(({ data }) => setTotal(data?.total));
  }, []);

  useEffect(() => {
    setLoading(true);
    axios.get(`/api/v1/product/product-list/${page}`).then(({ data }) => {
      setProducts((prev) => page === 1 ? data.products : [...prev, ...data.products]);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [page]);

  return (
    <Layout title="New Arrivals">
      <div className="collection-page">
        <div className="collection-banner">
          <img
            className="collection-banner-img"
            src="https://i.pinimg.com/736x/cd/a5/eb/cda5eb21955ce1d12da2ab6ba787888e.jpg"
            alt="New Arrivals"
            loading="lazy"
          />
          <div className="collection-banner-text">
            <span className="collection-banner-tag">✨ New Arrivals</span>
            <h1>Fresh Off the Press</h1>
            <p>Riveting stories, magnificent prose and heart-pounding adventures - just in.</p>
          </div>
        </div>

        <div className="collection-content">
          <p className="collection-meta">{total} books available</p>
          <div className="collection-grid">
            {products?.map((p) => (
              <div className="card m-2" key={p._id} onClick={() => navigate(`/product/${p.slug}`)}>
                <img src={`${process.env.REACT_APP_API || "http://localhost:3002"}/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p.name} loading="lazy" />
                <div className="card-body">
                  <div className="popup">
                    {authors.filter((a) => a._id === p.author).map((a) => <span key={a._id}>{a.name}</span>)}
                  </div>
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-price">{p.price.toLocaleString("en-US", { style: "currency", currency: "INR" })}</p>
                  <button className="btn-more" onClick={(e) => { e.stopPropagation(); setCart([...cart, p]); localStorage.setItem("cart", JSON.stringify([...cart, p])); toast.success("Item Added to cart!"); }}>
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="loadmore-wrapper">
            {products.length < total && (
              <button className="loadmore" onClick={() => setPage(page + 1)}>
                {loading ? "Loading..." : "Load More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewArrival;
