import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controllers";  
import uploader from "./libs/utils/uploader";
import productController from "./controllers/product.controllers";


/** Member  */
router.get("/member/restaurant",memberController.getRestaurant);
router.post("/member/login", memberController.login);
router.post("/member/signup", memberController.signup);
router.post("/member/logout",  
    memberController.verifyAuth,
    memberController.logout);
router.get("/member/detail", 
    memberController.verifyAuth,
    memberController.getMemberDetails
);

router.post("/member/update", 
    memberController.verifyAuth, 
    uploader("member").single("memberImage"),
        memberController.updateMember
    );

router.get("/member/top-users", memberController.getTopUsers);


/**Product  */
router.get("/product/all", productController.getProducts);
/** Orders */ 
export default router;

