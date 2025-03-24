import {Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput,Member,MemberInput } from "../libs/types/member";

 const memberService = new MemberService();



// REACT
const memberController: T = {};

memberController.signup = async (req: Request, res: Response) => {
    try {
      console.log("signup");
      console.log("body:", req.body);
  
      const input : MemberInput = req.body,
       result: Member  = await memberService.signup(input );
  
      res.json({member: result });
    } catch (err) {
      console.log("Error, signup:", err);
      if(err instanceof Error) res.status(err.code).json(err)
        else res.status(Error.standard.code).json(Error.standard)
   
    }
  };

memberController.login = async (req: Request, res: Response) => {
    try {
      console.log("login");
      const input: LoginInput = req.body,
      result = await memberService.login(input);
  
      res.json({ member: result});
    } catch (err) {
      console.log("Error, login:", err);   
      if(err instanceof Error) res.status(err.code).json(err)
        else res.status(Error.standard.code).json(Error.standard)

    }
  };

export  default memberController;

//  nma uchun default ishlatyappiz biz faqatgina shu fayldi chaqiryappmz aks holda biz default ishlatishimiz shartmas 