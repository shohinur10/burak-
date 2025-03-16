import express from "express";
import { Request, Response } from "express"; // If needed

// Import controller properly
import restaurantController from "../controllers/restaurant.controller";  

const routerAdmin = express.Router();

routerAdmin.get("/", restaurantController.goHome);
routerAdmin.get("/login", restaurantController.getLogin);
routerAdmin.get("/signup", restaurantController.getSignup);

export default  routerAdmin;
