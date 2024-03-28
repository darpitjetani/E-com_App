import React from "react";
import AdminMenu from "../../components/layout/AdminMenu";
import Layout from "./../../components/layout/Layout";
import { useAuth } from "../../context/auth";
const style = {
  width: "18rem",
};
const Abcd = () => {
  const [auth] = useAuth();
  console.log("auth", auth);
  return (
    <Layout title={"Admin Dashboard"}>
      <div className="container-fluid m-3 p-3 dashboard">
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
        <h1 className="text-center">Admin Dashboard</h1>

          <div className="card w-75 p-3">
            
            <h3> Admin Name : {auth?.user?.name}</h3>
            <h3> Admin Email : {auth?.user?.email}</h3>
            <h3> Admin Contact : {auth?.user?.phone}</h3>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-3" style={style}>
                <div className="card-body text-center">
                  <h5 className="card-title">Total User</h5>
                  <h6 className="card-subtitle mb-2 text-muted font-weight-bold">12</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3" style={style}>
                <div className="card-body text-center">
                  <h5 className="card-title">Order</h5>
                  <h6 className="card-subtitle mb-2 text-muted font-weight-bold">12</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3" style={style}>
                <div className="card-body text-center">
                  <h5 className="card-title">Product</h5>
                  <h6 className="card-subtitle mb-2 text-muted font-weight-bold">12</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};
export default Abcd;
