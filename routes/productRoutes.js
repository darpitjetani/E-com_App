import express from "express";
import  { 
    createProductController,
    getProductController,
    getSingleProductController,
    productPhotoController,
    deleteProductController,
    updateProductController,
    productFiltersController,
    productCountController,
    productListController,
    searchProductController,
    realtedProductController,
    productCategoryController,
    braintreeTokenController,
    brainTreePaymentController } from './../controllers/productController.js';
import { isAdmin,isDarpit,requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

// //routes
// router.post(
//     "/create-product",
//     requireSignIn,
//     isAdmin,
//     // isDarpit,
//     formidable(),
//     createProductController
//   );

router.post(
  "/create-product",
  requireSignIn,
  (req, res, next) => {
    if (isAdmin, isDarpit) {
      next();
    } else {
      return res.status(403).json({
        error: "You are not authorized to perform this action."
      });
    }
  },
  formidable(),
  createProductController
);

//routes
// router.put(
//     "/update-product/:pid",
//     requireSignIn,
//     isAdmin,
//     // isDarpit,
//     formidable(),
//     updateProductController
//   );

router.put(
  "/update-product/:pid",
  requireSignIn,
  (req, res, next) => {
    if (isAdmin, isDarpit) {
      next();
    } else {
      return res.status(403).json({
        error: "You are not authorized to perform this action."
      });
    }
  },
  formidable(),
  updateProductController
);
  
//get products
router.get('/get-product', getProductController)

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);

//filter product
router.post("/product-filters", productFiltersController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search product
router.get("/search/:keyword", searchProductController);

//similar product
router.get("/related-product/:pid/:cid", realtedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

  export default router;