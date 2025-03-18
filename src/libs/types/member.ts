import { MemberType, MemberStatus } from '../enums/member.enum';

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
    createAt: Date; // Required
    updatedAt?: Date; // Optional (corrected from 'updete')
}
