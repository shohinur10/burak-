import { Request, Response } from "express";
import { T } from "../libs/types/common";
import { MemberInput,Member,LoginInput } from "../libs/types/member";
import MemberService from "../models/Member.service";
import Errors from "../libs/Errors";
import AuthService from "../models/Auth.service";

// REACT uchun ishleydu togrirogi SPA

 const memberService = new MemberService();
 const authService = new AuthService();

 // prject dovomida memberServicesdan kop instance olganimiz uchun unu tashaqari chiqariboldik

const memberController: T = {};

memberController.signup = async (req: Request, res: Response) => {
  try {
    console.log("signup");
   const input : MemberInput = req.body,
     result: Member  = await memberService.signup(input);
   const token = await authService.createToken(result);

    res.json({member: result});
  } catch (err) {
    console.log("Error, signup:", err);
    if(err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);

    
  }
};

memberController.login = async (req: Request, res: Response) => {
  try {
    console.log("login");
    const input: LoginInput = req.body,
    result = await memberService.login(input),
    token =  await authService.createToken(result);
    console.log("token =>", token);
  
  
    res.json({member: result});
  } catch (err) {
    console.log("Error, login:", err);
    if(err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
 //   res.json({})
  }
};

export default memberController;
