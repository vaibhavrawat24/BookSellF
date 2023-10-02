import React from 'react';
import Layout from '../../components/Layout/Layout';
import UserMenu from '../../components/Layout/UserMenu';
import { useAuth } from '../../context/auth';

const Dashboard = () => {
  const [auth]=useAuth();
  return (
    <Layout title={"Dashboard- BookSellf"}>
        <div className="container-fluid m-3 p-3" style={{ fontFamily: 'Calisto MT, serif' }}>
          <div className="row">
            <div className="col-md-3">
              <UserMenu/>
            </div>
            <div className="col-md-9">
              <div className="card w-75 p-3">
                <h3 style={{ fontSize: '20px'}}>{auth?.user?.name}</h3>
                <h3 style={{ fontSize: '20px'}}>{auth?.user?.email}</h3>
                <h3 style={{ fontSize: '20px'}}>{auth?.user?.phone}</h3>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  );
};

export default Dashboard;