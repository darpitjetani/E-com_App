import express from "express";
import { 
    registerController,
    loginController,
    testController,
    forgotPasswordController,
    updateProfileController,
    getOrdersController,
    getAllOrdersController,
    orderStatusController,
    getAllUserController
 } from "../controllers/authController.js";
 import { isAdmin, requireSignIn, isDarpit } from "../middlewares/authMiddleware.js";



//router object
const router = express.Router();

//routing
//Register || method post 
router.post("/register", registerController);

//LOGIN || POST
router.post('/login', loginController)

//Forget Password
router.post('/forgot-password', forgotPasswordController)

router.get("/get-user", getAllUserController);

//test routes
router.get('/test', requireSignIn, isAdmin, testController)

//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
});

//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected Admin route auth
router.get("/darpit-auth", requireSignIn, isDarpit, (req, res) => {
  res.status(200).send({ ok: true });
});

//router profile
router.put('/profile',  requireSignIn, updateProfileController)

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);
export default router;