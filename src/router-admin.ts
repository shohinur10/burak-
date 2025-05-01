import express from "express";
const routerAdmin = express.Router();

import restaurantController from "./controllers/restaurant.controller";  
import productController from "./controllers/product.controllers";
import makeUploader from './libs/utils/uploader';

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
  restaurantController.verifyRestaurant, //Middleware : Authorization
  productController.getAllProducts
);

routerAdmin.post(
  "/product/create", 
  restaurantController.verifyRestaurant,//Authorization => req.member 
  makeUploader("products").array("productImages", 5), //Multer => req.files
  productController.createNewProduct//req.member req.files boyitildi 
);
// Multer bu form data handler qaysiki postmandan kelgan req 


routerAdmin.post(
  "/product/:id", //params
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
