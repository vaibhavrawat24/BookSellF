import React from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import "../Admin/admin.css";

const Users = () => {
  return (
    <Layout title={"Dashboard - All Users"}>
      <div
        className="container-fluid m-3 p-3"
        style={{ fontFamily: "Calisto MT, serif" }}
      >
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="user col-md-9">
            <h2>All Users</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
