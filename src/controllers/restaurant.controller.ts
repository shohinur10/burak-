import {Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberService from '../models/Member.service';
import {MemberInput} from '../libs/types/member';
import { MemberType } from "../libs/types/member";

const restaurantController: T = {};
restaurantController.goHome =(req: Request, res: Response) =>{
    try{
       console.log("goHome")// agar biz buni yozadigon bosak malumot serverga boradi va terminal jovobi terminalda korinadi 
      // bular hammasi try ichida voqealar
      //  logic
      // service model 
    res.send("Home Page");
    //send/json /redirect/end / render  type of resond 
      }  catch (err){
        console.log("Error, goHome:", err);
      }
};

restaurantController.getLogin =(req: Request, res: Response) =>{
    try{
      console.log("getLogin")
    res.send("Login Page");
      }  catch (err){
        console.log("Error, getLogin:", err);
      }
};

restaurantController.processLogin =(req: Request, res: Response) =>{
    try{
      console.log("processLogin")
      res.send("Done")

      }  catch (err){
        console.log("Error, processLogin", err);
      }
      };

      restaurantController.processSignup= async(req: Request, res: Response) =>{
        try{
          console.log("processSignup")
          console.log("body:", req.body);

           const newMember: MemberInput =req.body;
           newMember.memberType =MemberType.RESTAURANT;

          const memberService = new MemberService();
    const result = await memberService.processSignup();
        res.send(" Done");
          }  catch (err){
            console.log("Error, processSignup:", err);
          }
          };
    
restaurantController.getSignup= (req: Request, res: Response) =>{
  try{
    console.log("getSignup")
  res.send("Signup Page");
    }  catch (err){
      console.log("Error, getSignup:", err);
    }
};

export  default restaurantController;