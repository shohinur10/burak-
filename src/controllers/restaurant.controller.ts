import { Request, Response } from "express";
import { T } from "../libs/types/common";
import { LoginInput, MemberInput } from '../libs/types/member';
import { MemberType } from "../libs/enums/member.enum";
import MemberService from "../models/Member.service";


const memberService = new MemberService();

const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    res.render("home");
    //send / json / redirect / end /render data jonatish turlari 
  } catch (err) {
    console.log("Error, goHome:", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");
    res.render("Signup Page");
  } catch (err) {
    console.log("Error, getSignup:", err);
  }
}
restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");
    res.render("login"); // This should render the login.ejs view
  } catch (err) {
    console.log("Error, getLogin:", err);
    ;
  }
};
restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup");

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    
    const result = await memberService.processSignup(newMember); 

  
    res.send(result);
  } catch (err) {
    console.log("Error, processSignup:", err);
    res.send(err);
  }
};

restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    console.log("body:", req.body);
    const input: LoginInput = req.body;
    const result = await memberService.processLogin(input);

    res.send(result);
  } catch (err) {
    console.log("Error, processLogin:", err);
    res.send(err);
  }
};

export default restaurantController;