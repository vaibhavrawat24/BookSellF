import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useParams, useNavigate } from "react-router-dom";
import DropIn from "braintree-web-drop-in-react";
import { AiFillWarning } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";
import "../styles/homepage.css";
import "../styles/cartPage.css";

const CartPage = () => {
  const params = useParams();
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [AuthorRelatedProducts, setAuthorRelatedProducts] = useState([]);
  const [authors, setAuthors] = useState([]);
  const navigate = useNavigate();

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

  //total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "INR",
      });
    } catch (error) {
      console.log(error);
    }
  };
  //delete item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  //get payment gateway token
  const getToken = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/braintree/token");
      setClientToken(data?.clientToken);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getToken();
  }, [auth?.token]);

  //handle payments
  const handlePayment = async () => {
    try {
      setLoading(true);
      const { nonce } = await instance.requestPaymentMethod();
      const { data } = await axios.post("/api/v1/product/braintree/payment", {
        nonce,
        cart,
      });
      setLoading(false);
      localStorage.removeItem("cart");
      setCart([]);
      navigate("/dashboard/user/orders");
      toast.success("Payment Completed Successfully ");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <Layout>
      <div className="cart-page-wrapper">

        <h2 className="cart-title">Your Cart</h2>
        <p className="cart-subtitle">
          {!auth?.user ? "Hey guest — " : `Hey ${auth?.user?.name}, `}
          {cart?.length
            ? `you have ${cart.length} item${cart.length > 1 ? "s" : ""} in your cart.`
            : "your cart is empty."}
        </p>
        <hr className="cart-divider" />

        {cart?.length ? (
          <div className="cart-layout">

            {/* ── Items ── */}
            <div className="cart-items">
              {cart.map((p) => (
                <div className="cart-item" key={p._id}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="cart-item-img"
                    alt={p.name}
                    loading="lazy"
                  />
                  <div className="cart-item-info">
                    <h4>{p.name}</h4>
                    <p>{p.price.toLocaleString("en-US", { style: "currency", currency: "INR" })}</p>
                  </div>
                  <button className="cart-item-remove" onClick={() => removeCartItem(p._id)}>
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* ── Summary ── */}
            <div className="cart-summary-panel">
              <h3>Order Summary</h3>
              <div className="cart-total-row">
                <span>Total</span>
                <span>{totalPrice()}</span>
              </div>

              {auth?.user?.address ? (
                <>
                  <div className="cart-address-box">
                    <strong>Deliver to</strong>
                    {auth.user.address}
                  </div>
                  <button className="btn-update-address" onClick={() => navigate("/dashboard/user/profile")}>
                    Change Address
                  </button>
                </>
              ) : auth?.token ? (
                <button className="btn-update-address" onClick={() => navigate("/dashboard/user/profile")}>
                  Add Delivery Address
                </button>
              ) : (
                <button className="btn-login-checkout" onClick={() => navigate("/login", { state: "/cart" })}>
                  Login to Checkout
                </button>
              )}

              {clientToken && auth?.token && cart?.length ? (
                <>
                  <DropIn
                    options={{ authorization: clientToken, paypal: { flow: "vault" } }}
                    onInstance={(instance) => setInstance(instance)}
                  />
                  <button
                    className="btn-pay"
                    onClick={handlePayment}
                    disabled={loading || !instance || !auth?.user?.address}
                  >
                    {loading ? "Processing..." : "Make Payment"}
                  </button>
                </>
              ) : null}
            </div>

          </div>
        ) : (
          <div className="cart-empty">Your cart is empty. Start adding some books!</div>
        )}

        {/* ── Recommendations ── */}
        {relatedProducts.length > 0 && (
          <div className="cart-recommendations">
            <h4>Selected for You</h4>
            <div className="related-grid">
              {relatedProducts.map((p) => (
                <div className="card m-2" key={p._id} onClick={() => navigate(`/product/${p.slug}`)}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
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
              ))}
            </div>
          </div>
        )}

      </div>
    </Layout>
  );
};

export default CartPage;
