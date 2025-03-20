import { Request, Response } from "express";
import { T } from "../libs/types/common";
import { LoginInput, MemberInput } from '../libs/types/member';
import { MemberType } from "../libs/enums/member.enum";
import MemberService from "../models/Member.service";

const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome"); // Log for server-side info
    // Add any business logic here
    res.send("Home Page");
  } catch (err) {
    console.log("Error, goHome:", err);
    res.status(500).send("Internal Server Error"); // Return a proper error message
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");
    res.send("Login Page");
  } catch (err) {
    console.log("Error, getLogin:", err);
    res.status(500).send("Internal Server Error");
  }
};

restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    console.log("body:", req.body);
    const input: LoginInput = req.body;

    const memberService = new MemberService();

     const result = await memberService.processLogin(input)

    // Implement login logic (check credentials, etc.)
    res.send(result);
  } catch (err) {
    console.log("Error, processLogin:", err);
    res.status(500).send("Internal Server Error");
  }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup");
    console.log("body:", req.body);

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT; // Set the member type to RESTAURANT
// bu loyihamizda admin restaurant 
    const memberService = new MemberService();
    
    // Assuming processSignup method needs member data to sign up
    const result = await memberService.processSignup(newMember); 

    // Handle the result and send a response accordingly
    res.send("Signup successful");
  } catch (err) {
    console.log("Error, processSignup:", err);
    res.send(err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");
    res.send("Signup Page");
  } catch (err) {
    console.log("Error, getSignup:", err);
    res.status(500).send("Error processing signup");
  }
};

export default restaurantController;
