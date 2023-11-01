import React from "react";
import { NavLink, Link } from "react-router-dom";
import { GiBookCover } from "react-icons/gi";
import { useAuth } from "../../context/auth";
import { toast } from "react-hot-toast";
import Dashboard from "./../../pages/user/Dashboard";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import {
  CopyOutlined,
  EnvironmentOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  HomeOutlined,
  PaperClipOutlined,
  ProfileOutlined,
  ClearOutlined,
} from "@ant-design/icons";

import "../Styles/search.css";
import "../Layout/layout.css";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Succesfull");
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 100,
        }}
      >
        <div
          className="container-fluid"
          style={{ fontFamily: "Calisto MT, serif" }}
        >
          <Link to="/" className="navbar-brand" style={{ marginRight: "auto" }}>
            {" "}
            <GiBookCover /> BookSellF
          </Link>
          <div className="navu">
            <NavLink
              to="/home"
              className="nav-link"
              style={{ marginRight: "10px" }}
            >
              <HomeOutlined title="home" />
            </NavLink>{" "}
            <NavLink
              to="/cart"
              className="nav-link"
              style={{ marginRight: "10px" }}
            >
              <ShoppingCartOutlined title="cart" />
            </NavLink>
            {!auth.user ? (
              <>
                <NavLink
                  to="/login"
                  className="nav-link"
                  style={{ marginRight: "10px" }}
                >
                  <UserOutlined title="login" />
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  className="user nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <UserOutlined title="profile" />
                </NavLink>
                <ul className="dropdown-menu" style={{ marginRight: "auto" }}>
                  <li>
                    <NavLink
                      to={`/dashboard/${
                        auth?.user?.role === 1 ? "admin" : "user"
                      }`}
                      className="dropdown-item"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={handleLogout}
                      to="/login"
                      className="dropdown-item"
                    >
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </>
            )}
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <SearchInput />
              <li className="nav-item">
                <NavLink to="/home" className="nav-link home">
                  <HomeOutlined title="home" />
                </NavLink>
              </li>

              <li className="nav-item dropdown hehehome">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  <ProfileOutlined title="explore" />
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>
                      All Genres
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/bestselling"}>
                      Best Selling
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/trending"}>
                      Trending
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/authors"}>
                      All Authors
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/newarrival"}>
                      New Arrival
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/manga"}>
                      Manga
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/rent"}>
                      Rent It
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown ushome">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Explore
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>
                      All Genres
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/bestselling"}>
                      Best Selling
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/trending"}>
                      Trending
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/authors"}>
                      All Authors
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/newarrival"}>
                      New Arrival
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/manga"}>
                      Manga
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/rent"}>
                      Rent It
                    </Link>
                  </li>
                </ul>
              </li>

              {!auth.user ? (
                <>
                  <li className="nav-item home">
                    <NavLink to="/login" className="nav-link home">
                      <UserOutlined title="login" />
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown home">
                    <NavLink
                      className="user nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <UserOutlined title="profile" />
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link home">
                  <ShoppingCartOutlined title="cart" />
                </NavLink>
              </li>
              <li className="nav-item recycleme">
                <NavLink to="/recycle" className="nav-link">
                  <ClearOutlined title="recycle" />
                </NavLink>
              </li>

              <li className="nav-item recyclekyu">
                <NavLink to="/recycle" className="nav-link">
                  Recycle
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
