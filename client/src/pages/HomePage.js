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

const HomePage = () => {
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
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedAuthor, setSelectedAuthor] = useState("all");

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

  // const handledFilter = (value, type) => {
  //   // Implement your filtering logic here
  //   switch (type) {
  //     case "price":
  //       setSelectedPrice(value);
  //       break;
  //     case "category":
  //       setSelectedCategory(value);
  //       break;
  //     case "author":
  //       setSelectedAuthor(value);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // const applyFilters = () => {
  //   // Call the filterProduct function to apply filters
  //   filteredProduct();
  //   closeModal();
  // };

  const applyFilters = () => {
    if (
      selectedPrice !== "all" ||
      selectedCategory !== "all" ||
      selectedAuthor !== "all"
    ) {
      filteredProduct();
    }
    closeModal();
  };

  useEffect(() => {
    filteredProduct();
  }, [selectedPrice, selectedCategory, selectedAuthor]);

  const filteredProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
        price: selectedPrice,
        category: selectedCategory,
        author: selectedAuthor,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={"All Books "}>
      <div
        className="navbar filter"
        style={{ fontFamily: "Calisto MT, serif" }}
      >
        <p style={{ color: "black" }}>
          All books: <span className="total-text">{total}</span>
        </p>

        <button onclick="toggleOptions('sort')">Sort</button>
        <button onClick={showModal}>Filter</button>
      </div>

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
          <div className="filter-options">
            <label htmlFor="price">Filter by Price:</label>
            <select
              id="price"
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
            >
              <option value="all">All</option>
              {Prices?.map((p) => (
                <option key={p._id} value={p.array}>
                  {p.name}
                </option>
              ))}
            </select>
            <label htmlFor="category">Filter by Genre:</label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All</option>
              {categories
                .slice()
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((c) => (
                  <option key={c._id} value={c.array}>
                    {c.name}
                  </option>
                ))}
            </select>
            <label htmlFor="author">Filter by Author:</label>
            <select
              id="author"
              value={selectedAuthor}
              onChange={(e) => setSelectedAuthor(e.target.value)}
            >
              <option value="all">All</option>
              {authors
                .slice()
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((c) => (
                  <option key={c._id} value={c.array}>
                    {c.name}
                  </option>
                ))}
            </select>
            <br />
            <button
              className="btn rounded-pill"
              style={{ backgroundColor: "#EE7879" }}
              onClick={applyFilters}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
      <div
        className="filter-container"
        style={{ fontFamily: "Calisto MT, serif" }}
      >
        <div className="col-md-3 filters">
          <h3 style={{ textAlign: "center" }}>All Books({total})</h3>
          <hr />
          <h4 className="text-center mt-4">Filter By Price</h4>
          <div className="d-flex flex-column">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <div key={p._id}>
                  <Radio value={p.array}>{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          </div>

          <h4 className="text-center mt-4">Filter By Genre</h4>
          <div className="d-flex flex-column">
            {categories
              .slice()
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((c) => (
                <Checkbox
                  key={c._id}
                  onChange={(e) => handleFilter(e.target.checked, c._id)}
                >
                  {c.name}
                </Checkbox>
              ))}
          </div>
          <h4 className="text-center mt-4">Filter By Author</h4>
          <div className="d-flex flex-column">
            {authors
              .slice()
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((c) => (
                <Checkbox
                  key={c._id}
                  onChange={(e) => handleFilter(e.target.checked, c._id)}
                >
                  {c.name}
                </Checkbox>
              ))}
          </div>

          <div className="d-flex flex-column">
            <button
              className="btn btn-outline-warning"
              onClick={() => window.location.reload()}
            >
              Reset Filters
            </button>
          </div>
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

export default HomePage;
