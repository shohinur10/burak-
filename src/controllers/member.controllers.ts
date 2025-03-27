import { Request, Response } from "express";
import { T } from "../libs/types/common";
import { MemberInput,Member,LoginInput } from "../libs/types/member";
import MemberService from "../models/Member.service";
import Errors from "../libs/Errors";

// REACT uchun ishleydu togrirogi SPA

 const memberService = new MemberService();
 // prject dovomida memberServicesdan kop instance olganimiz uchun unu tashaqari chiqariboldik

const memberController: T = {};

memberController.signup = async (req: Request, res: Response) => {
  try {
    console.log("signup");
   const input : MemberInput = req.body,
     result: Member  = await memberService.signup(input);
// TODO : Tokens

    res.json({member: result});
  } catch (err) {
    console.log("Error, signup:", err);
    if(err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
    // res.json({});
    
  }
};

memberController.login = async (req: Request, res: Response) => {
  try {
    console.log("login");
    const input: LoginInput = req.body,
    result = await memberService.login(input);
  // TODO : Tokens
  
    res.json({member: result});
  } catch (err) {
    console.log("Error, login:", err);
    if(err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
 //   res.json({})
  }
};

export default memberController;
