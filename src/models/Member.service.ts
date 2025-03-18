import MemberModel from "../schema/Member.model";
import { MemberInput } from "../libs/types/member";

class MemberService {
    private readonly memberModel;

    constructor(){
    this.memberModel =MemberModel;
    }
    public  async processSignup(input: MemberInput): Promise <string> {
     const    result = await this.memberModel.create(input);
      return  result;
    }
}
// biz qachon Promise ishlatamiz qachoinki bizning method async bolsa 
// nma uchun biz MemberService katta harfda yozvolyapmiz chunkin biz doim classlardi pascal case orqali qurib olamiz 
export default MemberService;