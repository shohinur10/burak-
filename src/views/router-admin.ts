import express from "express";
import { Request, Response } from "express"; // If needed

// Import controller properly
import restaurantController from "../controllers/restaurant.controller";  

const routerAdmin = express.Router();

/** Restaurant */
routerAdmin.get("/", restaurantController.goHome);
routerAdmin.get("/login", restaurantController.getLogin).post("/login",restaurantController.processLogin) // Corrected order: .get()


routerAdmin.get("/signup", restaurantController.getSignup);  // Corrected order: .get()
routerAdmin.post("/signup", restaurantController.processSignup);  // Corrected order: .post()

/** Product */

/** User */ 

export default routerAdmin;
