import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group dashboard-menu">
          <h4>Admin Panel</h4>

          <NavLink
            to="/dashboard/darpit/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
        
          <NavLink
            to="/dashboard/darpit/create-product"
            className="list-group-item list-group-item-action"
          >
            CreateProduct
          </NavLink>
          <NavLink
            to="/dashboard/darpit/product-lists"
            className="list-group-item list-group-item-action"
          >
            Products List
          </NavLink>
          
          
        </div>
      </div>
    </>
  );
};

export default AdminMenu;