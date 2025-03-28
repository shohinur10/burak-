import { Request, Response } from "express";
import { T } from "../libs/types/common";
import { AdminRequest, LoginInput, MemberInput } from '../libs/types/member';
import { MemberType } from "../libs/enums/member.enum";
import MemberService from "../models/Member.service";
import Errors from "../libs/Errors";

// BSSR - uchun adminka loyihamiz uchun   

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
    res.render("signup");
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
restaurantController.processSignup = async (req: AdminRequest, res: Response) => {
  try {
    console.log("processSignup");
    console.log("body", req.body);

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    const result = await memberService.processSignup(newMember); 
    
    

     req.session.member = result;
     req.session.save(function(){
      res.send(result); 
     });
  } catch (err) {
    console.log("Error, processSignup:", err);
    res.send(err);
  }
};

restaurantController.processLogin = async (req: AdminRequest, res: Response) => {
  try {
    console.log("processLogin");
    console.log("body",req.body);
    
   // const input: LoginInput = req.body;
   const input =req.body as unknown as LoginInput;
    const result = await memberService.processLogin(input);
    
    
    
     req.session.member = result;
     req.session.save(function(){
      res.send(result); 
     });

  } catch (err: any) {
    console.log("Error, processLogin:", err);
    res.send(err);
  }
};


export default restaurantController;