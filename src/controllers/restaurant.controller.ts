import { NextFunction, Request, Response } from "express";
import { T } from "../libs/types/common";
import { AdminRequest, LoginInput, MemberInput } from '../libs/types/member';
import { MemberType } from "../libs/enums/member.enum";
import MemberService from "../models/Member.service";
import Errors, { HttpCode, Message } from "../libs/Errors";

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
    res.redirect("/admin");
  }
};
restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");
    res.render("login"); // This should render the login.ejs view
  } catch (err) {
    console.log("Error, getLogin:", err);
    res.redirect("/admin");
    
  }
};
restaurantController.processSignup = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("Process Signup");
    const file = req.file;
    if (!file)
      throw new Errors(HttpCode.BAD_REQUEST, Message.SOMETHING_WENT_WRONG);
    const newMember: MemberInput = req.body;
    newMember.memberImage = file?.path,
    newMember.memberType = MemberType.RESTAURANT;

    const result = await memberService.processSignup(newMember);

    req.session.member = result;
    req.session.save(function () {
      res.redirect("/admin/product/all");
    });
  } catch (err) {
    console.log("Error, processSignup:", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert("${message}") window.location.replace('admin/signup') <script> `
    );
  }
};

// ✅ FIXED: processLogin moved outside
restaurantController.processLogin = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("processLogin");
    const input: LoginInput = req.body;
    const result = await memberService.processLogin(input);

    req.session.member = result;
    req.session.save(function () {
      res.redirect("/admin/product/all"); // redirecting to mentioned endpoint
    });

  } catch (err: any) {
    console.log("Error, processLogin:", err);
    const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(`
      <script> alert("${message}"); window.location.replace('/admin/login'); </script>
    `);
  }
};


restaurantController.logout = async (req: AdminRequest, res: Response) => {
  try {
    console.log("logout");
     req.session.destroy(function(){
      res.redirect("/admin"); 
     });
  } catch (err: any) {
    console.log("Error,logout:", err);
    res.redirect("/admin");
  }
};

restaurantController.getUsers = async (req: Request, res: Response) => {
  try {
    console.log("getUsers")
    const result = await memberService.getUsers();
    res.render("users",{users: result});
  }catch (err) {
    console.log("Error, getUsers:", err);
    res.redirect("/admin/login");
  }
};

restaurantController.updatedChosenUser = async (req: Request, res: Response) => {
  try {
    console.log("updatedChosenUser")
    const result = await memberService.updatedChosenUser(req.body);
    res.status(HttpCode.OK).json({ data: result });
  } catch (err) {
    console.log("Error, updatedChosenUser:", err);
    if (err instanceof Errors) {
      res.status(err.code).json({ message: err.message });
    } else {
      const error = new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.SOMETHING_WENT_WRONG);
      res.status(error.code).json({ message: error.message });
    }
  }
};

// Authentication check  for session
restaurantController.checkAuthSession = async (req: AdminRequest, res: Response) => {
  try {
    console.log("checkAuthSession");
    if(req.session?.member) 
      res.send(`<script> alert("${req.session.member.memberNick}") </script> `);
    else res.send(`<script> alert("${Message.NOT_AUTHENTICATED}") </script>`);
  } catch (err: any) { 
    console.log("Error, checkAuthSession:", err);
    res.send(err);
  }
};

// Authorization  middleware
restaurantController.verifyRestaurant =(
  req: AdminRequest,
   res: Response,
   next: NextFunction
) => {
    if(req.session?.member?.memberType === MemberType.RESTAURANT) {
      req.member = req.session.member;
      next();
    }else {
    const message = Message.NOT_AUTHENTICATED;
    res.send(`
      <script> alert("${message}"); window.location.replace('/admin/login'); </script>`
    );
  }
};

export default restaurantController;