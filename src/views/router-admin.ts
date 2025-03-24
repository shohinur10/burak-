import express from "express";
const routerAdmin = express.Router();
import restaurantController from "../controllers/restaurant.controller";  


/** Restaurant */

routerAdmin.get("/", restaurantController.goHome);
routerAdmin
.get("/login", restaurantController.getLogin)
.post("/login",restaurantController.processLogin); // Corrected order: .get()

routerAdmin
.get("/signup", restaurantController.getSignup) // Corrected order: .get()
.post("/signup", restaurantController.processSignup);  // Corrected order: .post()

/** Product */
/** User */ 

export default routerAdmin;
