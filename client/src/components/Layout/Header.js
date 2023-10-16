import React from "react";
import { NavLink, Link } from "react-router-dom";
import { GiBookCover } from "react-icons/gi";
import { useAuth } from "../../context/auth";
import { toast } from "react-hot-toast";
import Dashboard from "./../../pages/user/Dashboard";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";
import "../Styles/search.css";

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
        style={{ position: "fixed", top: 0, width: "100%", zIndex: 100 }}
      >
        <div
          className="container-fluid"
          style={{ fontFamily: "Calisto MT, serif" }}
        >
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
          <Link to="/" className="navbar-brand">
            {" "}
            <GiBookCover /> BookSellf
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <SearchInput />
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Pick Yours
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
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="user nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {auth?.user?.name}
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
                  <li className="nav-item">
                    <NavLink to="/cart" className="nav-link">
                      <Badge count={cart?.length} showZero offset={[10, -5]}>
                        <span
                          style={{
                            fontFamily: "Calisto MT, serif",
                          }}
                        >
                          Cart
                        </span>
                      </Badge>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/recycle" className="nav-link">
                      Recycle
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
