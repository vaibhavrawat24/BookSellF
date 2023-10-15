import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu';
import { useAuth } from '../../context/auth';
import "../Admin/admin.css";

const AdminDashboard = () => {
  const [auth]=useAuth();
  return (
    <Layout>
        <div className="container-fluid m-3 p-3" style={{ fontFamily: 'Calisto MT, serif'}}>
          <div className="row">
            <div className="col-md-3">
              <AdminMenu/>
            </div>
            <div className="admin col-md-9">
            <h4>Your profile</h4>
              <div className="admin card p-3" >
                <h3><span className="admin bold-text">Name:</span> {auth?.user?.name}</h3>
                <h3><span className="admin bold-text">Email:</span> {auth?.user?.email}</h3>
                <h3><span className="admin bold-text">Phone:</span> {auth?.user?.phone}</h3>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default AdminDashboard;