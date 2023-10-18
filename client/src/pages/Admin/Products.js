import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { AiOutlineReload } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../Admin/admin.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    getAllProducts();
    getTotal();
  }, []);

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

  return (
    <Layout>
      <div
        className="container-fluid m-3 p-3"
        style={{ fontFamily: "Calisto MT, serif" }}
      >
        <div className="row dashboard">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="admin1 col-md-9 ">
            <h2 className="text-center">All Books List</h2>
            <div className="d-flex flex-wrap">
              {products
                ?.slice()
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((p) => (
                  <Link
                    key={p._id}
                    to={`/dashboard/admin/product/${p.slug}`}
                    className="product-link"
                  >
                    <div className="product card m-1">
                      <img
                        src={`/api/v1/product/product-photo/${p._id}`}
                        className="card-img-top"
                        alt={p.name}
                      />
                      <div className="hey">
                        <h5 className="card-title">{p.name}</h5>
                      </div>
                    </div>
                  </Link>
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
      </div>
    </Layout>
  );
};

export default Products;
