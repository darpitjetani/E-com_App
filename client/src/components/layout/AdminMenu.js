import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group dashboard-menu">
          <h4>Admin Panel</h4>
          <NavLink
            to="/dashboard/admin/abcd"
            className="list-group-item list-group-item-action"
          >
            Admin Dashboard
          </NavLink>
          <NavLink
            to="/dashboard/admin/profile"
            className="list-group-item list-group-item-action"
          >
            Admin Profile
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action"
          >
            CreateProduct
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            className="list-group-item list-group-item-action"
          >
            Products List
          </NavLink>
          <NavLink
            to="/dashboard/admin/orders"
            className="list-group-item list-group-item-action"
          >
            Orders List
          </NavLink>
          <NavLink
            to="/dashboard/admin/newuser"
            className="list-group-item list-group-item-action"
          >
            New User Create
          </NavLink>
          <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action"
          >
            User List 
          </NavLink>
          
        </div>
      </div>
    </>
  );
};

export default AdminMenu;