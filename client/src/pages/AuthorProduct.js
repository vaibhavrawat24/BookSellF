import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/homepage.css";
import "../styles/responsive.css";
import toast from "react-hot-toast";
import { useCart } from "../context/cart";

const AuthorProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [author, setAuthor] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);
  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-author/${params.slug}`
      );
      setProducts(data?.products);
      setAuthor(data?.author);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div
        className="container mt-3 category"
        style={{ fontFamily: "Calisto MT, serif" }}
      >
        <h4 className="category text-center">{author?.name} books</h4>
        <h6 className="text-center">({products?.length} result found )</h6>
        <hr />
        <div className="row">
          <div className="category col-md-9">
            <div className="d-flex flex-wrap">
              {products?.map((p) => (
                <div
                  className="author card m-2"
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
                      <div class="popup">{author.name}</div>
                      <h5 className="card-title">{p.name}</h5>
                      <h5 className="card-title card-price">
                        {p.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "INR",
                        })}
                      </h5>
                    </div>

                    <div className="details card-name-price">
                      {/* <button
                        className="details btn btn-info ms-1"
                        onClick={() => navigate(`/product/${p.slug}`)}
                      >
                        More Details
                      </button> */}
                      <button
                        className="btn btn-dark ms-1"
                        style={{
                          backgroundColor: "#EE7789",
                          border: "#EE7789",
                        }}
                        onClick={() => {
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
            {/* <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn btn-warning"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading ..." : "Loadmore"}
              </button>
            )}
          </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AuthorProduct;
