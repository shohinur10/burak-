import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/types/Errors";

const memberService = new MemberService();

const memberController: T = {};

memberController.signup = async (req: Request, res: Response) => {
  try {
    console.log("signup");
    console.log("body:", req.body);

    const input: MemberInput = req.body;
    const result: Member = await memberService.signup(input);

    res.json({ member: result });
  } catch (err) {
    console.log("Error, signup:", err);

    if (err instanceof Errors) {
      res.status(err.code).json(err);
    } else {
      const standardError = Errors.getStandardError();
      res.status(standardError.code).json(standardError);
    }
  }
};

memberController.login = async (req: Request, res: Response) => {
  try {
    console.log("login");
    const input: LoginInput = req.body;
    const result = await memberService.login(input);

    res.json({ member: result });
  } catch (err) {
    console.log("Error, login:", err);

    if (err instanceof Errors) {
      res.status(err.code).json(err);
    } else {
      const standardError = Errors.();
      res.status(standardError.code).json(standardError);
    }
  }
};

export default memberController;
