import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <>
      <div
        className="user text-center"
        style={{ fontFamily: "Calisto MT, serif" }}
      >
        <div className="list-group">
          <h4>Dashboard</h4>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
            Edit Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/sell"
            className="list-group-item list-group-item-action"
          >
            Sell/Rent
          </NavLink>
          <NavLink
            to="/dashboard/user/listed"
            className="list-group-item list-group-item-action"
          >
            Listed Products
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default UserMenu;
