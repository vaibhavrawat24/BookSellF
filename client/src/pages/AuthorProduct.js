import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useCart } from "../context/cart";
import "../styles/homepage.css";
import "../styles/collectionPage.css";

const AuthorProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [author, setAuthor] = useState({});

  useEffect(() => {
    if (params?.slug) getPrductsByAuthor();
    // eslint-disable-next-line
  }, [params?.slug]);

  const getPrductsByAuthor = async () => {
    try {
      const { data } = await axios.get(`/api/v1/product/product-author/${params.slug}`);
      setProducts(data?.products);
      setAuthor(data?.author);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={author?.name}>
      <div className="collection-page">
        <div className="collection-banner" style={{ background: "#2c1810" }}>
          <div className="collection-banner-text">
            <span className="collection-banner-tag">✍️ Author</span>
            <h1>{author?.name}</h1>
            <p>{products.length} books by this author</p>
          </div>
        </div>

        <div className="collection-content">
          <p className="collection-meta">{products.length} titles found</p>
          {products.length === 0 ? (
            <p style={{ color: "#aaa", textAlign: "center", padding: "60px 0" }}>No books found for this author.</p>
          ) : (
            <div className="collection-grid">
              {products.map((p) => (
                <div className="card m-2" key={p._id} onClick={() => navigate(`/product/${p.slug}`)}>
                  <img
                    src={`${process.env.REACT_APP_API || "http://localhost:3002"}/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                    loading="lazy"
                  />
                  <div className="card-body">
                    <div className="popup"><span>{author?.name}</span></div>
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-price">{p.price.toLocaleString("en-US", { style: "currency", currency: "INR" })}</p>
                    <button className="btn-more" onClick={(e) => {
                      e.stopPropagation();
                      setCart([...cart, p]);
                      localStorage.setItem("cart", JSON.stringify([...cart, p]));
                      toast.success("Item Added to cart!");
                    }}>
                      Add to cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AuthorProduct;
