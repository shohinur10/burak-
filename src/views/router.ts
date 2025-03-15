import express, { Request, Response } from "express";
const router = express.Router();
// Assuming memberController is in the correct relative path
import memberController from "../controllers/member.controllers";  // Adjust this based on your file structure

router.get("/", memberController.goHome);

router.get("/login", memberController.getLogin);

router.get("/signup ", memberController.getSignup);


// router.get("/", (req: Request, res: Response) => {
//     res.send("Home Page");
// });
// "/" bu url deb nnomlanadi 

// router.get("/login", (req: Request, res: Response) => {
//     res.send("Login Page");
// });

// router.get("/signup", (req: Request, res: Response) => {
//     res.send("Signup Page");
// });

// Fixing export to use the correct variable `router`
export default router;

