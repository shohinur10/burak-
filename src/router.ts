import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controllers";  

router.post("/login", memberController.login);
router.post("/signup", memberController.signup);


export default router;

