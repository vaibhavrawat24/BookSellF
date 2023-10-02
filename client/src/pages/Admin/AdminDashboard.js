import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu';
import { useAuth } from '../../context/auth';

const AdminDashboard = () => {
  const [auth]=useAuth();
  return (
    <Layout>
        <div className="container-fluid m-3 p-3" style={{ fontFamily: 'Calisto MT, serif'}}>
          <div className="row">
            <div className="col-md-3">
              <AdminMenu/>
            </div>
            <div className="col-md-9">
              <div className="card w-75 p-3" style={{marginTop:'90px',height:'250px'}}>
                <h3 style={{ fontSize: '20px'}}>Admin Name: {auth?.user?.name}</h3>
                <h3 style={{ fontSize: '20px'}}>Admin Email: {auth?.user?.email}</h3>
                <h3 style={{ fontSize: '20px'}}>Admin Contact: {auth?.user?.phone}</h3>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default AdminDashboard;