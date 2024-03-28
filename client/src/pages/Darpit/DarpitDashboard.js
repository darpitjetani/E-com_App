import React from "react";
import DarpitMenu from "../../components/layout/DarpitMenu";
import Layout from "./../../components/layout/Layout";
import { useAuth } from "../../context/auth";
const style = {
  width: "18rem",
};
const DarpitDashboard = () => {
  const [auth] = useAuth();
  console.log("auth", auth);
  return (
    <Layout title={"Darpit Dashboard"}>
      <div className="container-fluid m-3 p-3 dashboard">
      <div className="row">
        <div className="col-md-3">
            <DarpitMenu />
        </div>
        <div className="col-md-9">
        <h1 className="text-center">Darpit Dashboard</h1>

          <div className="card w-75 p-3">
            
            <h3> Darpit Name : {auth?.user?.name}</h3>
            <h3> Darpit Email : {auth?.user?.email}</h3>
            <h3> Darpit Contact : {auth?.user?.phone}</h3>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};
export default DarpitDashboard;
