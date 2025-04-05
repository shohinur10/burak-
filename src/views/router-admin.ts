import express from "express";
const routerAdmin = express.Router();

import restaurantController from "../controllers/restaurant.controller";  
import productController from "../controllers/product.controllers";
import makeUploader from '../libs/utils/uploader';

/** ========== Restaurant Routes ========== **/
routerAdmin.get("/", restaurantController.goHome);

routerAdmin
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);

routerAdmin
  .get("/signup", restaurantController.getSignup)
  .post(
    "/signup", 
    makeUploader("members").single("memberImage"),  // handles single image upload for member
    restaurantController.processSignup
  );

routerAdmin.get("/check-me", restaurantController.checkAuthSession); 
routerAdmin.get("/logout", restaurantController.logout);


/** ========== Product Routes ========== **/
routerAdmin.get(
  "/product/all", //endpoint 
  restaurantController.verifyRestaurant, //authorization middleware 
  productController.getAllProducts
);

routerAdmin.post(
  "/product/create", 
  restaurantController.verifyRestaurant,
  makeUploader("products").array("productImages", 5), // allow up to 5 images per product
  productController.createNewProduct//Multer middleware
);

routerAdmin.post(
  "/product/:id", 
  restaurantController.verifyRestaurant,
  productController.updateChosenProduct
);
/**  USER */
routerAdmin.get("/user/all", restaurantController.verifyRestaurant,
  restaurantController.getUsers
);
routerAdmin.post("/user/edit", restaurantController.verifyRestaurant,
  restaurantController.updatedChosenUser
);
/** ========== Export ========== **/
export default routerAdmin;
