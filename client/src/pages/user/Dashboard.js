import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
import "../user/User.css";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard- BookSellf"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="profile col-md-9">
            <h4 style={{ marginLeft: "10px" }}>Your profile</h4>
            <div className="dash card p-3">
              <h3>
                <span className="dash bold-text">Name:</span> {auth?.user?.name}
              </h3>
              <h3>
                <span className="dash bold-text">Email:</span>{" "}
                {auth?.user?.email}
              </h3>
              <h3>
                <span className="dash bold-text">Phone:</span>{" "}
                {auth?.user?.phone}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
