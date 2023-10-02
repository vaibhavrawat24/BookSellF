import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'

const Users = () => {
  return (
    <Layout title={"Dashboard - All Users"}>
        <div className="container-fluid m-3 p-3" style={{ fontFamily: 'Calisto MT, serif' }}>
        <div className="row">
            <div className="col-md-3">
                <AdminMenu/>
            </div>
            <div className="col-md-9" >
                <h1 style={{marginLeft:'380px' ,marginTop:'40px'}}>All Users</h1>
            </div>
        </div>
        </div>
        
    </Layout>
  )
}

export default Users