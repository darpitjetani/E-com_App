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

import React from "react";
import AdminMenu from "../../components/layout/AdminMenu";
import Layout from "./../../components/layout/Layout";
import { useAuth } from "../../context/auth";

const Users = () => {
    const [auth] = useAuth();
    console.log("auth", auth);

  return (
    <Layout title={"Dashboard - All Product"}>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center">Admin Profile</h1>
            <div className="col-md-9">
          <div className="card w-75 p-3 ">
            
            <h3> Admin Name : {auth?.user?.name}</h3>
            <h3> Admin Email : {auth?.user?.email}</h3>
            <h3> Admin Contact : {auth?.user?.phone}</h3>
          </div>
        </div>
          </div>
        </div>
        
      </div>
    </Layout>
  );
};

export default Users;
