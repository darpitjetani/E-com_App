import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/layout/AdminMenu";
import Layout from "./../../components/layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/Product.css";
import throttleByAnimationFrame from "antd/es/_util/throttleByAnimationFrame";
const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();


  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
<Layout title={"Dashboard - All Product"}>
<div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
  <div className="col-md-9">
    <h1 className="text-center">All Products List</h1>
    <table className="table">
      <thead>
        <tr>
          <th>No</th>
          <th>Image</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products?.map((p, index) => (
          <tr key={p._id}>
            <td>{index + 1}</td>
            <td>
            <Link
                to={`/dashboard/admin/product/${p.slug}`}
                className="product-link"
              >
                {p.photo}
              </Link>
              <img
                src={`/api/v1/product/product-photo/${p._id}`}
                alt={p.name}
                className="card-img-top"
                style={{ maxWidth: "80px", maxHeight: "80px" }}
              />
            </td>
            
            <td>
              <Link
                to={`/dashboard/admin/product/${p.slug}`}
                className="product-link"
              >
                {p.name}
              </Link>
            </td>

            <td> <Link
                to={`/dashboard/admin/product/${p.slug}`}
                className="product-link"
              >{p.description}</Link></td>
            <td><Link
                to={`/dashboard/admin/product/${p.slug}`}
                className="product-link"
              >{p.price}</Link></td>  
          </tr>

        ))}
      </tbody>
    </table>
    </div>
  </div>
</div>
</Layout>


  // <Layout>
  //       <div className="row dashboard">
  //     <div className="col-md-3">
  //       <AdminMenu />
  //     </div>
  //     <div className="col-md-9 ">
  //       <h1 className="text-center">All Products List </h1>
  //       <div className="d-flex flex-wrap">
  //      <div className="container dashboard">
  //         <div className="row ">
  //           <div className="col-md-7 p-0 m-0">
  //             {products?.map((p) => (
  //               <div className="row card flex-row" key={p._id}>
  //                 <div className="col-md-4">
                
  //                   <img
  //                     src={`/api/v1/product/product-photo/${p._id}`}
  //                     className="card-img-top"
  //                     alt={p.name}
  //                     width="50%"
  //                     height={"90px"}
  //                   />
  //                 </div>
  //                 <div className="col-md-4">
  //                   <table>
  //                     <thead>
  //                       <tr>
  //                         <td><p>{p.name}</p></td>
  //                         <td><p>{p.description.substring(0, 30)}</p></td>
  //                         <td><p>Price : {p.price}</p></td>
  //                       </tr>
  //                     </thead>
  //                   </table>  
 



  //                 </div>
  //                 <div className="col-md-4 cart-remove-btn">
  //                   <button
                      
  //                   >
  //                     Remove
  //                   </button>
                   
  //                 </div>
                  
  //               </div>
  //             ))}
  //           </div>
  //           </div>
  //           </div>
  //           </div>
  //           </div>
  //           </div>
  // </Layout>
  );
};

export default Products;