import { MemberType, MemberStatus } from '../enums/member.enum';
import{ObjectId} from "mongoose";
export interface MemberInput {
    memberType?: MemberType; // Optional
    memberStatus?: MemberStatus; // Optional
    memberNick: string; // Required
    memberPhone: string; // Required
    memberPassword: string; // Required
    memberDesc?: string; // Optional
    memberAddress?: string; // Optional
    memberImage?: string; // Optional
    memberPoint?: number; // Optional
}
export interface Member {
_id: ObjectId;
    memberType: MemberType; // Optional
    memberStatus: MemberStatus; // Optional
    memberNick: string; // Required
    memberPhone: string; // Required
    memberPassword: string; // Required
    memberDesc: string; // Optional
    memberAddress?: string; // Optional
    memberImage?: string; // Optional
    memberPoint: number; // Optional
    createAt: Date; // Required
    updatedAt: Date; // Optional (corrected from 'updete')
} 
export interface LoginInput {
    memberNick:string;
    memberPassword:string;
}