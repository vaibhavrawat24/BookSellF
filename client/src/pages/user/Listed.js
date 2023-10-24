import React, { useState, useEffect } from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";

const Listed = () => {
  return (
    <Layout title={"Your Orders"}>
      <div
        className="container-flui p-3 m-3 dashboard"
        style={{ fontFamily: "Calisto MT, serif" }}
      >
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="order col-md-9">
            <h4 className="order-text">You havent listed any book yet.</h4>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Listed;
