// import React from "react";
// import AdminMenu from "../../components/layout/AdminMenu";
// import Layout from "./../../components/layout/Layout";

// const Users = () => {
//   return (
//     <Layout title={"Dashboard - All Users"}>
//       <div className="container-fluid m-3 p-3 dashboard">
//         <div className="row">
//           <div className="col-md-3">
//             <AdminMenu />
//           </div>
//           <div className="col-md-9">
//             <h1 className="text-center">All Users</h1>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Users;

import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/layout/AdminMenu";
import Layout from "./../../components/layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/Product.css";
import throttleByAnimationFrame from "antd/es/_util/throttleByAnimationFrame";
const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  //getall products
  const getAllUsers = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/get-user");
      setUsers(data);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };
  
  //lifecycle method
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <Layout title={"Dashboard - All Product"}>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center">All Users List</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Phone</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((u, index) => (
                  <tr key={u._id}>
                    <td>{index + 1}</td>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.role}</td>
                    <td>{u.phone}</td>
                    <td>{u.address}</td>
                  </tr>
                ))}

                {/* <tr>
        
        {users?.map((u, i) => (
          <tr key={i}>
            <td>{u.name}</td>
            <td>{u.email}</td>
            <td>{u.phone}</td>
            <td>{u.address}</td>
            </tr>
        ))}
      </tr>  */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
