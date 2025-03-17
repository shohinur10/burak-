import {Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service";

const restaurantController: T = {};
restaurantController.goHome =(req: Request, res: Response) =>{
    try{
       console.log("goHome")// agar biz buni yozadigon bosak malumot serverga boradi va terminal jovobi terminalda korinadi 
      // bular hammasi try ichida voqealar
      //  logic
      // service model 
    res.send("Home Page");
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

restaurantController.getSignup =(req: Request, res: Response) =>{
    try{
      console.log("getSignup")
    res.send("Signup  Page");
      }  catch (err){
        console.log("Error, getSignup:", err);
      }
};

export  default restaurantController;