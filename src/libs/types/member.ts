import { MemberType, MemberStatus } from '../enums/member.enum';
export interface MemberInput{
    memberType: MemberType;
    memberStatus: MemberStatus
    memberNick : string;
    memberPhone :string;
    memberPassword : string ;
    memberDesc?: string ;
    memberAddress?: string;
    memberImage?: string ;
    memberPoint?: number;
    createAt:Date;
    updete
}
export interface MemberInput{
    memberType?: MemberType;
    memberStatus?: MemberStatus
    memberNick : string;
    memberPhone :string;
    memberPassword : string ;
    memberDesc?: string ;
    memberAddress?: string;
    memberImage?: string ;
    memberPoint?: number;
}